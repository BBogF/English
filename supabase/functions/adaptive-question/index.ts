const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const allowedLevels = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const authorization = request.headers.get('Authorization');
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
  if (!authorization || !supabaseUrl || !supabaseAnonKey) return json({ error: 'Sign in required' }, 401);

  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: { Authorization: authorization, apikey: supabaseAnonKey },
  });
  if (!userResponse.ok) return json({ error: 'Sign in required' }, 401);

  const apiKey = Deno.env.get('AI_API_KEY');
  if (!apiKey) return json({ error: 'AI provider is not configured' }, 503);

  try {
    const payload = await request.json();
    const apiUrl = Deno.env.get('AI_API_URL') || 'https://api.openai.com/v1/chat/completions';
    const model = Deno.env.get('AI_MODEL') || 'gpt-4o-mini';

    if (payload.action === 'evaluate') {
      const responses = Array.isArray(payload.responses) ? payload.responses.slice(0, 12) : [];
      if (!responses.length) return json({ error: 'No responses to evaluate' }, 400);
      const safeResponses = responses.map((item: Record<string, unknown>, index: number) => ({
        index: Number.isInteger(item.index) ? Number(item.index) : index,
        level: typeof item.level === 'string' && allowedLevels.has(item.level) ? item.level : 'B1',
        mode: item.mode === 'speak' ? 'speaking transcript' : 'writing',
        prompt: typeof item.prompt === 'string' ? item.prompt.slice(0, 350) : '',
        context: typeof item.context === 'string' ? item.context.slice(0, 500) : '',
        answer: typeof item.answer === 'string' ? item.answer.slice(0, 1200) : '',
      }));
      if (safeResponses.some((item) => !item.prompt || !item.answer)) return json({ error: 'Invalid response item' }, 400);
      const evaluationResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          temperature: 0.2,
          response_format: { type: 'json_object' },
          messages: [
            {
              role: 'system',
              content: 'Give formative English-learning feedback, not an official Duolingo English Test score. Return JSON: {"evaluations":[{"index":number,"criteria":{"grammar":1-5,"vocabulary":1-5,"coherence":1-5,"taskResponse":1-5,"fluency":1-5 or null},"issues":[{"quote":"exact substring from answer","reason":"short Russian explanation"}],"improvedAnswer":"short revision at the learner level, preserving their ideas"}]}. Scores are rough classroom rubrics, never probabilities or certified scores. Give no pronunciation score for a transcript; set fluency null for speaking transcripts if it cannot be judged. Quote only exact answer substrings. Keep the revision close to the learner\'s level, not a perfect model essay. Return one evaluation for every input index.',
            },
            { role: 'user', content: JSON.stringify({ responses: safeResponses }) },
          ],
        }),
      });
      if (!evaluationResponse.ok) return json({ error: 'Response evaluation failed' }, 502);
      const evaluationPayload = await evaluationResponse.json();
      const parsed = JSON.parse(evaluationPayload.choices?.[0]?.message?.content || '{}');
      const evaluations = Array.isArray(parsed.evaluations) ? parsed.evaluations : [];
      const safeEvaluations = evaluations.slice(0, safeResponses.length).map((item: Record<string, unknown>) => {
        const source = safeResponses.find((response) => response.index === Number(item.index));
        if (!source) return null;
        const rawCriteria = item.criteria && typeof item.criteria === 'object' ? item.criteria as Record<string, unknown> : {};
        const score = (key: string) => Math.max(1, Math.min(5, Math.round(Number(rawCriteria[key]) || 1)));
        const issues = Array.isArray(item.issues) ? item.issues.slice(0, 8).flatMap((issue: Record<string, unknown>) => {
          const quote = typeof issue.quote === 'string' ? issue.quote.slice(0, 100) : '';
          const index = quote ? source.answer.indexOf(quote) : -1;
          return index < 0 ? [] : [{ quote, index, reason: typeof issue.reason === 'string' ? issue.reason.slice(0, 200) : 'Проверь эту часть ответа.' }];
        }) : [];
        return {
          index: Number(item.index),
          criteria: { grammar: score('grammar'), vocabulary: score('vocabulary'), coherence: score('coherence'), taskResponse: score('taskResponse'), fluency: source.mode === 'writing' && rawCriteria.fluency !== null ? score('fluency') : null },
          issues,
          improvedAnswer: typeof item.improvedAnswer === 'string' ? item.improvedAnswer.slice(0, 1200) : source.answer,
        };
      }).filter(Boolean);
      return json({ evaluations: safeEvaluations });
    }

    const level = typeof payload.level === 'string' ? payload.level : '';
    if (!allowedLevels.has(level)) return json({ error: 'Invalid target level' }, 400);

    const recentPrompts = Array.isArray(payload.recentPrompts)
      ? payload.recentPrompts.filter((item: unknown) => typeof item === 'string').slice(-6).map((item: string) => item.slice(0, 180))
      : [];
    const modelResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'Create one original English proficiency question as JSON. Never quote, imitate, or reproduce a known test item. Return keys: type, prompt, context (optional), audioText (optional), options (exactly four English strings), correct (integer 0..3), explanation (short Russian explanation). Vary vocabulary, grammar, inference, and listening; listening questions must include a short audioText and ask about its meaning. Use the requested CEFR level. Avoid giving away the answer in the prompt.',
          },
          {
            role: 'user',
            content: JSON.stringify({ level, previousWasCorrect: Boolean(payload.previousWasCorrect), avoidPrompts: recentPrompts }),
          },
        ],
      }),
    });
    if (!modelResponse.ok) return json({ error: 'Question generation failed' }, 502);

    const modelPayload = await modelResponse.json();
    const content = modelPayload.choices?.[0]?.message?.content;
    const generated = JSON.parse(content || '{}');
    if (typeof generated.prompt !== 'string' || typeof generated.explanation !== 'string' || !Array.isArray(generated.options) || generated.options.length !== 4 || !Number.isInteger(generated.correct) || generated.correct < 0 || generated.correct > 3) {
      return json({ error: 'Invalid question returned by model' }, 502);
    }

    return json({
      question: {
        level,
        type: typeof generated.type === 'string' ? generated.type.slice(0, 40) : 'ИИ · В КОНТЕКСТЕ',
        prompt: generated.prompt.slice(0, 400),
        context: typeof generated.context === 'string' ? generated.context.slice(0, 900) : '',
        audioText: typeof generated.audioText === 'string' ? generated.audioText.slice(0, 500) : '',
        options: generated.options.map((option: unknown) => String(option).slice(0, 240)),
        correct: generated.correct,
        explanation: generated.explanation.slice(0, 500),
      },
    });
  } catch {
    return json({ error: 'Could not generate a question' }, 502);
  }
});

function json(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}