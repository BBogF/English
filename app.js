const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const questions = [
  { level: 'A1', type: 'ГРАММАТИКА', prompt: 'I ___ coffee every morning.', options: ['drink', 'drinks', 'drinking', 'am drink'], correct: 0, explanation: 'С I в Present Simple используем начальную форму глагола: I drink.' },
  { level: 'A1', type: 'СЛОВАРЬ', prompt: 'Which word means the opposite of “cold”?', options: ['warm', 'slow', 'dark', 'wet'], correct: 0, explanation: 'Warm означает «тёплый» и противоположен cold («холодный»).' },
  { level: 'A1', type: 'В КОНТЕКСТЕ', prompt: 'My brother is a doctor. He works in a ___.', options: ['hospital', 'library', 'station', 'factory'], correct: 0, explanation: 'Doctor работает в hospital — больнице.' },
  { level: 'A1', type: 'ФРАЗА', prompt: 'Could you ___ the window, please?', options: ['open', 'opened', 'opening', 'opens'], correct: 0, explanation: 'После could используем начальную форму глагола: could you open.' },
  { level: 'A1', type: 'ГРАММАТИКА', prompt: 'We have ___ apple and two bananas.', options: ['a', 'an', 'the', '—'], correct: 1, explanation: 'Перед исчисляемым словом в единственном числе с гласным звуком ставим an.' },

  { level: 'A2', type: 'ГРАММАТИКА', prompt: 'She has lived here ___ 2021.', options: ['for', 'since', 'during', 'from'], correct: 1, explanation: 'Since указывает на точку начала периода: since 2021.' },
  { level: 'A2', type: 'СЛОВАРЬ', prompt: 'If you borrow a book, you…', options: ['give it away forever', 'take it to use and return', 'buy it for someone', 'write inside it'], correct: 1, explanation: 'Borrow — взять что-то на время и вернуть; lend — дать на время.' },
  { level: 'A2', type: 'В КОНТЕКСТЕ', prompt: 'Although it was raining, they ___ for a walk.', options: ['went', 'have gone', 'go', 'were go'], correct: 0, explanation: 'Для завершенного действия в прошлом используется Past Simple: went.' },
  { level: 'A2', type: 'ФРАЗА', prompt: 'Would you mind ___ the door?', options: ['close', 'to close', 'closing', 'closed'], correct: 2, explanation: 'После Would you mind используется форма глагола с -ing: closing.' },
  { level: 'A2', type: 'ЧТЕНИЕ', prompt: 'Why did Maya take the earlier train?', context: 'Maya usually takes the 9:15 train, but today she has a job interview at 10:00. The earlier train arrives at 9:20.', options: ['She has an interview.', 'She is meeting a friend.', 'The usual train was cancelled.', 'She wants to visit the station.'], correct: 0, explanation: 'В тексте прямо сказано, что ранний поезд нужен ей к собеседованию в 10:00.' },

  { level: 'B1', type: 'ГРАММАТИКА', prompt: 'Despite ___ tired, he finished the report.', options: ['be', 'being', 'was', 'to be'], correct: 1, explanation: 'После despite используется существительное или герундий: despite being tired.' },
  { level: 'B1', type: 'ФРАЗОВЫЙ ГЛАГОЛ', prompt: 'We have run out of milk. We need to…', options: ['buy some more', 'drink it slowly', 'put it away', 'throw the fridge out'], correct: 0, explanation: 'Run out of означает «израсходовать, остаться без чего-либо».' },
  { level: 'B1', type: 'ГРАММАТИКА', prompt: 'By the time we arrived, the film ___.', options: ['already starts', 'has already started', 'had already started', 'was already start'], correct: 2, explanation: 'Действие произошло раньше другого момента в прошлом: Past Perfect — had started.' },
  { level: 'B1', type: 'СЛОВАРЬ', prompt: 'The new policy aims to ___ waste.', options: ['reduce', 'refuse', 'remove', 'replace'], correct: 0, explanation: 'Reduce waste — сокращать количество отходов. Остальные глаголы здесь не подходят по смыслу.' },
  { level: 'B1', type: 'ЧТЕНИЕ', prompt: 'What can be inferred about the café?', context: 'The café has replaced its paper menus with a QR code. Several customers have asked for printed copies, so the owner plans to keep a few at the counter.', options: ['It will close soon.', 'It is responding to customer preferences.', 'It has stopped serving regular customers.', 'It will remove the QR code.'], correct: 1, explanation: 'Владелец оставит несколько печатных меню после просьб посетителей, то есть учитывает их предпочтения.' },

  { level: 'B2', type: 'ГРАММАТИКА', prompt: '___ we known about the delay, we would have left later.', options: ['If', 'Had', 'Have', 'Would'], correct: 1, explanation: 'В условном предложении третьего типа возможна инверсия: Had we known = If we had known.' },
  { level: 'B2', type: 'СЛОВАРЬ', prompt: 'An ambiguous response is…', options: ['clear and detailed', 'open to more than one interpretation', 'deliberately rude', 'completely unrelated'], correct: 1, explanation: 'Ambiguous означает «двусмысленный», допускающий несколько трактовок.' },
  { level: 'B2', type: 'СЛОВАРЬ', prompt: '“Notwithstanding the cost” means…', options: ['because of the cost', 'in addition to the cost', 'despite the cost', 'instead of the cost'], correct: 2, explanation: 'Notwithstanding — формальный предлог со значением «несмотря на».' },
  { level: 'B2', type: 'ГРАММАТИКА', prompt: 'If I ___ about the roadworks, I would have taken another route.', options: ['knew', 'had known', 'would know', 'have known'], correct: 1, explanation: 'Условие о нереальном прошлом: If + Past Perfect, would have + причастие.' },
  { level: 'B2', type: 'ЧТЕНИЕ', prompt: 'Why was the launch postponed?', context: 'The product was ready, but user trials revealed that its setup instructions were unclear. The team delayed the launch to rewrite them and run another trial.', options: ['The product was unfinished.', 'The team needed to improve onboarding.', 'The trial attracted too few users.', 'The launch date was never announced.'], correct: 1, explanation: 'Команда отложила запуск, чтобы переписать инструкции по настройке и повторить тестирование.' },

  { level: 'C1', type: 'СЛОВАРЬ', prompt: 'To alleviate pressure is to…', options: ['make it less severe', 'make it more visible', 'refuse to discuss it', 'move it elsewhere'], correct: 0, explanation: 'Alleviate означает «облегчать, смягчать» проблему или давление.' },
  { level: 'C1', type: 'ГРАММАТИКА', prompt: 'Had it not been for your notes, I ___ the deadline.', options: ['miss', 'would miss', 'would have missed', 'had missed'], correct: 2, explanation: 'Had it not been for — инвертированное условие о прошлом; результат: would have + причастие.' },
  { level: 'C1', type: 'СЛОВАРЬ', prompt: 'A succinct explanation is…', options: ['brief but clear', 'technically incorrect', 'emotionally persuasive', 'repeated in several ways'], correct: 0, explanation: 'Succinct — краткий и емкий, без лишних слов.' },
  { level: 'C1', type: 'УСТОЙЧИВОЕ ВЫРАЖЕНИЕ', prompt: 'The proposal was met with skepticism. People…', options: ['accepted it immediately', 'responded with doubt', 'failed to notice it', 'asked for a shorter version'], correct: 1, explanation: 'To be met with skepticism — встретить скептическую реакцию или сомнения.' },
  { level: 'C1', type: 'ЧТЕНИЕ', prompt: 'What is the writer’s main reservation?', context: 'The pilot scheme produced promising results in two districts. Yet its success may depend on unusually high volunteer participation, a condition that could prove difficult to reproduce elsewhere.', options: ['The trial was too expensive.', 'The results may not generalise to other places.', 'Volunteers were unwilling to participate.', 'The scheme was tested in too many districts.'], correct: 1, explanation: 'Автор сомневается, что результаты удастся повторить в местах, где нет такого же высокого участия добровольцев.' },

  { level: 'C2', type: 'ТОЧНОСТЬ СЛОВА', prompt: 'An equivocal statement is…', options: ['unequivocally false', 'deliberately or inherently unclear', 'unusually persuasive', 'based on strong evidence'], correct: 1, explanation: 'Equivocal — неоднозначный или уклончивый; смысл нельзя определить однозначно.' },
  { level: 'C2', type: 'СЛОВАРЬ', prompt: 'A perfunctory inspection is carried out…', options: ['with little care or thoroughness', 'by a large committee', 'after extensive preparation', 'with great enthusiasm'], correct: 0, explanation: 'Perfunctory описывает формальное, поверхностное действие, выполненное без должной тщательности.' },
  { level: 'C2', type: 'УСТОЙЧИВОЕ ВЫРАЖЕНИЕ', prompt: '“The outcome is all but certain” means the outcome is…', options: ['almost certain', 'impossible to predict', 'certain to be negative', 'still far away'], correct: 0, explanation: 'All but certain означает «почти несомненный»; здесь all but = практически.' },
  { level: 'C2', type: 'ТОЧНОСТЬ СЛОВА', prompt: 'In “an independent, disinterested mediator”, disinterested means…', options: ['bored by the dispute', 'impartial and without personal stake', 'unwilling to take part', 'unaware of the facts'], correct: 1, explanation: 'В формальном значении disinterested — беспристрастный. Не путать с uninterested («не заинтересованный, скучающий»).' },
  { level: 'C2', type: 'ГРАММАТИКА', prompt: 'Hardly ___ the announcement when the questions began.', options: ['had she finished', 'she had finished', 'did she finished', 'has she finish'], correct: 0, explanation: 'После Hardly в начале предложения используется инверсия; для прошлого: Hardly had she finished…' },
];

questions.push(
  { level: 'A1', type: 'АУДИРОВАНИЕ', audioText: 'The bus leaves at half past eight. Let’s wait near the main entrance.', prompt: 'Where should they wait?', options: ['At the bus stop across town', 'Near the main entrance', 'Inside the bus', 'By the ticket office'], correct: 1, explanation: 'В записи сказано: wait near the main entrance.' },
  { level: 'A1', type: 'ГОВОРЕНИЕ', mode: 'speak', prompt: 'Tell us about your morning.', speechInstruction: 'Скажи несколько фраз о том, во сколько ты встаёшь и что делаешь сначала.', minWords: 5, speechKeywords: ['morning', 'usually', 'breakfast', 'wake', 'first', 'then'], explanation: 'Хороший ответ содержит простые действия и понятную последовательность.' },
  { level: 'A2', type: 'АУДИРОВАНИЕ', audioText: 'Hi, this is Nina. I’m calling to say I’ll be ten minutes late. Please order without me.', prompt: 'What does Nina ask the listener to do?', options: ['Wait outside for ten minutes', 'Order food before she arrives', 'Cancel their plans', 'Call her back immediately'], correct: 1, explanation: 'She says: Please order without me.' },
  { level: 'A2', type: 'ГОВОРЕНИЕ', mode: 'speak', prompt: 'Describe a place you enjoy visiting.', speechInstruction: 'Расскажи, где это место, что там можно делать и почему оно тебе нравится.', minWords: 7, speechKeywords: ['place', 'because', 'like', 'visit', 'there', 'enjoy'], explanation: 'Ответ раскрывает место и причину, используя несколько связанных предложений.' },
  { level: 'B1', type: 'АУДИРОВАНИЕ', audioText: 'The workshop has been moved from Thursday to Tuesday because the presenter is travelling later in the week.', prompt: 'Why was the workshop moved?', options: ['The room was unavailable on Thursday', 'The presenter will be away later in the week', 'More people can attend on Tuesday', 'The workshop has been cancelled'], correct: 1, explanation: 'The presenter is travelling later in the week, so the workshop moved earlier.' },
  { level: 'B1', type: 'ГОВОРЕНИЕ', mode: 'speak', prompt: 'Should people learn a new skill online or in person?', speechInstruction: 'Вырази своё мнение и приведи хотя бы одну причину или пример.', minWords: 9, speechKeywords: ['think', 'because', 'online', 'person', 'example', 'learn'], explanation: 'В ответе есть позиция и объяснение, а не только однословный выбор.' },
  { level: 'B2', type: 'АУДИРОВАНИЕ', audioText: 'Although the first proposal was cheaper, the committee chose the second one because it would be easier to maintain over time.', prompt: 'Why did the committee choose the second proposal?', options: ['It had the lowest initial cost', 'It would be simpler to maintain', 'It could be finished more quickly', 'The first proposal was incomplete'], correct: 1, explanation: 'Решающим фактором стало то, что второй вариант проще поддерживать в будущем.' },
  { level: 'B2', type: 'ГОВОРЕНИЕ', mode: 'speak', prompt: 'Should cities limit private cars in busy areas?', speechInstruction: 'Выскажи позицию, назови последствие и упомяни возможный контраргумент.', minWords: 12, speechKeywords: ['because', 'however', 'traffic', 'people', 'public', 'although', 'would'], explanation: 'Развёрнутый ответ объясняет позицию и учитывает хотя бы одну другую точку зрения.' },
  { level: 'C1', type: 'АУДИРОВАНИЕ', audioText: 'The report’s headline figures appear encouraging, but they exclude participants who withdrew before the final assessment, which may overstate the programme’s impact.', prompt: 'What limitation does the speaker identify?', options: ['The programme was too expensive to continue', 'Withdrawals may distort the reported impact', 'The final assessment was never completed', 'The headline figures were not published'], correct: 1, explanation: 'Если выбывших участников исключить, итоговый эффект может выглядеть завышенным.' },
  { level: 'C1', type: 'ГОВОРЕНИЕ', mode: 'speak', prompt: 'How can a team distinguish useful evidence from a persuasive anecdote?', speechInstruction: 'Предложи критерии оценки и объясни, почему одного яркого примера может быть недостаточно.', minWords: 14, speechKeywords: ['evidence', 'sample', 'data', 'reliable', 'example', 'context', 'bias'], explanation: 'Сильный ответ предлагает проверяемые критерии и объясняет ограничения отдельных примеров.' },
  { level: 'C2', type: 'АУДИРОВАНИЕ', audioText: 'The initiative is not without merit; nevertheless, its proponents have yet to demonstrate that the observed gains are attributable to the intervention rather than to broader changes.', prompt: 'What is the speaker’s main reservation?', options: ['The initiative has no measurable benefits', 'The gains may have other causes', 'Its proponents oppose further research', 'Broader changes were caused by the initiative'], correct: 1, explanation: 'Говорящий сомневается в причинной связи: рост мог произойти из-за других изменений.' },
  { level: 'C2', type: 'ГОВОРЕНИЕ', mode: 'speak', prompt: 'When should a society accept uncertainty rather than demand a definitive answer?', speechInstruction: 'Сформулируй аргумент, оговори исключение и объясни, как действовать при неполных данных.', minWords: 16, speechKeywords: ['uncertainty', 'evidence', 'risk', 'however', 'decision', 'context', 'possible'], explanation: 'Сильный ответ рассуждает о балансе доказательств, риска и последствий поспешного решения.' },
);

const detTaskTypes = [
  { id: 'read-select', title: 'Read and Select', skill: 'Literacy', description: 'Отличай реальные английские слова от похожих выдуманных.', time: 45, questions: [{ level: 'A2', type: 'Read and Select', mode: 'multi', prompt: 'Выбери оба настоящих английских слова.', options: ['reliable', 'frample', 'journey', 'plonter'], correct: [0, 2], explanation: 'Reliable и journey — реальные слова; frample и plonter здесь выдуманы.' }] },
  { id: 'fill-blanks', title: 'Fill in the Blanks', skill: 'Literacy', description: 'Восстанови пропущенное слово по смыслу предложения.', time: 60, questions: [{ level: 'A2', type: 'Fill in the Blanks', mode: 'write', prompt: 'Complete the sentence with one word.', context: 'Although it was raining, we ___ walking to the station.', expectedText: 'continued', requiredWords: ['continued'], minWords: 1, explanation: 'Continue walking означает «продолжать идти».' }] },
  { id: 'read-complete', title: 'Read and Complete', skill: 'Literacy', description: 'Допиши пропущенные буквы, опираясь на контекст.', time: 75, questions: [{ level: 'B1', type: 'Read and Complete', mode: 'write', prompt: 'Type the missing word.', context: 'The new schedule is more fl_x_ble, so people can choose when to work.', expectedText: 'flexible', requiredWords: ['flexible'], minWords: 1, explanation: 'Flexible значит «гибкий»; контекст говорит о возможности выбирать время.' }] },
  { id: 'listen-type', title: 'Listen and Type', skill: 'Comprehension', description: 'Прослушай короткую фразу один раз и напечатай услышанное.', time: 60, questions: [{ level: 'B1', type: 'Listen and Type', mode: 'write', audioText: 'The museum closes earlier on Sundays.', prompt: 'Прослушай один раз и напечатай фразу целиком.', expectedText: 'The museum closes earlier on Sundays', minWords: 5, explanation: 'Сверь услышанные служебные слова, окончание closes и обстоятельство on Sundays.' }] },
  { id: 'interactive-reading', title: 'Interactive Reading', skill: 'Literacy', description: 'Прочитай небольшой текст и ответь на вопросы по смыслу.', time: 90, questions: [{ level: 'B1', type: 'Interactive Reading', mode: 'choice', context: 'A neighborhood library began lending small tools as well as books. Residents can borrow drills and gardening equipment for up to three days. The library says the programme reduces costs for people who only need a tool once.', prompt: 'Why does the library lend tools?', options: ['To replace its book collection', 'To help residents avoid buying rarely used equipment', 'To train people to repair appliances', 'To collect gardening supplies'], correct: 1, explanation: 'Текст говорит, что жители могут не покупать инструменты, которыми пользуются редко.' }, { level: 'B1', type: 'Interactive Reading', mode: 'choice', context: 'A neighborhood library began lending small tools as well as books. Residents can borrow drills and gardening equipment for up to three days. The library says the programme reduces costs for people who only need a tool once.', prompt: 'How long may a resident borrow a tool?', options: ['One day', 'Up to three days', 'One week', 'Until the next library event'], correct: 1, explanation: 'В тексте указан срок: up to three days.' }] },
  { id: 'interactive-listening', title: 'Interactive Listening', skill: 'Comprehension', description: 'Прослушай диалог и выбери подходящую реакцию.', time: 90, questions: [{ level: 'B1', type: 'Interactive Listening', mode: 'choice', audioText: 'Hi, Sam. The study room we booked is unavailable this afternoon. The librarian says there is a smaller room free on the second floor, or we can move our session to tomorrow.', prompt: 'What are the two options?', options: ['Use a smaller room today or meet tomorrow', 'Cancel the library membership', 'Meet outside or book a larger room', 'Study today or finish the project alone'], correct: 0, explanation: 'В диалоге предлагают перейти в меньшую комнату сегодня или перенести встречу на завтра.' }, { level: 'B1', type: 'Interactive Listening', mode: 'choice', audioText: 'Hi, Sam. The study room we booked is unavailable this afternoon. The librarian says there is a smaller room free on the second floor, or we can move our session to tomorrow.', prompt: 'Where is the available room?', options: ['On the second floor', 'Next to the entrance', 'In another building', 'Below the reading room'], correct: 0, explanation: 'Свободная комната находится на втором этаже.' }] },
  { id: 'write-photo', title: 'Write About the Photo', skill: 'Production', description: 'Опиши сцену, добавь детали и предположение о происходящем.', time: 120, questions: [{ level: 'B1', type: 'Write About the Photo', mode: 'write', imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80', imageAlt: 'Коллеги обсуждают проект за столом', prompt: 'Describe the photo in English.', writingInstruction: 'Напиши 3–5 предложений: что видно, что делают люди и что может произойти дальше.', minWords: 25, requiredWords: ['people', 'working', 'meeting'], explanation: 'Опиши только видимые детали; предположение пометь словами may, might или probably.' }] },
  { id: 'read-write', title: 'Read, Then Write', skill: 'Production', description: 'Прочитай короткий текст и напиши связанный ответ.', time: 150, questions: [{ level: 'B1', type: 'Read, Then Write', mode: 'write', context: 'Many offices have introduced meeting-free mornings. Supporters say this gives employees uninterrupted time for focused work. Others worry that urgent questions may take longer to resolve.', prompt: 'Would meeting-free mornings work well for your team? Explain your view.', writingInstruction: 'Ответь на вопрос, приведи причину и конкретный пример.', minWords: 35, requiredWords: ['because', 'example'], explanation: 'Свяжи позицию с доводом и примером; можно упомянуть ограничение или контраргумент.' }] },
  { id: 'interactive-writing', title: 'Interactive Writing', skill: 'Production', description: 'Разверни мысль, затем ответь на уточняющий вопрос.', time: 180, questions: [{ level: 'B2', type: 'Interactive Writing', mode: 'write', prompt: 'Should public transport be free in large cities?', writingInstruction: 'Напиши аргументированное мнение с одной причиной и примером.', minWords: 35, requiredWords: ['because', 'for example'], explanation: 'Проверь тезис, причину и пример.' }, { level: 'B2', type: 'Interactive Writing · follow-up', mode: 'write', prompt: 'What is one possible drawback of your proposal, and how could a city address it?', writingInstruction: 'Ответь на предыдущий аргумент: добавь ограничение и возможное решение.', minWords: 25, requiredWords: ['however', 'could'], explanation: 'Уточняющий ответ должен развивать предыдущую позицию, а не повторять её.' }] },
  { id: 'speak-photo', title: 'Speak About the Photo', skill: 'Conversation', description: 'Опиши изображение вслух и добавь вероятное объяснение.', time: 90, questions: [{ level: 'B1', type: 'Speak About the Photo', mode: 'speak', imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80', imageAlt: 'Коллеги обсуждают проект за столом', prompt: 'Describe what is happening in the photo.', speechInstruction: 'Говори 30–60 секунд. Назови детали и добавь предположение о ситуации.', minWords: 20, speechKeywords: ['people', 'working', 'meeting', 'probably', 'might', 'table'], explanation: 'Расширь ответ наблюдаемыми деталями и осторожным предположением.' }] },
  { id: 'read-speak', title: 'Read, Then Speak', skill: 'Conversation', description: 'Используй короткий текст как повод для устного ответа.', time: 90, questions: [{ level: 'B1', type: 'Read, Then Speak', mode: 'speak', context: 'Some people prefer learning a new skill alone, while others learn better with a group.', prompt: 'Which approach works better for you, and why?', speechInstruction: 'Выскажи позицию, добавь причину и один пример.', minWords: 18, speechKeywords: ['because', 'group', 'alone', 'example', 'learn'], explanation: 'Сравни варианты и подкрепи своё мнение примером.' }] },
  { id: 'interactive-speaking', title: 'Interactive Speaking', skill: 'Conversation', description: 'Ответь на вопрос и продолжи разговор после уточнения.', time: 120, questions: [{ level: 'B1', type: 'Interactive Speaking', mode: 'speak', prompt: 'What is one skill you would like to learn?', speechInstruction: 'Ответь по-английски и объясни, зачем тебе этот навык.', minWords: 12, speechKeywords: ['learn', 'because', 'skill', 'would', 'use'], explanation: 'Назови навык и цель.' }, { level: 'B1', type: 'Interactive Speaking · follow-up', mode: 'speak', prompt: 'How would you make time to practise it?', speechInstruction: 'Продолжи мысль: предложи конкретное расписание или способ практики.', minWords: 12, speechKeywords: ['practice', 'time', 'week', 'could', 'schedule'], explanation: 'Добавь конкретное действие и периодичность.' }] },
  { id: 'listen-speak', title: 'Listen, Then Speak', skill: 'Conversation', description: 'Прослушай вопрос и ответь голосом, опираясь на услышанное.', time: 90, questions: [{ level: 'B2', type: 'Listen, Then Speak', mode: 'speak', audioText: 'A local council is considering turning one busy street into a pedestrian zone on weekends. Shop owners support the idea, while some residents are concerned about parking.', prompt: 'What is one benefit and one concern mentioned?', speechInstruction: 'Ответь по услышанному, затем добавь собственное мнение.', minWords: 18, speechKeywords: ['shops', 'parking', 'street', 'benefit', 'concern', 'weekends'], explanation: 'Назови пользу для магазинов и озвученное опасение жителей о парковке.' }] },
];

questions.push(...detTaskTypes.flatMap((task) => task.questions.map((question) => ({ ...question, detType: task.id, skill: task.skill }))));

const words = [
  { word: 'arrive', pos: 'verb', level: 'A1', meaning: 'прибывать, приезжать', example: 'What time will you <strong>arrive</strong>?' },
  { word: 'borrow', pos: 'verb', level: 'A1', meaning: 'брать на время', example: 'Can I <strong>borrow</strong> your pen?' },
  { word: 'busy', pos: 'adjective', level: 'A1', meaning: 'занятый', example: 'Sorry, I’m <strong>busy</strong> right now.' },
  { word: 'enough', pos: 'determiner / adverb', level: 'A1', meaning: 'достаточно', example: 'Do we have <strong>enough</strong> time?' },
  { word: 'friendly', pos: 'adjective', level: 'A1', meaning: 'дружелюбный', example: 'Everyone here is very <strong>friendly</strong>.' },
  { word: 'leave', pos: 'verb', level: 'A1', meaning: 'уходить; оставлять', example: 'We <strong>leave</strong> home at eight.' },
  { word: 'quiet', pos: 'adjective', level: 'A1', meaning: 'тихий, спокойный', example: 'Let’s find a <strong>quiet</strong> place to talk.' },
  { word: 'usually', pos: 'adverb', level: 'A1', meaning: 'обычно', example: 'I <strong>usually</strong> walk to work.' },

  { word: 'advice', pos: 'noun', level: 'A2', meaning: 'совет', example: 'Could you give me some <strong>advice</strong>?' },
  { word: 'although', pos: 'conjunction', level: 'A2', meaning: 'хотя, несмотря на то что', example: '<strong>Although</strong> it was late, we kept talking.' },
  { word: 'avoid', pos: 'verb', level: 'A2', meaning: 'избегать', example: 'Try to <strong>avoid</strong> checking your phone.' },
  { word: 'lend', pos: 'verb', level: 'A2', meaning: 'давать на время', example: 'Could you <strong>lend</strong> me a charger?' },
  { word: 'perhaps', pos: 'adverb', level: 'A2', meaning: 'возможно, может быть', example: '<strong>Perhaps</strong> we should leave earlier.' },
  { word: 'receipt', pos: 'noun', level: 'A2', meaning: 'чек, квитанция', example: 'Keep the <strong>receipt</strong> in case you return it.' },
  { word: 'return', pos: 'verb', level: 'A2', meaning: 'возвращать; возвращаться', example: 'Please <strong>return</strong> the key before Friday.' },
  { word: 'traffic', pos: 'noun', level: 'A2', meaning: 'дорожное движение, пробки', example: 'There was heavy <strong>traffic</strong> this morning.' },

  { word: 'afford', pos: 'verb', level: 'B1', meaning: 'позволить себе (финансово)', example: 'We can’t <strong>afford</strong> a bigger office yet.' },
  { word: 'aware', pos: 'adjective', level: 'B1', meaning: 'осведомлённый, знающий', example: 'Are you <strong>aware</strong> of the changes?' },
  { word: 'consider', pos: 'verb', level: 'B1', meaning: 'обдумывать; рассматривать', example: 'We’re <strong>considering</strong> a different approach.' },
  { word: 'decrease', pos: 'verb / noun', level: 'B1', meaning: 'уменьшать(ся); снижение', example: 'The number of errors began to <strong>decrease</strong>.' },
  { word: 'eventually', pos: 'adverb', level: 'B1', meaning: 'в конце концов', example: 'They <strong>eventually</strong> reached an agreement.' },
  { word: 'likely', pos: 'adjective / adverb', level: 'B1', meaning: 'вероятный; вероятно', example: 'Rain is <strong>likely</strong> later today.' },
  { word: 'remind', pos: 'verb', level: 'B1', meaning: 'напоминать', example: 'Please <strong>remind</strong> me to call Sam.' },
  { word: 'solution', pos: 'noun', level: 'B1', meaning: 'решение, способ устранить проблему', example: 'We need a practical <strong>solution</strong>.' },

  { word: 'ambiguous', pos: 'adjective', level: 'B2', meaning: 'неоднозначный, двусмысленный', example: 'The wording is <strong>ambiguous</strong>.' },
  { word: 'compelling', pos: 'adjective', level: 'B2', meaning: 'убедительный; захватывающий', example: 'She made a <strong>compelling</strong> case for change.' },
  { word: 'convey', pos: 'verb', level: 'B2', meaning: 'передавать (мысль, чувство)', example: 'It is difficult to <strong>convey</strong> the tone in writing.' },
  { word: 'drawback', pos: 'noun', level: 'B2', meaning: 'недостаток, минус', example: 'The main <strong>drawback</strong> is the cost.' },
  { word: 'eventual', pos: 'adjective', level: 'B2', meaning: 'конечный, произошедший в итоге', example: 'Their <strong>eventual</strong> success took years.' },
  { word: 'inevitable', pos: 'adjective', level: 'B2', meaning: 'неизбежный', example: 'Some delays were <strong>inevitable</strong>.' },
  { word: 'maintain', pos: 'verb', level: 'B2', meaning: 'поддерживать; утверждать', example: 'The team must <strong>maintain</strong> a steady pace.' },
  { word: 'whereas', pos: 'conjunction', level: 'B2', meaning: 'тогда как, в то время как', example: 'The first plan is cheap, <strong>whereas</strong> the second is faster.' },

  { word: 'alleviate', pos: 'verb', level: 'C1', meaning: 'облегчать, смягчать', example: 'The changes may <strong>alleviate</strong> pressure on staff.' },
  { word: 'coherent', pos: 'adjective', level: 'C1', meaning: 'связный, последовательный', example: 'The report presents a <strong>coherent</strong> argument.' },
  { word: 'deteriorate', pos: 'verb', level: 'C1', meaning: 'ухудшаться', example: 'Conditions continued to <strong>deteriorate</strong>.' },
  { word: 'inherent', pos: 'adjective', level: 'C1', meaning: 'присущий, неотъемлемый', example: 'There are risks <strong>inherent</strong> in the process.' },
  { word: 'mitigate', pos: 'verb', level: 'C1', meaning: 'уменьшать вред или последствия', example: 'The policy is designed to <strong>mitigate</strong> the impact.' },
  { word: 'notwithstanding', pos: 'preposition / adverb', level: 'C1', meaning: 'несмотря на; тем не менее', example: '<strong>Notwithstanding</strong> these concerns, the project went ahead.' },
  { word: 'succinct', pos: 'adjective', level: 'C1', meaning: 'краткий и ёмкий', example: 'Please keep your summary <strong>succinct</strong>.' },
  { word: 'underlying', pos: 'adjective', level: 'C1', meaning: 'лежащий в основе, скрытый', example: 'We need to address the <strong>underlying</strong> cause.' },

  { word: 'equivocal', pos: 'adjective', level: 'C2', meaning: 'неоднозначный; уклончивый', example: 'Her response remained <strong>equivocal</strong>.' },
  { word: 'fastidious', pos: 'adjective', level: 'C2', meaning: 'чрезвычайно требовательный к деталям', example: 'He is <strong>fastidious</strong> about the final edits.' },
  { word: 'incongruous', pos: 'adjective', level: 'C2', meaning: 'неуместный, несочетающийся', example: 'The modern sign looked <strong>incongruous</strong> beside the old stonework.' },
  { word: 'perfunctory', pos: 'adjective', level: 'C2', meaning: 'формальный и поверхностный', example: 'The inspector gave the room a <strong>perfunctory</strong> glance.' },
  { word: 'pragmatic', pos: 'adjective', level: 'C2', meaning: 'прагматичный, ориентированный на практику', example: 'They took a <strong>pragmatic</strong> view of the problem.' },
  { word: 'scrupulous', pos: 'adjective', level: 'C2', meaning: 'скрупулёзный; добросовестный', example: 'The editor was <strong>scrupulous</strong> about checking every source.' },
  { word: 'tenuous', pos: 'adjective', level: 'C2', meaning: 'неубедительный; слабый (о связи)', example: 'The evidence for that claim is <strong>tenuous</strong>.' },
  { word: 'ubiquitous', pos: 'adjective', level: 'C2', meaning: 'повсеместный, встречающийся везде', example: 'Smartphones have become <strong>ubiquitous</strong>.' },
];

words.push(
  { word: 'allow', pos: 'verb', level: 'A2', meaning: 'разрешать; позволять', usage: 'Ставь allow перед человеком и действием: allow someone to do something.', forms: { past: 'allowed', present: 'allow / allows', future: 'will allow' }, tenses: { past: 'The teacher allowed us to use a dictionary yesterday.', present: 'This app allows you to review new words.', future: 'The new rule will allow visitors to bring a small bag.' }, example: 'My parents <strong>allow</strong> me to stay out until ten.' },
  { word: 'build', pos: 'verb', level: 'A1', meaning: 'строить; создавать', usage: 'Используй build для зданий и для постепенного создания навыка, доверия или привычки.', forms: { past: 'built', present: 'build / builds', future: 'will build' }, tenses: { past: 'They built this bridge in 1998.', present: 'She builds confidence by practising every day.', future: 'We will build a new classroom next year.' }, example: 'They <strong>built</strong> a small house near the lake.' },
  { word: 'compare', pos: 'verb', level: 'B1', meaning: 'сравнивать', usage: 'Часто употребляется как compare A with B или compare A to B.', forms: { past: 'compared', present: 'compare / compares', future: 'will compare' }, tenses: { past: 'We compared the two plans before choosing one.', present: 'The article compares life in two cities.', future: 'I will compare the prices this evening.' }, example: 'Let’s <strong>compare</strong> the two options.' },
  { word: 'depend', pos: 'verb', level: 'B1', meaning: 'зависеть', usage: 'Обычно используется с предлогом on: depend on the weather, depend on someone.', forms: { past: 'depended', present: 'depend / depends', future: 'will depend' }, tenses: { past: 'Our plans depended on the weather.', present: 'The final cost depends on the distance.', future: 'The result will depend on how carefully we prepare.' }, example: 'The trip may <strong>depend</strong> on the weather.' },
  { word: 'expect', pos: 'verb', level: 'A2', meaning: 'ожидать; рассчитывать', usage: 'Сочетай expect с существительным или конструкцией expect someone to do something.', forms: { past: 'expected', present: 'expect / expects', future: 'will expect' }, tenses: { past: 'We expected the train to be late.', present: 'I expect a reply by Friday.', future: 'They will expect us to arrive on time.' }, example: 'I <strong>expect</strong> the shop is still open.' },
  { word: 'focus', pos: 'verb / noun', level: 'A2', meaning: 'сосредоточиваться; фокус', usage: 'Как глагол часто требует on: focus on one task at a time.', forms: { past: 'focused', present: 'focus / focuses', future: 'will focus' }, tenses: { past: 'She focused on the final question first.', present: 'He focuses better in a quiet room.', future: 'Tomorrow we will focus on listening practice.' }, example: 'Let’s <strong>focus</strong> on the main idea.' },
  { word: 'grow', pos: 'verb', level: 'A2', meaning: 'расти; выращивать', usage: 'Подходит для роста людей, растений, бизнеса и абстрактных качеств.', forms: { past: 'grew', present: 'grow / grows', future: 'will grow' }, tenses: { past: 'The children grew up near the coast.', present: 'This plant grows well in bright light.', future: 'The team will grow as the project expands.' }, example: 'The city continues to <strong>grow</strong>.' },
  { word: 'hope', pos: 'verb / noun', level: 'A2', meaning: 'надеяться; надежда', usage: 'Можно сказать hope to do something или hope that something happens.', forms: { past: 'hoped', present: 'hope / hopes', future: 'will hope' }, tenses: { past: 'I hoped to see you at the concert.', present: 'We hope the weather stays warm.', future: 'She will hope for good news tomorrow.' }, example: 'I <strong>hope</strong> you have a lovely weekend.' },
  { word: 'improve', pos: 'verb', level: 'A2', meaning: 'улучшать(ся)', usage: 'Используй improve для навыка, результата или ситуации: improve your English.', forms: { past: 'improved', present: 'improve / improves', future: 'will improve' }, tenses: { past: 'His pronunciation improved after the course.', present: 'Regular reading improves vocabulary.', future: 'These changes will improve the service.' }, example: 'Practice can <strong>improve</strong> your pronunciation.' },
  { word: 'join', pos: 'verb', level: 'A2', meaning: 'присоединяться; вступать', usage: 'Join someone/activity означает присоединиться; join a club — вступить в клуб.', forms: { past: 'joined', present: 'join / joins', future: 'will join' }, tenses: { past: 'Mia joined our study group last week.', present: 'I join the call from my laptop.', future: 'He will join us for dinner tomorrow.' }, example: 'Would you like to <strong>join</strong> us for lunch?' },
  { word: 'keep', pos: 'verb', level: 'A1', meaning: 'хранить; продолжать; держать', usage: 'Keep имеет несколько значений: хранить, оставлять или продолжать действие (keep doing).', forms: { past: 'kept', present: 'keep / keeps', future: 'will keep' }, tenses: { past: 'She kept the ticket as a souvenir.', present: 'I keep my notes in this folder.', future: 'We will keep practising until it feels natural.' }, example: '<strong>Keep</strong> your receipt in case you need it.' },
  { word: 'learn', pos: 'verb', level: 'A1', meaning: 'учиться; узнавать', usage: 'Learn a language/skill; learn about something — узнавать о чём-то.', forms: { past: 'learned / learnt', present: 'learn / learns', future: 'will learn' }, tenses: { past: 'I learned three useful phrases yesterday.', present: 'She learns new words in context.', future: 'They will learn how to use the software.' }, example: 'We <strong>learn</strong> something new every day.' },
  { word: 'make', pos: 'verb', level: 'A1', meaning: 'делать; создавать', usage: 'Встречается в устойчивых сочетаниях: make a decision, make a mistake, make friends.', forms: { past: 'made', present: 'make / makes', future: 'will make' }, tenses: { past: 'I made a list before shopping.', present: 'She makes excellent coffee.', future: 'We will make a decision tomorrow.' }, example: 'Let’s <strong>make</strong> a plan for the weekend.' },
  { word: 'notice', pos: 'verb / noun', level: 'A2', meaning: 'замечать; уведомление', usage: 'Как глагол notice означает увидеть или осознать что-то; notice a change.', forms: { past: 'noticed', present: 'notice / notices', future: 'will notice' }, tenses: { past: 'I noticed a spelling mistake in the email.', present: 'He notices small details quickly.', future: 'You will notice the difference after a week.' }, example: 'Did you <strong>notice</strong> anything unusual?' },
  { word: 'offer', pos: 'verb / noun', level: 'A2', meaning: 'предлагать; предложение', usage: 'Offer someone something или offer to do something — предложить кому-то что-то или помощь.', forms: { past: 'offered', present: 'offer / offers', future: 'will offer' }, tenses: { past: 'They offered us a seat near the window.', present: 'This course offers extra speaking practice.', future: 'I will offer to help after the meeting.' }, example: 'Can I <strong>offer</strong> you some tea?' },
  { word: 'prepare', pos: 'verb', level: 'A2', meaning: 'готовить; подготавливать', usage: 'Prepare for an exam/meeting или prepare something — готовиться к чему-то или готовить что-то.', forms: { past: 'prepared', present: 'prepare / prepares', future: 'will prepare' }, tenses: { past: 'We prepared for the interview together.', present: 'He prepares lunch the night before.', future: 'She will prepare a short presentation.' }, example: 'I need to <strong>prepare</strong> for my test.' },
  { word: 'question', pos: 'noun / verb', level: 'A1', meaning: 'вопрос; подвергать сомнению', usage: 'Как существительное question — вопрос; как глагол — сомневаться или оспаривать.', forms: { past: 'questioned', present: 'question / questions', future: 'will question' }, tenses: { past: 'The journalist questioned the official yesterday.', present: 'Students question ideas during the discussion.', future: 'They will question the decision at the meeting.' }, example: 'May I ask you a <strong>question</strong>?' },
  { word: 'remember', pos: 'verb', level: 'A2', meaning: 'помнить; вспоминать', usage: 'Remember to do something — не забыть сделать; remember doing — помнить, как делал.', forms: { past: 'remembered', present: 'remember / remembers', future: 'will remember' }, tenses: { past: 'I remembered her name after a moment.', present: 'He remembers every face.', future: 'You will remember this day for a long time.' }, example: 'Please <strong>remember</strong> to lock the door.' },
  { word: 'share', pos: 'verb / noun', level: 'A2', meaning: 'делиться; доля', usage: 'Share something with someone — поделиться чем-то с кем-то.', forms: { past: 'shared', present: 'share / shares', future: 'will share' }, tenses: { past: 'She shared her notes with the class.', present: 'We share the office with another team.', future: 'I will share the photos this evening.' }, example: 'Would you <strong>share</strong> your ideas with us?' },
  { word: 'travel', pos: 'verb / noun', level: 'A1', meaning: 'путешествовать; путешествие', usage: 'Travel часто означает путешествовать в целом; a trip — отдельная поездка.', forms: { past: 'travelled / traveled', present: 'travel / travels', future: 'will travel' }, tenses: { past: 'They travelled through Spain last summer.', present: 'I travel to work by train.', future: 'We will travel to Canada next year.' }, example: 'I love to <strong>travel</strong> by train.' },
  { word: 'understand', pos: 'verb', level: 'A2', meaning: 'понимать', usage: 'Understand используется для смысла, речи, правил и чувств другого человека.', forms: { past: 'understood', present: 'understand / understands', future: 'will understand' }, tenses: { past: 'I understood the instructions after the example.', present: 'She understands spoken English well.', future: 'You will understand the pattern with practice.' }, example: 'I <strong>understand</strong> what you mean.' },
  { word: 'visit', pos: 'verb / noun', level: 'A1', meaning: 'посещать; визит', usage: 'Visit a place/person — посетить место или навестить человека.', forms: { past: 'visited', present: 'visit / visits', future: 'will visit' }, tenses: { past: 'We visited the museum on Monday.', present: 'My cousins visit us every month.', future: 'I will visit the new library tomorrow.' }, example: 'We <strong>visited</strong> our friends at the weekend.' },
  { word: 'wonder', pos: 'verb / noun', level: 'B1', meaning: 'интересоваться; удивляться', usage: 'I wonder if/whether — мягко задать вопрос или выразить любопытство.', forms: { past: 'wondered', present: 'wonder / wonders', future: 'will wonder' }, tenses: { past: 'I wondered why the shop was closed.', present: 'She wonders whether the bus has arrived.', future: 'They will wonder how we solved it.' }, example: 'I <strong>wonder</strong> if this seat is free.' },
  { word: 'x-ray', pos: 'noun / verb', level: 'B1', meaning: 'рентген; делать рентген', usage: 'An X-ray — рентгеновский снимок или исследование; get an X-ray — сделать снимок.', tenses: { past: 'The doctor examined my x-ray yesterday.', present: 'The x-ray shows a small fracture.', future: 'I will get an x-ray this afternoon.' }, example: 'The doctor looked at the <strong>x-ray</strong>.' },
  { word: 'yet', pos: 'adverb', level: 'A2', meaning: 'ещё; уже (в вопросах)', usage: 'Yet обычно стоит в конце вопроса или отрицания: Have you finished yet? Not yet.', tenses: { past: 'She had not replied yet when we left.', present: 'I have not finished the report yet.', future: 'They will not be ready yet, so let’s wait.' }, example: 'Have you finished your homework <strong>yet</strong>?' },
  { word: 'zero', pos: 'noun / adjective', level: 'A1', meaning: 'ноль; нулевой', usage: 'Zero — число 0 или отсутствие чего-либо: zero problems, zero degrees.', tenses: { past: 'The temperature fell to zero last night.', present: 'The score is zero to one.', future: 'By midnight, the chance of rain will be close to zero.' }, example: 'The temperature is below <strong>zero</strong> today.' },
);

words.push(...(window.WORDWISE_EXTRA_WORDS || []));

const examRows = [
  ['A1', '1.0–2.5', '0–31*', '10–55', '1–3**'],
  ['A2', '3.0–3.5', '32–41*', '60–85', '4**'],
  ['B1', '4.0–5.0', '42–71*', '90–115', '5–6**'],
  ['B2', '5.5–6.5', '72–94*', '120–135', '7–8**'],
  ['C1', '7.0–8.0', '95–113*', '140–155', '9–10**'],
  ['C2', '8.5–9.0', '114–120*', '160', '11–12**'],
];

const lessons = [
  {
    id: 'speaking', skill: 'Говорение', title: 'Начать разговор', duration: '5 минут', icon: '↗', color: 'speaking',
    description: 'Сформулируй ответ вслух и потренируй уточняющие вопросы.', type: 'speak',
    items: [
      { prompt: 'Представься новому коллеге.', instruction: 'Скажи 2–3 предложения: чем занимаешься и что тебе интересно.', placeholder: 'Напиши план ответа или фразы, которые хочешь потренировать…' },
      { prompt: 'Расскажи о своём обычном дне.', instruction: 'Используй связки first, then, usually или after that.', placeholder: 'Набросай несколько английских предложений…' },
    ],
  },
  {
    id: 'listening', skill: 'Аудирование', title: 'Уловить главное', duration: '6 минут', icon: ')))', color: 'listening',
    description: 'Прослушай фразу, улови деталь и проверь понимание.', type: 'choice',
    items: [
      { prompt: 'Why is Alex calling the hotel?', sentence: 'Hello, I have a reservation for Friday, but I need to change it to Saturday.', options: ['To cancel the whole trip', 'To change the booking date', 'To ask for directions', 'To book a second room'], correct: 1, explanation: 'Он просит перенести бронирование с пятницы на субботу.' },
      { prompt: 'What does the speaker want the listener to do?', sentence: 'The meeting has moved to room twelve. Could you let the rest of the team know?', options: ['Find a new meeting time', 'Tell the team about the room change', 'Book room twelve for tomorrow', 'Call the speaker after the meeting'], correct: 1, explanation: 'Нужно сообщить команде, что встреча теперь будет в комнате 12.' },
      { prompt: 'When should the package arrive?', sentence: 'Your package left the warehouse this morning and should arrive by Thursday afternoon.', options: ['This morning', 'Wednesday morning', 'By Thursday afternoon', 'Friday evening'], correct: 2, explanation: 'Фраза by Thursday afternoon означает, что посылка должна прибыть не позднее четверга после обеда.' },
    ],
  },
  {
    id: 'grammar', skill: 'Грамматика', title: 'Времена в контексте', duration: '7 минут', icon: '≋', color: 'grammar',
    description: 'Выбери форму, которая точно передаёт время действия.', type: 'choice',
    items: [
      { prompt: 'I ___ this book twice, so I know how it ends.', options: ['read', 'have read', 'am reading', 'will read'], correct: 1, explanation: 'Опыт к настоящему моменту: Present Perfect — have read.' },
      { prompt: 'When I called, they ___ dinner.', options: ['have', 'had', 'were having', 'are having'], correct: 2, explanation: 'Действие было в процессе в момент звонка: Past Continuous — were having.' },
      { prompt: 'By next June, she ___ here for ten years.', options: ['works', 'will work', 'will have worked', 'has worked'], correct: 2, explanation: 'Длительность к будущей точке: Future Perfect — will have worked.' },
    ],
  },
  {
    id: 'vocabulary', skill: 'Лексика', title: 'Точное слово', duration: '5 минут', icon: 'Aa', color: 'vocabulary',
    description: 'Заметь близкие значения и выбери естественное сочетание.', type: 'choice',
    items: [
      { prompt: 'We need to ___ a decision before Friday.', options: ['do', 'make', 'take', 'put'], correct: 1, explanation: 'Устойчивое сочетание: make a decision — принять решение.' },
      { prompt: 'The instructions were so ___ that everyone understood them.', options: ['vague', 'clear', 'rare', 'narrow'], correct: 1, explanation: 'Clear означает «понятный, ясный» и подходит по смыслу.' },
      { prompt: 'Which word is closest in meaning to “reliable”?', options: ['Can be trusted', 'Very expensive', 'Hard to notice', 'Recently invented'], correct: 0, explanation: 'Reliable — надёжный, тот, кому или чему можно доверять.' },
    ],
  },
  {
    id: 'writing', skill: 'Письмо', title: 'Связный ответ', duration: '7 минут', icon: '✎', color: 'writing',
    description: 'Сформулируй мысль, подкрепи её причиной и конкретным примером.', type: 'write',
    items: [
      { prompt: 'Should students have a longer lunch break?', instruction: 'Напиши 3–5 предложений: позиция, причина и пример.', placeholder: 'Write your answer in English…', minWords: 20, requiredWords: ['because', 'for example'], explanation: 'Свяжи мнение с причиной и одним конкретным примером.' },
      { prompt: 'Describe one small change that could improve your neighborhood.', instruction: 'Предложи изменение и объясни, кому оно поможет.', placeholder: 'Write your answer in English…', minWords: 20, requiredWords: ['could', 'because'], explanation: 'Объясни практическую пользу предложения.' },
    ],
  },
];

const settingsMount = document.querySelector('#settings-page-content');
const accountSettingsSection = document.querySelector('#account-settings');
if (settingsMount && accountSettingsSection) settingsMount.append(accountSettingsSection);
const views = [...document.querySelectorAll('.view')];
const navButtons = [...document.querySelectorAll('[data-view-target]')];
const startButtons = [...document.querySelectorAll('[data-start-test]')];
const profileStorageKey = 'wordwise.profile.v1';
const themeStorageKey = 'wordwise.theme';
const supabaseConfig = window.WORDWISE_SUPABASE_CONFIG || {};
const supabaseClient = window.supabase?.createClient && supabaseConfig.url && supabaseConfig.anonKey
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } })
  : null;
const dataLayer = window.WordwiseData;
dataLayer?.configure(supabaseClient);
let localAccountUser = dataLayer?.getLocalSession() || null;
const state = { view: 'home', answers: [], questionOrder: [], usedQuestions: new Set(), pendingTaskIds: [], targetLevelIndex: 0, correctStreak: 0, reviewMode: false, reviewRevealed: false, reviewQuestions: [], testMode: 'mock', maxQuestions: 42, taskType: null, timerQuestionIndex: null, questionCleanupIndex: null, audioPlayed: new Set(), errorReviewIds: [], remaining: 3600, timerId: null, activeLesson: null, lessonIndex: 0, lessonAnswers: [], lessonFeedback: null, lessonMinutes: 20, lessonSeconds: 1200, lessonTimerId: null, selectedLetter: 'all', selectedPos: 'all', dictionaryPage: 1, dictionaryPageSize: 40, dictionaryView: 'list', activeWordPractice: null, errorFilter: 'all', lastMistakeIndexes: [], lastMistakeQuestions: [], pendingAuthUser: null, pendingMfaFactorId: null, pendingMfaChallengeId: null, accountMfaFactorId: null };
const $ = (selector) => document.querySelector(selector);
let accountUser = null;
const lexiCoreCSVUrl = 'https://raw.githubusercontent.com/X-Trivle/LexiCore/v1.0.0/data/LexiCore_5000.csv';
let lexiCoreLoadPromise = null;
let activeVoiceRecorder = null;
let activeVoiceStream = null;
let activeVoiceChunks = [];
let activeVoiceMetadata = null;

function loadProfile() {
  try {
    const stored = dataLayer?.loadLocalProfile(localAccountUser) || JSON.parse(localStorage.getItem(profileStorageKey) || '{}');
    return { name: typeof stored.name === 'string' ? stored.name : '', tests: Array.isArray(stored.tests) ? stored.tests : [], lessons: Array.isArray(stored.lessons) ? stored.lessons : [], goal: stored.goal || null, errors: Array.isArray(stored.errors) ? stored.errors : [], activities: Array.isArray(stored.activities) ? stored.activities : [], examChecklist: stored.examChecklist || {}, streakFreezeDate: stored.streakFreezeDate || null, streakFreezeUsed: Boolean(stored.streakFreezeUsed), reminderEnabled: Boolean(stored.reminderEnabled), reminderTime: typeof stored.reminderTime === 'string' ? stored.reminderTime : '18:00', lastReminderDate: stored.lastReminderDate || null, aiReviewEnabled: Boolean(stored.aiReviewEnabled), wordNotes: stored.wordNotes && typeof stored.wordNotes === 'object' ? stored.wordNotes : {}, university: stored.university || null };
  } catch {
    return { name: '', tests: [], lessons: [], goal: null, errors: [], activities: [], examChecklist: {}, streakFreezeDate: null, university: null, voiceRecordings: [] };
  }
}

let profile = loadProfile();
const wordTranslationStorageKey = 'wordwise.translations.en-ru.v1';
const wordTranslationRequests = new Map();

function loadWordTranslationCache() {
  try {
    const value = JSON.parse(localStorage.getItem(wordTranslationStorageKey) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

const wordTranslationCache = loadWordTranslationCache();

function saveWordTranslationCache() {
  try {
    localStorage.setItem(wordTranslationStorageKey, JSON.stringify(wordTranslationCache));
  } catch {
    showToast('Не удалось сохранить часть переводов в этом браузере.');
  }
}

async function translateDictionaryWord(word) {
  if (word.meaning || profile.wordNotes?.[word.word] || wordTranslationCache[word.word]) return word.meaning || profile.wordNotes?.[word.word] || wordTranslationCache[word.word];
  if (!word.source) return '';
  if (wordTranslationRequests.has(word.word)) return wordTranslationRequests.get(word.word);
  const request = (async () => {
    const query = new URLSearchParams({ q: word.word, langpair: 'en|ru' });
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?${query.toString()}`, { headers: { Accept: 'application/json' }, signal: controller.signal });
      if (!response.ok) throw new Error(`Translation request failed: ${response.status}`);
      const result = await response.json();
      const translation = typeof result.responseData?.translatedText === 'string' ? result.responseData.translatedText.trim() : '';
      if (result.responseStatus !== 200 || !translation || translation.toLowerCase() === word.word.toLowerCase()) throw new Error('No Russian translation returned');
      wordTranslationCache[word.word] = translation;
      saveWordTranslationCache();
      return translation;
    } finally {
      clearTimeout(timeoutId);
    }
  })().finally(() => wordTranslationRequests.delete(word.word));
  wordTranslationRequests.set(word.word, request);
  return request;
}

function normalizeProfile(value) {
  return {
    name: typeof value?.name === 'string' ? value.name.slice(0, 32) : '',
    tests: Array.isArray(value?.tests) ? value.tests.slice(0, 30) : [],
    lessons: Array.isArray(value?.lessons) ? value.lessons.slice(0, 100) : [],
    goal: value?.goal && typeof value.goal === 'object' ? value.goal : null,
    errors: Array.isArray(value?.errors) ? value.errors.slice(0, 500) : [],
    activities: Array.isArray(value?.activities) ? value.activities.slice(0, 120) : [],
    examChecklist: value?.examChecklist && typeof value.examChecklist === 'object' ? value.examChecklist : {},
    streakFreezeDate: typeof value?.streakFreezeDate === 'string' ? value.streakFreezeDate : null,
    streakFreezeUsed: Boolean(value?.streakFreezeUsed),
    reminderEnabled: Boolean(value?.reminderEnabled),
    reminderTime: typeof value?.reminderTime === 'string' ? value.reminderTime : '18:00',
    lastReminderDate: typeof value?.lastReminderDate === 'string' ? value.lastReminderDate : null,
    aiReviewEnabled: Boolean(value?.aiReviewEnabled),
    wordNotes: value?.wordNotes && typeof value.wordNotes === 'object' ? value.wordNotes : {},
    university: value?.university && typeof value.university === 'object' ? value.university : null,
    voiceRecordings: Array.isArray(value.voiceRecordings) ? value.voiceRecordings.slice(0, 200) : [],
  };
}

async function saveProfile() {
  try {
    dataLayer?.ensureProfileIds(profile);
    if (dataLayer) dataLayer.saveLocalProfile(profile, accountUser || localAccountUser);
    else localStorage.setItem(profileStorageKey, JSON.stringify(profile));
  } catch {
    showToast('Не удалось сохранить данные в этом браузере. Проверь настройки хранилища.');
    return false;
  }
  if (supabaseClient && accountUser && dataLayer) {
    const { error } = await dataLayer.saveProfile(profile, accountUser);
    if (error) {
      showToast('Не удалось синхронизировать прогресс. Локальная копия сохранена.');
      return false;
    }
  }
  return true;
}

async function hydrateAccount(user) {
  const previousLocalAccount = localAccountUser;
  accountUser = user;
  localAccountUser = null;
  $('#login-mfa-form').hidden = true;
  $('#password-recovery-form').hidden = true;
  $('#auth-login-form').hidden = false;
  state.pendingAuthUser = null;
  state.pendingMfaFactorId = null;
  state.pendingMfaChallengeId = null;
  try {
    const cachedAccountProfile = dataLayer.loadLocalProfile(user);
    const fallbackProfile = Object.keys(cachedAccountProfile).length ? cachedAccountProfile : profile;
    const storedProfile = await dataLayer.loadProfile(user, fallbackProfile);
    const isGuestMigration = Boolean(storedProfile.__guestMigration);
    delete storedProfile.__guestMigration;
    profile = normalizeProfile(storedProfile);
    profile.voiceRecordings = await dataLayer.migrateLocalVoiceRecordings(profile.voiceRecordings, user.id);
    const saved = await saveProfile();
    const voicesMigrated = profile.voiceRecordings.every((recording) => !recording.storagePath?.startsWith('local:'));
    if (saved && isGuestMigration && voicesMigrated) await dataLayer.clearMigratedLocalAccount(previousLocalAccount);
  } catch (error) {
    showToast(`Не удалось загрузить облачный профиль: ${error.message || 'проверь таблицы и RLS в Supabase.'}`);
  }
  renderAccount();
  renderTodayDashboard();
}

async function restoreAccountSession() {
  const configured = Boolean(supabaseClient);
  $('#auth-config-note').hidden = configured;
  $('#register-message').textContent = configured
    ? 'Твои попытки и уроки будут синхронизироваться с аккаунтом.'
    : 'Синхронизация появится после подключения Supabase. Гостевой профиль останется на этом устройстве.';
  $('#login-message').textContent = configured
    ? 'Войдите, чтобы синхронизировать прогресс.'
    : 'Вход станет доступен после подключения Supabase.';
  if (!configured) {
    localAccountUser = dataLayer?.getLocalSession() || null;
    if (localAccountUser) profile = normalizeProfile(dataLayer.loadLocalProfile(localAccountUser));
    renderAccount();
    renderTodayDashboard();
    return;
  }
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (data.session?.user) await establishAuthenticatedSession(data.session.user);
    else if (localAccountUser) {
      profile = normalizeProfile(dataLayer.loadLocalProfile(localAccountUser));
      renderAccount();
      renderTodayDashboard();
    }
  } catch {
    showToast('Не удалось восстановить сессию. Попробуй войти ещё раз.');
  }
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function pickAdaptiveQuestion() {
  const available = questions.map((question, index) => ({ question, index, levelIndex: levels.indexOf(question.level) })).filter(({ index }) => !state.usedQuestions.has(index));
  if (!available.length) return false;
  while (state.testMode === 'mock' && state.pendingTaskIds.length) {
    const taskId = state.pendingTaskIds.shift();
    const requiredTaskQuestions = available.filter(({ question }) => question.detType === taskId);
    if (!requiredTaskQuestions.length) continue;
    const closest = Math.min(...requiredTaskQuestions.map(({ levelIndex }) => Math.abs(levelIndex - state.targetLevelIndex)));
    const candidates = requiredTaskQuestions.filter(({ levelIndex }) => Math.abs(levelIndex - state.targetLevelIndex) === closest);
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    state.questionOrder.push(choice.index);
    state.answers.push(null);
    state.usedQuestions.add(choice.index);
    return true;
  }
  const exactLevel = available.filter(({ levelIndex }) => levelIndex === state.targetLevelIndex);
  const candidates = exactLevel.length ? exactLevel : available.sort((left, right) => {
    const leftDistance = Math.abs(left.levelIndex - state.targetLevelIndex);
    const rightDistance = Math.abs(right.levelIndex - state.targetLevelIndex);
    return leftDistance - rightDistance || right.levelIndex - left.levelIndex;
  }).filter(({ levelIndex }) => Math.abs(levelIndex - state.targetLevelIndex) === Math.abs(available[0].levelIndex - state.targetLevelIndex));
  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  state.questionOrder.push(choice.index);
  state.answers.push(null);
  state.usedQuestions.add(choice.index);
  return true;
}

async function pickNextAdaptiveQuestion(previousWasCorrect) {
  const shouldGenerate = state.testMode === 'mock' && supabaseClient && accountUser && state.questionOrder.length >= 3 && state.questionOrder.length % 3 === 0;
  if (shouldGenerate) {
    const recentPrompts = state.questionOrder.slice(-6).map((index) => questions[index].prompt);
    try {
      const response = await Promise.race([
        supabaseClient.functions.invoke(supabaseConfig.aiFunction || 'adaptive-question', {
          body: { level: levels[state.targetLevelIndex], previousWasCorrect, recentPrompts },
        }),
        new Promise((resolve) => setTimeout(() => resolve({ error: new Error('AI request timed out') }), 5000)),
      ]);
      const candidate = response.data?.question;
      if (!response.error && candidate && typeof candidate.prompt === 'string' && Array.isArray(candidate.options) && candidate.options.length === 4 && Number.isInteger(candidate.correct) && candidate.correct >= 0 && candidate.correct < 4) {
        const question = {
          level: levels[state.targetLevelIndex],
          type: candidate.audioText ? 'АУДИРОВАНИЕ' : 'В КОНТЕКСТЕ',
          prompt: candidate.prompt.slice(0, 400),
          context: typeof candidate.context === 'string' ? candidate.context.slice(0, 900) : '',
          audioText: typeof candidate.audioText === 'string' ? candidate.audioText.slice(0, 500) : '',
          options: candidate.options.map((option) => String(option).slice(0, 240)),
          correct: candidate.correct,
          explanation: typeof candidate.explanation === 'string' ? candidate.explanation.slice(0, 500) : 'Сверь ответ с контекстом и значением ключевых слов.',
          generated: true,
        };
        const questionIndex = questions.push(question) - 1;
        state.questionOrder.push(questionIndex);
        state.answers.push(null);
        state.usedQuestions.add(questionIndex);
        return true;
      }
    } catch {
      showToast('Новый ИИ-вопрос недоступен, продолжаем адаптивную диагностику.');
    }
  }
  return pickAdaptiveQuestion();
}

const addressableViews = new Set(['home', 'practice', 'tests', 'errors', 'dictionary', 'scales', 'account', 'settings']);

function showView(name, updateAddress = true) {
  if (!views.some((view) => view.id === `view-${name}`)) name = 'home';
  if (updateAddress && addressableViews.has(name)) {
    const route = `#/${name === 'home' ? 'today' : name}`;
    if (window.location.hash !== route) window.history.pushState({ view: name }, '', route);
  }
  if (activeVoiceRecorder?.state === 'recording' && name !== 'quiz') stopQuizVoiceRecording();
  if (state.deviceStream && name !== 'scales') {
    stopDeviceCheck();
    $('#device-status').textContent = 'Поток камеры и микрофона закрыт при переходе на другой экран.';
  }
  state.view = name;
  document.body.dataset.view = name;
  views.forEach((view) => {
    const active = view.id === `view-${name}`;
    view.hidden = !active;
    view.classList.toggle('is-visible', active);
  });
  navButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.viewTarget === name));
  if (name === 'home') renderTodayDashboard();
  if (name === 'account') renderAccount();
  if (name === 'practice') { renderPractice(); renderDetTaskGrid(); }
  if (name === 'tests') renderTests();
  if (name === 'settings') renderSettings();
  if (name === 'dictionary') { renderDictionary(); loadLexiCoreDictionary(); }
  if (name === 'errors') renderErrorDiary();
  if (name === 'scales') renderExamReadiness();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function routeFromAddress() {
  const route = window.location.hash.replace(/^#\/?/, '');
  const name = route === 'today' ? 'home' : route;
  showView(addressableViews.has(name) ? name : 'home', false);
}

window.addEventListener('popstate', routeFromAddress);
window.addEventListener('hashchange', routeFromAddress);

async function loadLexiCoreDictionary() {
  if (words.some((item) => item.source === 'LexiCore-5000 v1.0.0')) return;
  if (lexiCoreLoadPromise) return lexiCoreLoadPromise;
  const status = $('#dictionary-source-status');
  if (!window.Papa?.parse) {
    status.textContent = 'Открытый список не загрузился: CSV-парсер недоступен. Локальные слова остаются доступны.';
    return;
  }
  status.textContent = 'Загружаю LexiCore-5000 A1–C1 · CC BY 4.0…';
  lexiCoreLoadPromise = (async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(lexiCoreCSVUrl, { mode: 'cors', cache: 'force-cache', signal: controller.signal });
      if (!response.ok) throw new Error(`LexiCore request failed: ${response.status}`);
      const csv = await response.text();
      const parsed = window.Papa.parse(csv, { header: true, skipEmptyLines: true, dynamicTyping: false });
      if (parsed.errors.length || parsed.data.length < 4500) throw new Error('LexiCore CSV failed validation');
      const existing = new Set(words.map((item) => item.word.toLowerCase()));
      const posNames = { noun: 'noun', adjective: 'adjective', verb: 'verb', adverb: 'adverb', other: 'other' };
      let imported = 0;
      parsed.data.forEach((row) => {
        const word = String(row.word || '').trim().toLowerCase();
        const level = String(row.cefr_level || '').trim();
        if (!word || !levels.slice(0, 5).includes(level) || existing.has(word)) return;
        words.push({
          word,
          pos: posNames[row.pos] || 'other',
          level,
          meaning: '',
          example: '',
          source: 'LexiCore-5000 v1.0.0',
          sourceRank: Number(row.rank_in_level) || null,
          sourceFrequency: Number(row.total_count) || null,
          sourceConfidence: Number(row.confidence) || null,
        });
        existing.add(word);
        imported += 1;
      });
      status.textContent = `Загружено ${imported.toLocaleString('ru-RU')} дополнительных уникальных слов LexiCore. Переводы и примеры не входят в источник.`;
      state.dictionaryPage = 1;
      renderDictionary();
      return imported;
    } finally {
      clearTimeout(timeoutId);
    }
  })().catch((error) => {
    status.textContent = 'LexiCore временно недоступен. Локальный словарь продолжает работать.';
    lexiCoreLoadPromise = null;
    console.warn('LexiCore dictionary could not be loaded:', error);
    return 0;
  });
  return lexiCoreLoadPromise;
}

function startTest(mode = 'mock', taskType = null, customQuestions = null) {
  clearInterval(state.timerId);
  if (state.questionCleanupIndex !== null) questions.splice(state.questionCleanupIndex);
  state.questionCleanupIndex = questions.length;
  state.answers = [];
  state.questionOrder = [];
  state.usedQuestions = new Set();
  state.index = 0;
  state.testMode = mode;
  state.taskType = taskType;
  state.maxQuestions = mode === 'diagnostic' ? 10 : mode === 'practice' ? customQuestions.length : 42;
  state.timerQuestionIndex = null;
  state.audioPlayed = new Set();
  state.pendingTaskIds = mode === 'mock' ? detTaskTypes.map((task) => task.id) : [];
  state.targetLevelIndex = 0;
  state.correctStreak = 0;
  state.reviewMode = false;
  state.reviewRevealed = false;
  state.reviewQuestions = [];
  state.remaining = mode === 'diagnostic' ? 600 : mode === 'practice' ? (customQuestions[0]?.timeLimit || 90) : 3600;
  $('#result-title').innerHTML = 'Результат <em>диагностики</em>';
  $('#result-overview').hidden = false;
  $('#result-chart').style.display = '';
  $('#result-review-bar').hidden = false;
  if (mode === 'practice') {
    state.questionOrder = customQuestions.map((question) => questions.push(question) - 1);
    state.answers = Array(customQuestions.length).fill(null);
  } else {
    pickAdaptiveQuestion();
  }
  updateTimer();
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    updateTimer();
    if (state.remaining <= 0 && mode === 'practice') {
      if (state.index >= state.questionOrder.length - 1) finishTest(true);
      else { state.index += 1; state.timerQuestionIndex = null; renderQuestion(); }
    } else if (state.remaining <= 0) finishTest(true);
  }, 1000);
  renderQuestion();
  showView('quiz');
}

function updateTimer() {
  const minutes = Math.floor(state.remaining / 60).toString().padStart(2, '0');
  const seconds = (state.remaining % 60).toString().padStart(2, '0');
  $('#timer').textContent = state.reviewMode ? '—' : `${minutes}:${seconds}`;
  $('#timer').classList.toggle('is-low', state.remaining <= 300);
}

function renderQuestion() {
  const question = state.reviewMode ? state.reviewQuestions[state.index] : questions[state.questionOrder[state.index]];
  const questionTotal = state.reviewMode ? state.questionOrder.length : state.maxQuestions;
  if (state.testMode === 'practice' && state.timerQuestionIndex !== state.index) {
    state.timerQuestionIndex = state.index;
    state.remaining = question.timeLimit || 90;
    updateTimer();
  }
  $('#question-count').textContent = `${String(state.index + 1).padStart(2, '0')} / ${questionTotal}`;
  $('#question-type').textContent = question.type.replaceAll('_', ' ');
  $('#question-prompt').textContent = question.prompt;
  $('#quiz-heading').innerHTML = state.reviewMode ? 'Попробуй ещё раз.<br><em>Теперь уже без спешки.</em>' : state.testMode === 'practice' ? `Формат задания<br><em>${state.taskType?.title || 'практика'}</em>` : 'Сосредоточься<br><em>на смысле.</em>';
  $('.quiz-tag').textContent = state.reviewMode ? 'ПОВТОР ОШИБОК' : state.testMode === 'diagnostic' ? 'БЫСТРАЯ ДИАГНОСТИКА · 10 МИНУТ' : state.testMode === 'practice' ? `${state.taskType?.title || 'ПРАКТИКА'} · ТАЙМЕР ЗАДАНИЯ` : 'ПОЛНЫЙ ПРОБНЫЙ ТЕСТ · ОКОЛО 60 МИНУТ';
  const context = $('#question-context');
  context.textContent = question.context || '';
  context.hidden = !question.context;
  $('#progress-fill').style.width = `${((state.index + 1) / questionTotal) * 100}%`;
  $('#answered-count').textContent = `${state.answers.filter((answer) => answer !== null).length} ответов`;
  $('#previous-question').disabled = state.index === 0 || state.reviewRevealed;
  $('#previous-question').style.opacity = $('#previous-question').disabled ? '.4' : '1';
  $('#next-question').innerHTML = state.reviewMode && state.reviewRevealed ? (state.index === questionTotal - 1 ? 'Завершить повтор <span aria-hidden="true">✓</span>' : 'Следующая ошибка <span aria-hidden="true">→</span>') : (state.index === questionTotal - 1 ? 'Завершить <span aria-hidden="true">✓</span>' : 'Дальше <span aria-hidden="true">→</span>');
  $('#quiz-audio').hidden = !question.audioText;
  $('#quiz-transcript').textContent = question.audioText || '';
  $('#quiz-transcript').hidden = true;
  $('#quiz-transcript-toggle').textContent = 'Показать текст';
  $('#quiz-speaking').hidden = !['speak', 'write'].includes(question.mode);
  $('#answer-options').hidden = ['speak', 'write'].includes(question.mode);
  $('#quiz-feedback').hidden = true;
  $('#quiz-feedback').textContent = '';
  $('#speaking-instruction').textContent = question.speechInstruction || question.writingInstruction || 'Ответь по-английски.';
  $('#speaking-response').value = state.answers[state.index]?.text || '';
  $('#speech-status').textContent = question.mode === 'write' ? 'Пиши самостоятельно: сохранится твой ответ и обратная связь.' : 'Нажми, разреши доступ к микрофону и ответь по-английски.';
  $('#quiz-mic-button').hidden = question.mode !== 'speak';
  $('#quiz-mic-button').disabled = !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  $('#quiz-mic-button').title = $('#quiz-mic-button').disabled ? 'Голосовой ввод недоступен в этом браузере; используй поле ответа.' : 'Ответить с помощью микрофона';
  $('#quiz-record-audio').hidden = question.mode !== 'speak' || !window.MediaRecorder;
  $('#quiz-record-audio').disabled = false;
  $('#quiz-record-audio').textContent = '● Записать голос';
  const selectedAnswer = state.answers[state.index];
  $('#answer-options').innerHTML = (question.options || []).map((option, index) => {
    const selected = question.mode === 'multi' ? (state.answers[state.index] || []).includes(index) : state.answers[state.index] === index;
    return `
    <button class="answer-option ${selected ? 'is-selected' : ''}" data-answer="${index}" aria-pressed="${selected}">
      <span class="option-key">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span>
    </button>`;
  }).join('');
  if (question.imageUrl) {
    $('#quiz-image').hidden = false;
    $('#quiz-image').src = question.imageUrl;
    $('#quiz-image').alt = question.imageAlt || 'Изображение для задания';
  } else {
    $('#quiz-image').hidden = true;
    $('#quiz-image').removeAttribute('src');
  }
  $('#quiz-play-audio').disabled = state.audioPlayed.has(state.questionOrder[state.index]);
  if (question.audioText) $('#quiz-play-audio').onclick = () => {
    if (state.audioPlayed.has(state.questionOrder[state.index])) return;
    state.audioPlayed.add(state.questionOrder[state.index]);
    speakText(question.audioText);
    $('#quiz-play-audio').disabled = true;
  };
  $('#quiz-transcript-toggle').onclick = () => {
    $('#quiz-transcript').hidden = !$('#quiz-transcript').hidden;
    $('#quiz-transcript-toggle').textContent = $('#quiz-transcript').hidden ? 'Показать текст' : 'Скрыть текст';
  };
  $('#quiz-mic-button').onclick = recordQuizSpeech;
  $('#quiz-record-audio').onclick = toggleQuizVoiceRecording;
  if (state.reviewMode && state.reviewRevealed) showReviewFeedback(question, selectedAnswer);
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => {
    if (question.mode === 'multi') {
      const selected = new Set(state.answers[state.index] || []);
      const answerIndex = Number(button.dataset.answer);
      selected.has(answerIndex) ? selected.delete(answerIndex) : selected.add(answerIndex);
      state.answers[state.index] = [...selected];
    } else {
      state.answers[state.index] = Number(button.dataset.answer);
    }
    renderQuestion();
  }));
}

function isAnswerCorrect(question, answer) {
  if (question.mode === 'speak') return Boolean(answer?.correct);
  if (question.mode === 'write') return scoreWrittenResponse(question, answer?.text || '');
  if (question.mode === 'multi') return Array.isArray(answer) && answer.length === question.correct.length && question.correct.every((option) => answer.includes(option));
  return answer === question.correct;
}

function scoreWrittenResponse(question, text) {
  const normalized = text.trim().toLowerCase().replace(/[.!?]+$/, '').replace(/\s+/g, ' ');
  if (question.wordPractice) {
    const words = normalized.match(/[a-z-]+/g) || [];
    return words.length >= (question.minWords || 4) && normalized.includes(question.requiredWords?.[0]?.toLowerCase() || '');
  }
  if (question.expectedText) return normalized === question.expectedText.toLowerCase().replace(/[.!?]+$/, '').replace(/\s+/g, ' ');
  const words = normalized.match(/[a-z']+/g) || [];
  const keywordHits = (question.requiredWords || []).filter((phrase) => normalized.includes(phrase.toLowerCase())).length;
  return words.length >= (question.minWords || 5) && (question.requiredWords?.length ? keywordHits >= Math.min(2, question.requiredWords.length) : true);
}

function getDETComponents(question) {
  const type = question.type.toLowerCase();
  if (question.detType === 'interactive-reading' || type.includes('reading') || type.includes('read and')) return ['Literacy', 'Comprehension'];
  if (question.mode === 'speak' || type.includes('speak') || type.includes('говор')) return ['Conversation', 'Production'];
  if (question.mode === 'write' || type.includes('writing') || type.includes('write')) return ['Literacy', 'Production'];
  if (question.audioText || type.includes('listen') || type.includes('аудио')) return ['Comprehension', 'Conversation'];
  if (question.skill && ['Literacy', 'Comprehension', 'Conversation', 'Production'].includes(question.skill)) return [question.skill];
  return ['Literacy'];
}

function getScoreRange(accuracy) {
  const center = 10 + Math.max(0, Math.min(100, accuracy)) * 1.5;
  const lower = Math.max(10, Math.floor((center - 8) / 5) * 5);
  const upper = Math.min(160, Math.ceil((center + 8) / 5) * 5);
  return `${lower}–${upper}`;
}

function getKnownTextIssues(text) {
  const patterns = [
    { regex: /\bI am agree\b/gi, label: 'После agree не нужен am.' },
    { regex: /\b(he|she|it) go\b/gi, label: 'В Present Simple добавь окончание -s.' },
    { regex: /\b(they|we|you) is\b/gi, label: 'С этим подлежащим используй are.' },
    { regex: /\b(a) (apple|orange|answer|idea)\b/gi, label: 'Перед гласным звуком здесь нужно an.' },
    { regex: /\b(\w+)\s+\1\b/gi, label: 'Проверь повтор слова.' },
  ];
  return patterns.flatMap((item) => [...text.matchAll(item.regex)].map((match) => ({ text: match[0], index: match.index, label: item.label })));
}

function highlightResponse(text, issues) {
  let cursor = 0;
  let result = '';
  issues.sort((left, right) => left.index - right.index).forEach((issue) => {
    if (issue.index < cursor) return;
    result += escapeHtml(text.slice(cursor, issue.index));
    result += `<mark title="${escapeHtml(issue.label)}">${escapeHtml(issue.text)}</mark>`;
    cursor = issue.index + issue.text.length;
  });
  return result + escapeHtml(text.slice(cursor));
}

function analyzeResponse(question, answer) {
  if (!answer?.text || !['speak', 'write'].includes(question.mode)) return null;
  const text = answer.text.trim();
  const tokens = text.match(/[a-z']+/gi) || [];
  const uniqueRatio = tokens.length ? new Set(tokens.map((word) => word.toLowerCase())).size / tokens.length : 0;
  const sentenceCount = (text.match(/[.!?]+/g) || []).length || (tokens.length ? 1 : 0);
  const connectors = (text.match(/\b(because|however|although|for example|first|finally|also)\b/gi) || []).length;
  const issues = getKnownTextIssues(text);
  const grammar = Math.max(1, Math.min(5, 2 + Number(issues.length === 0) + Number(sentenceCount > 1) + Number(tokens.length >= 12)));
  const vocabulary = Math.max(1, Math.min(5, Math.round(uniqueRatio * 4) + Number(tokens.some((word) => word.length > 7))));
  const coherence = Math.max(1, Math.min(5, 1 + Number(sentenceCount > 1) + Number(connectors > 0) + Number(connectors > 1) + Number(tokens.length >= 20)));
  const requiredWords = question.requiredWords || [];
  const requiredKeywordFound = requiredWords.some((requiredWord) => tokens.some((token) => token.toLowerCase() === requiredWord.toLowerCase()));
  const taskResponse = Math.max(1, Math.min(5, 1 + Number(tokens.length >= (question.minWords || 10)) + Number(requiredKeywordFound) + Number(sentenceCount > 1) + Number(Boolean(question.context || question.imageUrl))));
  const improved = text.replace(/\bI am agree\b/gi, 'I agree').replace(/\b(he|she|it) go\b/gi, '$1 goes').replace(/\b(they|we|you) is\b/gi, '$1 are').replace(/\b(a) (apple|orange|answer|idea)\b/gi, 'an $2').replace(/\b(\w+)\s+\1\b/gi, '$1');
  return { text, issues, grammar, vocabulary, coherence, taskResponse, fluency: question.mode === 'speak' ? Math.max(1, Math.min(5, Math.ceil(tokens.length / 12))) : null, improved: improved === text ? `${text}${/[.!?]$/.test(text) ? '' : '.'}\n\nДля усиления ответа добавь связку «because…» и один конкретный пример.` : improved };
}

function addErrorsToDiary(mistakes) {
  const now = Date.now();
  return mistakes.map(({ question, index }) => {
    const id = `err-${now}-${Math.random().toString(36).slice(2, 8)}`;
    const snapshot = { level: question.level, type: question.type, mode: question.mode, prompt: question.prompt, context: question.context, audioText: question.audioText, imageUrl: question.imageUrl, imageAlt: question.imageAlt, options: question.options, correct: question.correct, expectedText: question.expectedText, requiredWords: question.requiredWords, explanation: question.explanation, speechInstruction: question.speechInstruction, writingInstruction: question.writingInstruction, minWords: question.minWords, speechKeywords: question.speechKeywords, skill: question.skill, detType: question.detType, errorRecordId: id };
    const taskType = detTaskTypes.find((task) => task.id === question.detType)?.title || question.type;
    profile.errors.unshift({ id, taskType, skill: question.skill || getSkill(question.type), question: snapshot, answer: state.answers[index]?.text || '', interval: 0, dueAt: new Date(now + 86400000).toISOString(), createdAt: new Date(now).toISOString() });
    return { id, question: snapshot };
  });
  profile.errors = profile.errors.slice(0, 500);
}

function recordStudyActivity(minutes, kind) {
  const day = localDayKey();
  const todayWork = profile.activities.find((activity) => activity.day === day && activity.weakAreaWork);
  if (todayWork) {
    todayWork.minutes += minutes;
    todayWork.kind = kind;
  } else {
    profile.activities.unshift({ day, minutes, kind, weakAreaWork: true });
  }
  profile.activities = profile.activities.slice(0, 120);
  profile.streakFreezeUsed = false;
}

function recordQuizSpeech() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    showToast('Голосовой ввод не поддерживается. Введи ответ в поле вручную.');
    return;
  }
  const recognition = new Recognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  $('#speech-status').textContent = 'Слушаю…';
  $('#quiz-mic-button').disabled = true;
  recognition.onresult = (event) => {
    $('#speaking-response').value = event.results[0][0].transcript;
    $('#speech-status').textContent = 'Ответ распознан. Можешь отредактировать его перед продолжением.';
    $('#quiz-mic-button').disabled = false;
  };
  recognition.onerror = () => {
    $('#speech-status').textContent = 'Не удалось распознать ответ. Попробуй ещё раз или введи его вручную.';
    $('#quiz-mic-button').disabled = false;
  };
  recognition.onend = () => { $('#quiz-mic-button').disabled = false; };
  recognition.start();
}

async function toggleQuizVoiceRecording() {
  if (activeVoiceRecorder?.state === 'recording') {
    await stopQuizVoiceRecording();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    $('#speech-status').textContent = 'Запись аудио не поддерживается этим браузером.';
    return;
  }
  try {
    activeVoiceStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    activeVoiceChunks = [];
    const question = questions[state.questionOrder[state.index]];
    activeVoiceMetadata = { taskType: question?.detType || question?.type || 'speaking', prompt: question?.prompt || '' };
    activeVoiceRecorder = new MediaRecorder(activeVoiceStream);
    activeVoiceRecorder.addEventListener('dataavailable', (event) => { if (event.data.size) activeVoiceChunks.push(event.data); });
    activeVoiceRecorder.start();
    $('#quiz-record-audio').textContent = '■ Остановить запись';
    $('#speech-status').textContent = 'Идёт запись. Нажми «Остановить запись», чтобы сохранить ответ.';
  } catch (error) {
    activeVoiceStream?.getTracks().forEach((track) => track.stop());
    activeVoiceStream = null;
    $('#speech-status').textContent = error.message || 'Не удалось получить доступ к микрофону.';
  }
}

async function stopQuizVoiceRecording() {
  const recorder = activeVoiceRecorder;
  if (!recorder) return;
  $('#quiz-record-audio').disabled = true;
  $('#quiz-record-audio').textContent = 'Сохраняю…';
  await new Promise((resolve) => {
    recorder.addEventListener('stop', async () => {
      try {
        const blob = new Blob(activeVoiceChunks, { type: recorder.mimeType || 'audio/webm' });
        if (!blob.size) throw new Error('Запись пуста. Попробуй записать ответ ещё раз.');
        const recording = await dataLayer.saveVoiceRecording(blob, accountUser || localAccountUser, activeVoiceMetadata || {});
        profile.voiceRecordings.unshift(recording);
        profile.voiceRecordings = profile.voiceRecordings.slice(0, 200);
        await saveProfile();
        $('#speech-status').textContent = recording.storagePath.startsWith('local:')
          ? 'Запись сохранена на этом устройстве. После входа её можно перенести в приватное хранилище.'
          : 'Запись сохранена в приватном хранилище аккаунта.';
      } catch (error) {
        $('#speech-status').textContent = error.message || 'Не удалось сохранить запись.';
      } finally {
        activeVoiceStream?.getTracks().forEach((track) => track.stop());
        activeVoiceStream = null;
        activeVoiceRecorder = null;
        activeVoiceChunks = [];
        activeVoiceMetadata = null;
        $('#quiz-record-audio').disabled = false;
        $('#quiz-record-audio').textContent = '● Записать голос';
        resolve();
      }
    }, { once: true });
    if (recorder.state !== 'inactive') recorder.stop();
    else resolve();
  });
}

function scoreSpokenResponse(question, text) {
  const words = text.toLowerCase().match(/[a-z']+/g) || [];
  const hits = (question.speechKeywords || []).filter((keyword) => words.includes(keyword));
  return words.length >= (question.minWords || 5) && hits.length > 0;
}

function showReviewFeedback(question, answer) {
  const correct = isAnswerCorrect(question, answer);
  const expected = getExpectedDisplay(question);
  const actual = getAnswerDisplay(question, answer);
  $('#quiz-feedback').innerHTML = `<strong>${correct ? 'Верно.' : 'Повтори этот момент.'}</strong><br>Твой ответ: ${escapeHtml(actual)}<br>Подсказка: ${escapeHtml(expected)}`;
  $('#quiz-feedback').hidden = false;
}

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

async function advanceQuestion() {
  if (activeVoiceRecorder?.state === 'recording') await stopQuizVoiceRecording();
  const question = state.reviewMode ? state.reviewQuestions[state.index] : questions[state.questionOrder[state.index]];
  if (state.reviewMode) {
    if (!state.reviewRevealed) {
      if (['speak', 'write'].includes(question.mode) && !state.answers[state.index]) {
        const text = $('#speaking-response').value.trim();
        if (!text) {
          showToast('Введи ответ, затем проверь его.');
          return;
        }
        state.answers[state.index] = { text, correct: question.mode === 'speak' ? scoreSpokenResponse(question, text) : scoreWrittenResponse(question, text) };
      }
      state.reviewRevealed = true;
      showReviewFeedback(question, state.answers[state.index]);
      $('#previous-question').disabled = true;
      $('#next-question').innerHTML = state.index === state.questionOrder.length - 1 ? 'Завершить повтор <span aria-hidden="true">✓</span>' : 'Следующая ошибка <span aria-hidden="true">→</span>';
      return;
    }
    if (state.index === state.questionOrder.length - 1) {
      await finishReview();
      return;
    }
    state.index += 1;
    state.reviewRevealed = false;
    renderQuestion();
    return;
  }

  if (question.mode === 'speak' || question.mode === 'write') {
    const text = $('#speaking-response').value.trim();
    if (!text) {
      showToast(question.mode === 'speak' ? 'Ответь через микрофон или введи короткий ответ по-английски.' : 'Напиши короткий ответ, чтобы перейти дальше.');
      return;
    }
    state.answers[state.index] = { text, correct: question.mode === 'speak' ? scoreSpokenResponse(question, text) : scoreWrittenResponse(question, text) };
  }
  if (state.testMode === 'practice') {
    if (state.index >= state.questionOrder.length - 1) finishTest();
    else { state.index += 1; state.timerQuestionIndex = null; renderQuestion(); }
    return;
  }
  const answeredBefore = state.index < state.questionOrder.length - 1;
  if (!answeredBefore) {
    if (isAnswerCorrect(question, state.answers[state.index])) {
      state.correctStreak += 1;
      state.targetLevelIndex = Math.min(levels.length - 1, state.targetLevelIndex + (state.correctStreak >= 2 ? 1 : 0));
    } else {
      state.correctStreak = 0;
      state.targetLevelIndex = Math.max(0, state.targetLevelIndex - 1);
    }
  }
  if (state.index >= state.questionOrder.length - 1) {
    if (state.questionOrder.length >= state.maxQuestions || !await pickNextAdaptiveQuestion(isAnswerCorrect(question, state.answers[state.index]))) {
      finishTest();
      return;
    }
  }
  state.index += 1;
  renderQuestion();
}

function getAnswerDisplay(question, answer) {
  if (answer === null || answer === undefined) return 'Без ответа';
  if (question.mode === 'speak' || question.mode === 'write') return answer.text || 'Без ответа';
  if (question.mode === 'multi') return answer.map((index) => question.options[index]).join(', ');
  return question.options?.[answer] || String(answer);
}

function getExpectedDisplay(question) {
  if (question.mode === 'speak') return question.explanation || 'Ответ оценивается по ясности и полноте.';
  if (question.mode === 'write') return question.expectedText ? `${question.expectedText}. ${question.explanation || ''}` : (question.explanation || 'Проверь полноту, связность и ключевые слова задания.');
  if (question.mode === 'multi') return `${question.correct.map((index) => question.options[index]).join(', ')}. ${question.explanation || ''}`;
  return `${question.options?.[question.correct] || ''}. ${question.explanation || ''}`;
}

async function requestAIResponseReview(questionOrder, answers) {
  if (!profile.aiReviewEnabled || !supabaseClient || !accountUser) return null;
  const responses = questionOrder.map((questionIndex, index) => {
    const question = questions[questionIndex];
    const answer = answers[index];
    if (!['speak', 'write'].includes(question.mode) || !answer?.text) return null;
    return { index, level: question.level, mode: question.mode, prompt: question.prompt, context: question.context || '', answer: answer.text };
  }).filter(Boolean).slice(0, 12);
  if (!responses.length) return null;
  try {
    const result = await Promise.race([
      supabaseClient.functions.invoke(supabaseConfig.aiFunction || 'adaptive-question', { body: { action: 'evaluate', responses } }),
      new Promise((resolve) => setTimeout(() => resolve({ error: new Error('AI review timed out') }), 8000)),
    ]);
    if (result.error || !Array.isArray(result.data?.evaluations)) return null;
    return Object.fromEntries(result.data.evaluations.filter((item) => Number.isInteger(item.index) && item.index >= 0 && item.index < questionOrder.length).map((item) => {
      const question = questions[questionOrder[item.index]];
      const answer = answers[item.index]?.text || '';
      const issues = (item.issues || []).filter((issue) => typeof issue.quote === 'string' && Number.isInteger(issue.index) && answer.slice(issue.index, issue.index + issue.quote.length) === issue.quote).map((issue) => ({ text: issue.quote, index: issue.index, label: String(issue.reason || 'Проверь этот фрагмент.').slice(0, 200) }));
      const criteria = item.criteria || {};
      const score = (key) => Math.max(1, Math.min(5, Math.round(Number(criteria[key]) || 1)));
      return [item.index, { grammar: score('grammar'), vocabulary: score('vocabulary'), coherence: score('coherence'), taskResponse: score('taskResponse'), fluency: question.mode === 'speak' ? null : score('fluency'), issues, improved: String(item.improvedAnswer || answer).slice(0, 1200), source: 'AI · учебный разбор' }];
    }));
  } catch {
    showToast('AI-разбор временно недоступен. Показана локальная учебная рубрика.');
    return null;
  }
}

function renderResponseRubric(questionOrder, answers, aiReviews = null) {
  const reports = questionOrder.map((questionIndex, index) => ({ question: questions[questionIndex], answer: answers[index], index })).filter(({ question, answer }) => ['speak', 'write'].includes(question.mode) && answer?.text);
  $('#response-rubric-section').hidden = reports.length === 0;
  $('#response-rubric-list').innerHTML = reports.map(({ question, answer, index }) => {
    const report = aiReviews?.[index] || analyzeResponse(question, answer);
    const criteria = [
      ['Грамматика', report.grammar], ['Словарь', report.vocabulary], ['Связность', report.coherence], ['Ответ по теме', report.taskResponse],
      ...(report.fluency === null ? [] : [['Беглость · длина транскрипта', report.fluency]]),
    ];
    const feedback = report.issues.length ? report.issues.map((issue) => `<li>${escapeHtml(issue.label)}</li>`).join('') : '<li>Типичных шаблонных ошибок не найдено; это не гарантирует грамматическую точность.</li>';
    return `<article class="response-review-card"><h3>${escapeHtml(question.prompt)}</h3><div class="response-review-grid"><div><span class="response-review-label">ТВОЙ ОТВЕТ · ${report.source || 'ЛОКАЛЬНАЯ ЭВРИСТИКА'}</span><p class="response-original">${highlightResponse(report.text, report.issues)}</p><ul>${feedback}</ul></div><div class="response-criteria">${criteria.map(([name, score]) => `<div><span>${name}</span><strong>${score}/5</strong><i><b style="width:${score * 20}%"></b></i></div>`).join('')}<p class="pronunciation-note">Произношение автоматически не оценено: браузер распознаёт слова, но не проверяет фонетику.</p></div></div><div class="improved-answer"><span class="response-review-label">ВОЗМОЖНОЕ УЛУЧШЕНИЕ · ПРОСТОЙ УРОВЕНЬ</span><p>${escapeHtml(report.improved)}</p></div><p class="rubric-caveat">Ориентировочная учебная рубрика, не сертифицированная оценка DET.</p></article>`;
  }).join('');
}

function getDETComponents(question) {
  if (['speak-photo', 'read-speak', 'interactive-speaking'].includes(question.detType)) return ['Conversation', 'Production'];
  if (['write-photo', 'read-write', 'interactive-writing'].includes(question.detType)) return ['Literacy', 'Production'];
  if (['read-select', 'fill-blanks', 'read-complete'].includes(question.detType)) return ['Literacy'];
  if (question.detType === 'interactive-reading') return ['Literacy', 'Comprehension'];
  if (question.detType === 'listen-type') return ['Comprehension'];
  if (question.detType === 'interactive-listening' || question.detType === 'listen-speak') return ['Comprehension', 'Conversation'];
  if (question.mode === 'speak') return ['Conversation', 'Production'];
  if (question.mode === 'write') return ['Literacy', 'Production'];
  if (question.type.includes('ЧТЕНИЕ')) return ['Literacy', 'Comprehension'];
  if (question.audioText || question.type.includes('АУДИО')) return ['Comprehension'];
  if (question.skill && ['Literacy', 'Comprehension', 'Conversation', 'Production'].includes(question.skill)) return [question.skill];
  return ['Literacy'];
}

async function finishTest(timedOut = false) {
  if (activeVoiceRecorder?.state === 'recording') await stopQuizVoiceRecording();
  clearInterval(state.timerId);
  state.timerId = null;
  const weakestBeforeTest = getWeakestSkill()?.[0];
  const correctByLevel = Object.fromEntries(levels.map((level) => [level, { correct: 0, total: 0 }]));
  const skillResults = {};
  const componentResults = Object.fromEntries(['Literacy', 'Comprehension', 'Conversation', 'Production'].map((component) => [component, { correct: 0, total: 0 }]));
  state.questionOrder.forEach((questionIndex, index) => {
    const question = questions[questionIndex];
    const correct = isAnswerCorrect(question, state.answers[index]);
    correctByLevel[question.level].total += 1;
    if (correct) correctByLevel[question.level].correct += 1;
    const skill = question.skill || getSkill(question.type);
    skillResults[skill] ??= { correct: 0, total: 0 };
    skillResults[skill].total += 1;
    if (correct) skillResults[skill].correct += 1;
    getDETComponents(question).forEach((component) => {
      componentResults[component].total += 1;
      if (correct) componentResults[component].correct += 1;
    });
  });
  const correctTotal = Object.values(correctByLevel).reduce((sum, group) => sum + group.correct, 0);
  let achieved = -1;
  for (let index = 0; index < levels.length; index += 1) {
    const result = correctByLevel[levels[index]];
    if (result.total >= 2 && result.correct / result.total >= 0.6) achieved = index;
  }
  const percent = Math.round((correctTotal / state.questionOrder.length) * 100);
  const resultLevel = achieved >= 0 ? levels[achieved] : '—';
  $('#result-title').innerHTML = state.testMode === 'diagnostic' ? 'Диагностика <em>завершена</em>' : state.testMode === 'practice' ? 'Практика <em>завершена</em>' : 'Пробный тест <em>завершён</em>';
  $('#result-level').textContent = resultLevel;
  $('#result-summary').textContent = `Учебный ориентир до ${resultLevel}; он рассчитан по этому пробнику и не является результатом официального DET.`;
  $('#result-score').textContent = `${percent}%`;
  const equivalents = examRows.find((row) => row[0] === resultLevel);
  $('#result-equivalency-list').innerHTML = equivalents ? `
    <article><span>CEFR · ориентир</span><strong>${equivalents[0]}</strong><small>по заданиям этого пробника</small></article>
    <article><span>IELTS Academic · ориентир</span><strong>${equivalents[1]}</strong><small>не официальный эквивалент</small></article>
    <article><span>TOEFL iBT · старая шкала</span><strong>${equivalents[2]}</strong><small>только справочное сравнение</small></article>` : '<article><span>Недостаточно данных</span><strong>—</strong><small>пройди полный пробник, чтобы увидеть диапазон</small></article>';
  $('#det-score-range').textContent = getScoreRange(percent);
  $('#det-subscore-grid').innerHTML = Object.entries(componentResults).map(([component, result]) => {
    const accuracy = result.total ? Math.round((result.correct / result.total) * 100) : 0;
    return `<article><span>${component}</span><strong>${result.total ? getScoreRange(accuracy) : 'недостаточно данных'}</strong><small>${result.total ? `${result.correct}/${result.total} заданий · ориентир` : 'нужны ответы этого типа'}</small></article>`;
  }).join('');
  $('#score-fill').style.width = `${percent}%`;
  $('#result-correct-count').textContent = `${correctTotal} из ${state.questionOrder.length} правильных`;
  $('#result-chart').innerHTML = levels.map((level) => {
    const group = correctByLevel[level];
    const height = group.total ? Math.round((group.correct / group.total) * 100) : 0;
    return `<div class="chart-column"><div class="chart-track"><span class="chart-value">${group.total ? `${group.correct}/${group.total}` : '—'}</span><span class="chart-bar" style="height:${height}%"></span></div><span class="chart-label">${level}</span></div>`;
  }).join('');
  const mistakes = state.questionOrder.map((questionIndex, index) => ({ question: questions[questionIndex], questionIndex, index })).filter(({ index, question }) => !isAnswerCorrect(question, state.answers[index]));
  const errorRecords = addErrorsToDiary(mistakes);
  $('#mistake-total').textContent = mistakes.length;
  state.lastMistakeIndexes = mistakes.map(({ questionIndex }) => questionIndex);
  state.lastMistakeQuestions = mistakes.map(({ question }, index) => ({ ...question, errorRecordId: errorRecords[index].id }));
  $('#retry-mistakes').disabled = mistakes.length === 0;
  $('#result-review-bar').hidden = mistakes.length === 0;
  const aiReviews = await requestAIResponseReview(state.questionOrder, state.answers);
  renderResponseRubric(state.questionOrder, state.answers, aiReviews);
  $('#mistake-list').innerHTML = mistakes.length ? mistakes.map(({ question, index }) => {
    const given = getAnswerDisplay(question, state.answers[index]);
    const expected = getExpectedDisplay(question);
    return `<article class="mistake-item"><span class="mistake-number">${String(index + 1).padStart(2, '0')}</span><div><h3>${escapeHtml(question.prompt)}</h3>${question.context ? `<p>${escapeHtml(question.context)}</p>` : ''}<p>Твой ответ: ${escapeHtml(given)}</p><p class="mistake-answer">Подсказка: ${escapeHtml(expected)}</p></div></article>`;
  }).join('') : '<p class="empty-state">Отличная работа: ошибок нет. Пройди ещё раз на скорость или открой словарь следующего уровня.</p>';
  const nextTitles = {
    A1: ['Укрепи повседневную базу', 'Повтори частые слова, простые фразы и настоящее время.'],
    A2: ['Добавь уверенности в деталях', 'Сосредоточься на устойчивых фразах, прошедшем времени и чтении коротких текстов.'],
    B1: ['Выходи за пределы привычного', 'Работай с фразовыми глаголами, оттенками значений и связными текстами.'],
    B2: ['Точнее выражай сложные мысли', 'Расширяй академическую лексику, сложные связки и устойчивые выражения.'],
    C1: ['Оттачивай нюансы', 'Обрати внимание на формальную лексику, точность формулировок и скрытые смыслы.'],
    C2: ['Замечай самые тонкие различия', 'Изучай редкие оттенки значений и идиоматические конструкции в контексте.'],
    '—': ['Собери базу уверенно', 'Начни с частых слов и коротких предложений, затем повтори диагностику.'],
  };
  const next = nextTitles[resultLevel];
  $('#next-step-title').textContent = next[0];
  $('#next-step-copy').textContent = timedOut ? 'Время закончилось. Незавершённые вопросы учтены как пропущенные; посмотри ответы и попробуй ещё раз.' : next[1];
  const mistakeDetails = mistakes.map(({ question, questionIndex, index }) => ({
    questionIndex,
    given: getAnswerDisplay(question, state.answers[index]),
    question: { level: question.level, type: question.type, mode: question.mode, prompt: question.prompt, context: question.context, audioText: question.audioText, imageUrl: question.imageUrl, imageAlt: question.imageAlt, options: question.options, correct: question.correct, expectedText: question.expectedText, requiredWords: question.requiredWords, explanation: question.explanation, speechInstruction: question.speechInstruction, writingInstruction: question.writingInstruction, minWords: question.minWords, speechKeywords: question.speechKeywords, skill: question.skill, detType: question.detType, errorRecordId: errorRecords[mistakes.findIndex((mistake) => mistake.questionIndex === questionIndex)]?.id },
  }));
  profile.tests.unshift({ date: new Date().toISOString(), mode: state.testMode, level: resultLevel, score: percent, scoreRange: getScoreRange(percent), correct: correctTotal, total: state.questionOrder.length, mistakes: mistakes.length, skillResults, componentResults, mistakeDetails, timedOut });
  profile.tests = profile.tests.slice(0, 30);
  $('#save-result-prompt').hidden = Boolean(accountUser || localAccountUser);
  if (state.testMode === 'practice' && correctTotal > 0 && weakestBeforeTest && getTaskForSkill(weakestBeforeTest) === state.taskType?.id) {
    recordStudyActivity(Math.max(5, Math.round(state.questionOrder.length * 1.5)), state.taskType.id);
  }
  await saveProfile();
  if (state.questionCleanupIndex !== null) {
    questions.splice(state.questionCleanupIndex);
    state.questionCleanupIndex = null;
  }
  if (state.reviewMode) {
    $('#result-title').innerHTML = 'Повтор ошибок <em>завершён</em>';
    $('#result-summary').textContent = 'Ты прошёл ошибки отдельно. Открой историю попыток, чтобы вернуться к разбору.';
    $('#result-review-bar').hidden = true;
    $('#result-overview').hidden = false;
  }
  showView('result');
}

function startMistakeReview(questionList = state.lastMistakeQuestions, errorIds = null) {
  if (!questionList.length) return;
  clearInterval(state.timerId);
  state.reviewMode = true;
  state.reviewRevealed = false;
  state.reviewQuestions = questionList;
  state.errorReviewIds = errorIds || questionList.map((question) => question.errorRecordId).filter(Boolean);
  state.questionOrder = questionList.map((question) => questions.indexOf(question));
  state.answers = Array(state.questionOrder.length).fill(null);
  state.index = 0;
  state.remaining = 0;
  updateTimer();
  renderQuestion();
  showView('quiz');
}

async function finishReview() {
  const resolved = state.reviewQuestions.filter((question, index) => isAnswerCorrect(question, state.answers[index])).length;
  const total = state.questionOrder.length;
  const answersByErrorId = new Map(state.reviewQuestions.map((question, index) => [question.errorRecordId, isAnswerCorrect(question, state.answers[index])]));
  profile.errors.forEach((error) => {
    if (!answersByErrorId.has(error.id)) return;
    const correct = answersByErrorId.get(error.id);
    error.interval = correct ? (error.interval ? Math.min(30, error.interval * 2) : 1) : 0;
    error.dueAt = new Date(Date.now() + (correct ? error.interval : 1) * 86400000).toISOString();
    error.lastReviewedAt = new Date().toISOString();
  });
  $('#result-title').innerHTML = 'Повтор ошибок <em>завершён</em>';
  $('#result-level').textContent = '✓';
  $('#result-summary').textContent = `${resolved} из ${total} повторных ответов верны. Разбери оставшиеся вопросы в списке ниже.`;
  $('#result-score').textContent = `${Math.round((resolved / total) * 100)}%`;
  $('#score-fill').style.width = `${Math.round((resolved / total) * 100)}%`;
  $('#result-correct-count').textContent = `${resolved} из ${total} верных при повторе`;
  $('#result-chart').style.display = 'none';
  $('#result-review-bar').hidden = true;
  $('#mistake-list').innerHTML = state.reviewQuestions.map((question, index) => {
    const answer = state.answers[index];
    const correct = isAnswerCorrect(question, answer);
    const expected = getExpectedDisplay(question);
    const actual = getAnswerDisplay(question, answer);
    return `<article class="mistake-item"><span class="mistake-number ${correct ? 'review-correct' : ''}">${correct ? '✓' : String(index + 1).padStart(2, '0')}</span><div><h3>${escapeHtml(question.prompt)}</h3><p>Твой ответ: ${escapeHtml(actual)}</p><p class="mistake-answer">${correct ? 'Верно. ' : 'Повтори: '}${escapeHtml(expected)}</p></div></article>`;
  }).join('');
  if (state.errorReviewIds.length && resolved > 0) recordStudyActivity(Math.max(5, Math.round(total * 1.5)), 'error-review');
  profile.tests.unshift({ date: new Date().toISOString(), level: 'Повтор', score: Math.round((resolved / total) * 100), correct: resolved, total, mistakes: total - resolved, review: true, skillResults: {} });
  profile.tests = profile.tests.slice(0, 30);
  await saveProfile();
  renderErrorDiary();
  showView('result');
}

function startErrorReview(errorId) {
  const error = profile.errors.find((item) => item.id === errorId);
  if (error?.question) startMistakeReview([error.question], [error.id]);
}

function renderErrorDiary() {
  const filters = $('#diary-filters');
  const list = $('#diary-list');
  if (!filters || !list) return;
  const activeErrorIds = state.errorFilter && state.errorFilter !== 'all' ? profile.errors.filter((error) => error.taskType === state.errorFilter).map((error) => error.id) : profile.errors.map((error) => error.id);
  const filtered = profile.errors.filter((error) => activeErrorIds.includes(error.id)).sort((left, right) => new Date(left.dueAt) - new Date(right.dueAt));
  const dueCount = profile.errors.filter((error) => new Date(error.dueAt) <= new Date()).length;
  const taskTypes = [...new Set(profile.errors.map((error) => error.taskType))];
  filters.innerHTML = `<button class="diary-filter ${!state.errorFilter || state.errorFilter === 'all' ? 'is-active' : ''}" data-error-filter="all">Все <span>${profile.errors.length}</span></button>${taskTypes.map((type) => `<button class="diary-filter ${state.errorFilter === type ? 'is-active' : ''}" data-error-filter="${escapeHtml(type)}">${escapeHtml(type)}</button>`).join('')}`;
  $('#diary-summary').innerHTML = `<article><strong>${profile.errors.length}</strong><span>ошибок сохранено</span></article><article><strong>${dueCount}</strong><span>пора повторить сегодня</span></article><article><strong>${getStudyStreak()}</strong><span>дней работы над ошибками</span></article>`;
  list.innerHTML = filtered.length ? filtered.map((error) => {
    const due = new Date(error.dueAt) <= new Date();
    return `<article class="diary-entry ${due ? 'is-due' : ''}"><div class="diary-entry-main"><span class="diary-type">${escapeHtml(error.taskType)}</span><span class="diary-due">${due ? 'Пора повторить' : `Следующий повтор: ${new Date(error.dueAt).toLocaleDateString('ru-RU')}`}</span><h3>${escapeHtml(error.question.prompt)}</h3>${error.question.context ? `<p>${escapeHtml(error.question.context)}</p>` : ''}<p class="diary-answer">Твой ответ: ${escapeHtml(error.answer || 'Без ответа')}</p><p class="mistake-answer">Подсказка: ${escapeHtml(getExpectedDisplay(error.question))}</p><span class="diary-interval">Интервал: ${error.interval || 0} дн.</span></div><button class="button ${due ? 'button-primary' : 'button-outline'}" data-review-error="${error.id}">Повторить <span aria-hidden="true">→</span></button></article>`;
  }).join('') : '<div class="empty-state">Пока ошибок нет. Пройди практику или тест: сложные задания соберутся здесь.</div>';
}

function getSkill(type) {
  if (['Literacy', 'Comprehension', 'Conversation', 'Production'].includes(type)) return type;
  if (type.includes('АУДИО')) return 'Аудирование';
  if (type.includes('ГОВОРЕНИЕ')) return 'Говорение';
  if (type.includes('ЧТЕНИЕ')) return 'Чтение';
  if (type.includes('ГРАММАТИКА')) return 'Грамматика';
  if (type.includes('СЛОВАРЬ') || type.includes('ТОЧНОСТЬ')) return 'Лексика';
  return 'Фразы и контекст';
}

function getWeakestSkill() {
  const totals = {};
  profile.tests.forEach((test) => Object.entries(test.skillResults || {}).forEach(([skill, result]) => {
    totals[skill] ??= { correct: 0, total: 0 };
    totals[skill].correct += result.correct;
    totals[skill].total += result.total;
  }));
  return Object.entries(totals).filter(([, result]) => result.total > 0).sort((left, right) => left[1].correct / left[1].total - right[1].correct / right[1].total)[0] || null;
}

function getLessonForSkill(skill) {
  if (skill === 'Аудирование' || skill === 'Comprehension') return 'listening';
  if (skill === 'Говорение' || skill === 'Conversation') return 'speaking';
  if (skill === 'Production' || skill === 'Письмо') return 'writing';
  if (skill === 'Грамматика') return 'grammar';
  if (skill === 'Literacy' || skill === 'Лексика' || skill === 'Чтение') return 'vocabulary';
  return 'vocabulary';
}

function getTaskForSkill(skill) {
  const taskBySkill = {
    Literacy: 'read-complete',
    Comprehension: 'interactive-listening',
    Conversation: 'interactive-speaking',
    Production: 'interactive-writing',
    'Аудирование': 'interactive-listening',
    'Говорение': 'interactive-speaking',
    'Чтение': 'interactive-reading',
    'Грамматика': 'fill-blanks',
    'Лексика': 'read-select',
  };
  return taskBySkill[skill] || 'interactive-reading';
}

function openGoalSetup(launchDiagnostic = true) {
  state.goalDialogStartsDiagnostic = launchDiagnostic;
  const goal = profile.goal || {};
  $('#goal-score').value = String(goal.targetScore || 110);
  $('#goal-date').value = goal.examDate || '';
  $('#goal-daily-minutes').value = String(goal.dailyMinutes || 30);
  $('#goal-dialog').showModal();
}

function localDayKey(date = new Date()) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function getStudyStreak() {
  const activeDays = new Set((profile.activities || []).filter((activity) => activity.weakAreaWork).map((activity) => activity.day));
  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!activeDays.has(localDayKey(cursor)) && profile.streakFreezeDate !== localDayKey(cursor)) cursor.setDate(cursor.getDate() - 1);
  while (activeDays.has(localDayKey(cursor)) || profile.streakFreezeDate === localDayKey(cursor)) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
    if (streak > 365) break;
  }
  return streak;
}

function renderTodayDashboard() {
  const dashboard = $('#today-dashboard');
  if (!dashboard) return;
  dashboard.hidden = !profile.goal;
  if (!profile.goal) return;
  $('#today-date').textContent = new Intl.DateTimeFormat('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());
  const today = localDayKey();
  const minutesDone = profile.activities.filter((activity) => activity.day === today).reduce((sum, activity) => sum + (Number(activity.minutes) || 0), 0);
  const dailyGoal = Number(profile.goal.dailyMinutes) || 30;
  $('#today-minutes').textContent = `${Math.min(minutesDone, dailyGoal)} / ${dailyGoal} мин`;
  $('#today-progress-fill').style.width = `${Math.min(100, Math.round((minutesDone / dailyGoal) * 100))}%`;
  const examDate = profile.goal.examDate ? new Date(`${profile.goal.examDate}T12:00:00`) : null;
  const daysLeft = examDate ? Math.max(0, Math.ceil((examDate - new Date()) / 86400000)) : null;
  const remainingStudyMinutes = daysLeft === null ? 0 : daysLeft * dailyGoal;
  $('#exam-countdown').textContent = daysLeft === null ? `Цель: DET ${profile.goal.targetScore}. Добавь дату экзамена, чтобы настроить план.` : daysLeft === 0 ? 'Экзамен сегодня. Повтори знакомое и постарайся отдохнуть.' : `DET ${profile.goal.targetScore} · ${daysLeft} дн. · около ${remainingStudyMinutes} мин. практики до экзамена`;
  $('#target-score-caption').textContent = `Целевой балл DET ${profile.goal.targetScore}`;
  const latestMock = profile.tests.find((test) => test.mode === 'mock');
  const estimatedUpper = latestMock?.scoreRange ? Number(latestMock.scoreRange.split('–')[1]) : 0;
  $('#target-score-current').textContent = latestMock ? `${latestMock.scoreRange || `${latestMock.score}%`} · учебный ориентир` : 'Пройди пробный тест';
  $('#target-score-progress-fill').style.width = `${Math.min(100, Math.round((estimatedUpper / profile.goal.targetScore) * 100))}%`;
  $('#study-streak').textContent = `${getStudyStreak()} дн.`;
  $('#freeze-streak').disabled = profile.streakFreezeUsed || getStudyStreak() === 0;
  $('#freeze-streak').title = $('#freeze-streak').disabled ? 'Серия замораживается только после начала работы над слабым местом; новый заряд появится после практики.' : 'Сохранить серию на один день без практики.';
  $('#reminder-time').value = profile.reminderTime || '18:00';
  $('#toggle-reminder').setAttribute('aria-pressed', String(profile.reminderEnabled));
  $('#toggle-reminder').textContent = profile.reminderEnabled ? 'Выключить' : 'Включить';
  $('#reminder-status').textContent = profile.reminderEnabled ? 'Уведомление придёт только если на сегодня осталась практика.' : 'Необязательно. Уведомление придёт только если план ещё не выполнен.';
  $('#toggle-reminder').disabled = !('Notification' in window);
  const dueError = profile.errors.find((error) => new Date(error.dueAt) <= new Date());
  const weakest = getWeakestSkill();
  if (dueError) {
    $('#today-task-title').textContent = `Повтори: ${dueError.question.prompt}`;
    $('#today-task-copy').textContent = `Задание из раздела ${dueError.taskType || 'диагностики'} подошло по интервалу повторения.`;
    $('#today-task-action').textContent = 'Повторить ошибку →';
    $('#today-task-action').dataset.errorId = dueError.id;
    delete $('#today-task-action').dataset.taskId;
  } else if (weakest) {
    const skill = weakest[0];
    $('#today-task-title').textContent = `Укрепи навык: ${skill}`;
    $('#today-task-copy').textContent = `Планируй ${dailyGoal} минут на задания по области с наибольшим числом ошибок.`;
    $('#today-task-action').textContent = 'Начать слабый формат →';
    $('#today-task-action').dataset.taskId = getTaskForSkill(skill);
    delete $('#today-task-action').dataset.errorId;
  } else {
    $('#today-task-title').textContent = 'Узнай свою отправную точку';
    $('#today-task-copy').textContent = `Начни с 10-минутной диагностики, затем составим план на ${dailyGoal} минут в день.`;
    $('#today-task-action').textContent = 'Начать диагностику →';
    delete $('#today-task-action').dataset.errorId;
    delete $('#today-task-action').dataset.taskId;
  }
}

function renderExamReadiness() {
  document.querySelectorAll('[data-exam-check]').forEach((input) => {
    input.checked = Boolean(profile.examChecklist[input.dataset.examCheck]);
  });
}

async function checkStudyReminder() {
  if (!profile.reminderEnabled || !('Notification' in window) || Notification.permission !== 'granted' || !profile.goal) return;
  const today = localDayKey();
  if (profile.lastReminderDate === today) return;
  const [hours, minutes] = (profile.reminderTime || '18:00').split(':').map(Number);
  const now = new Date();
  if (now.getHours() * 60 + now.getMinutes() < hours * 60 + minutes) return;
  const done = profile.activities.filter((activity) => activity.day === today).reduce((sum, activity) => sum + (Number(activity.minutes) || 0), 0);
  if (done >= Number(profile.goal.dailyMinutes || 30)) return;
  new Notification('Небольшой шаг к цели?', { body: 'У тебя ещё есть время на одну спокойную практику. Можно и перенести её на завтра.' });
  profile.lastReminderDate = today;
  await saveProfile();
}

function stopDeviceCheck() {
  if (state.deviceAnimation) cancelAnimationFrame(state.deviceAnimation);
  state.deviceStream?.getTracks().forEach((track) => track.stop());
  state.deviceStream = null;
  $('#camera-preview').srcObject = null;
  $('#mic-meter-fill').style.width = '0%';
  $('#stop-device-check').hidden = true;
  if (state.deviceAudioContext) {
    state.deviceAudioContext.close().catch(() => {});
    state.deviceAudioContext = null;
  }
}

async function checkDevicePermissions() {
  const status = $('#device-status');
  if (!navigator.mediaDevices?.getUserMedia) {
    status.textContent = 'Проверка камеры/микрофона недоступна. Открой сайт по HTTPS или localhost в современном браузере.';
    return;
  }
  stopDeviceCheck();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    state.deviceStream = stream;
    $('#camera-preview').srcObject = stream;
    $('#stop-device-check').hidden = false;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      state.deviceAudioContext = new AudioContextClass();
      const source = state.deviceAudioContext.createMediaStreamSource(stream);
      const analyser = state.deviceAudioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      const samples = new Uint8Array(analyser.frequencyBinCount);
      const sampleMic = () => {
        analyser.getByteTimeDomainData(samples);
        const amplitude = samples.reduce((sum, sample) => sum + Math.abs(sample - 128), 0) / samples.length;
        $('#mic-meter-fill').style.width = `${Math.min(100, Math.round(amplitude * 6))}%`;
        if (state.deviceStream) state.deviceAnimation = requestAnimationFrame(sampleMic);
      };
      sampleMic();
    }
    status.textContent = 'Камера и микрофон доступны. Это локальная проверка разрешений, не проверка экзаменационной системы.';
  } catch (error) {
    status.textContent = error.name === 'NotAllowedError' ? 'Доступ запрещён. Разреши камеру и микрофон в браузере или проверь их позже в настройках устройства.' : 'Не удалось получить доступ к устройствам. Проверь разрешения и подключение оборудования.';
  }
}

function startWalkthrough() {
  const steps = [...document.querySelectorAll('#walkthrough-steps span')];
  const button = $('#start-walkthrough');
  let step = 0;
  steps.forEach((item) => item.classList.remove('is-active', 'is-complete'));
  button.textContent = `Шаг ${step + 1} из ${steps.length}: ${steps[step].textContent}`;
  button.onclick = () => {
    steps[step].classList.remove('is-active');
    steps[step].classList.add('is-complete');
    step += 1;
    if (step >= steps.length) {
      button.textContent = 'Готово: проверь официальную инструкцию перед тестом';
      button.onclick = startWalkthrough;
      return;
    }
    steps[step].classList.add('is-active');
    button.textContent = `Шаг ${step + 1} из ${steps.length}: ${steps[step].textContent}`;
  };
  steps[0].classList.add('is-active');
}

function searchUniversityRequirements(name) {
  const normalized = name.trim();
  if (!normalized) return;
  profile.university = { name: normalized, searchedAt: new Date().toISOString() };
  saveProfile();
  const query = encodeURIComponent(`"${normalized}" Duolingo English Test minimum score subscores official admissions`);
  $('#university-result').innerHTML = `<span>Не показываем непроверенные пороги. Сверь минимальный общий балл и отдельные подбаллы на официальной странице вуза.</span> <a href="https://www.google.com/search?q=${query}" target="_blank" rel="noreferrer">Открыть поиск требований ↗</a>`;
}

function renderDetTaskGrid() {
  const grid = $('#det-task-grid');
  if (!grid) return;
  grid.innerHTML = detTaskTypes.map((task) => `<article class="det-task-card"><div class="det-task-top"><span class="task-domain">${task.skill.toUpperCase()}</span><span>${Math.ceil(task.time / 60)} мин</span></div><h3>${task.title}</h3><p>${task.description}</p><button class="task-start-button" data-det-task="${task.id}">Начать бесплатно <span aria-hidden="true">→</span></button></article>`).join('');
}

function startDetTask(id) {
  const task = detTaskTypes.find((item) => item.id === id);
  if (!task) return;
  const items = task.questions.map((question) => ({ ...question, timeLimit: question.timeLimit || task.time }));
  startTest('practice', task, items);
}

function getLessonQuestionCount(minutes) {
  return Math.round(minutes * 0.45);
}

function buildLessonItems(lesson, minutes) {
  const relatedQuestions = questions.filter((question) => {
    if (lesson.id === 'speaking') return question.mode === 'speak';
    if (lesson.id === 'writing') return question.mode === 'write';
    if (lesson.id === 'listening') return Boolean(question.audioText);
    if (lesson.id === 'grammar') return question.type.includes('ГРАММАТИКА');
    return question.type.includes('СЛОВАРЬ') || question.type.includes('ТОЧНОСТЬ');
  }).map((question) => ['speak', 'write'].includes(question.mode)
    ? { prompt: question.prompt, instruction: question.speechInstruction || question.writingInstruction, placeholder: 'Скажи ответ вслух или набросай его здесь…', minWords: question.minWords, requiredWords: question.requiredWords, mode: question.mode, explanation: question.explanation }
    : { prompt: question.prompt, sentence: question.audioText, instruction: question.audioText ? 'Прослушай и выбери точный смысл.' : question.context || 'Выбери самый точный ответ.', options: question.options, correct: question.correct, explanation: question.explanation });
  const pool = [...lesson.items, ...relatedQuestions];
  const targetCount = Math.max(6, getLessonQuestionCount(minutes));
  const session = pool.slice(0, Math.min(lesson.items.length, targetCount));
  const extras = shuffle(pool.slice(lesson.items.length));
  while (session.length < targetCount) {
    if (!extras.length) extras.push(...shuffle(pool));
    const nextItem = extras.shift();
    if (session.at(-1)?.prompt !== nextItem.prompt) session.push(nextItem);
    else extras.push(nextItem);
  }
  return session.map((item) => {
    const copy = { ...item };
    if (copy.options) {
      const ordered = shuffle(copy.options.map((option, index) => ({ option, index })));
      copy.options = ordered.map(({ option }) => option);
      copy.correct = ordered.findIndex(({ index }) => index === copy.correct);
    }
    return copy;
  });
}

function updateLessonClock() {
  const minutes = Math.floor(state.lessonSeconds / 60).toString().padStart(2, '0');
  const seconds = (state.lessonSeconds % 60).toString().padStart(2, '0');
  $('#lesson-time-left').textContent = `${minutes}:${seconds}`;
  $('#lesson-time-left').classList.toggle('is-low', state.lessonSeconds <= 60);
}

function renderPractice() {
  $('#lesson-plan-summary').textContent = `${getLessonQuestionCount(state.lessonMinutes)} упражнений · примерно ${state.lessonMinutes} минут`;
  document.querySelectorAll('[data-lesson-minutes]').forEach((button) => button.classList.toggle('is-active', Number(button.dataset.lessonMinutes) === state.lessonMinutes));
  const weakest = getWeakestSkill();
  const recommendation = $('#practice-recommendation');
  if (weakest) {
    const [skill, result] = weakest;
    const taskId = getTaskForSkill(skill);
    recommendation.hidden = false;
    recommendation.innerHTML = `<div><span class="recommendation-label">ПОДСКАЗКА ПО ТВОИМ РЕЗУЛЬТАТАМ</span><h2>Сделай упор на ${skill.toLowerCase()}</h2><p>В прошлых проверках точность в этом разделе ${Math.round((result.correct / result.total) * 100)}%. Этот формат поможет потренировать его целенаправленно.</p></div><button class="button button-dark" data-open-det-task="${taskId}">Открыть формат <span aria-hidden="true">→</span></button>`;
  } else {
    recommendation.hidden = true;
    recommendation.innerHTML = '';
  }
  $('#lesson-grid').innerHTML = lessons.map((lesson) => {
    const completed = profile.lessons.filter((item) => item.id === lesson.id).length;
    return `<article class="lesson-card lesson-${lesson.color}"><div class="lesson-card-top"><span class="lesson-icon" aria-hidden="true">${lesson.icon}</span><span class="lesson-duration">${state.lessonMinutes} минут</span></div><p class="lesson-skill">${lesson.skill.toUpperCase()}</p><h2>${lesson.title}</h2><p>${lesson.description}</p><div class="lesson-card-bottom"><span>${completed ? `${completed} ${completed === 1 ? 'урок' : 'урока'} пройдено` : `${getLessonQuestionCount(state.lessonMinutes)} упражнений`}</span><button class="lesson-open" data-open-lesson="${lesson.id}" aria-label="Открыть урок ${lesson.title}">→</button></div></article>`;
  }).join('');
  document.querySelectorAll('[data-open-lesson]').forEach((button) => button.addEventListener('click', () => openLesson(button.dataset.openLesson)));
  document.querySelectorAll('[data-open-det-task]').forEach((button) => button.addEventListener('click', () => startDetTask(button.dataset.openDetTask)));
}

function openLesson(id) {
  const lesson = lessons.find((item) => item.id === id);
  state.activeLesson = lesson ? { ...lesson, items: buildLessonItems(lesson, state.lessonMinutes) } : null;
  state.lessonIndex = 0;
  state.lessonAnswers = [];
  state.lessonFeedback = null;
  if (!state.activeLesson) return;
  clearInterval(state.lessonTimerId);
  state.lessonSeconds = state.lessonMinutes * 60;
  updateLessonClock();
  state.lessonTimerId = setInterval(() => {
    if (state.lessonSeconds > 0) state.lessonSeconds -= 1;
    updateLessonClock();
    if (state.lessonSeconds === 0) {
      clearInterval(state.lessonTimerId);
      showToast('Время по плану закончилось. Можешь завершить урок или спокойно продолжить.');
    }
  }, 1000);
  $('#duration-planner').hidden = true;
  $('#lesson-room').hidden = false;
  $('#lesson-grid').hidden = true;
  $('#practice-recommendation').hidden = true;
  renderLessonQuestion();
  $('#lesson-room').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderLessonQuestion() {
  const lesson = state.activeLesson;
  const item = lesson.items[state.lessonIndex];
  $('#lesson-duration').textContent = `${state.lessonMinutes} МИНУТ · ${state.lessonIndex + 1}/${lesson.items.length}`;
  $('#lesson-progress-fill').style.width = `${((state.lessonIndex + 1) / lesson.items.length) * 100}%`;
  $('#lesson-skill-label').textContent = lesson.skill.toUpperCase();
  $('#lesson-prompt').textContent = item.prompt;
  $('#lesson-instruction').textContent = item.instruction || 'Прослушай аудио и выбери лучший ответ.';
  const audio = $('#lesson-audio');
  const sentence = $('#lesson-sentence');
  audio.hidden = !item.sentence;
  sentence.hidden = true;
  sentence.textContent = item.sentence || '';
  $('#transcript-toggle').hidden = !item.sentence;
  $('#transcript-toggle').textContent = 'Показать текст';
  $('#lesson-feedback').hidden = true;
  $('#lesson-feedback').textContent = '';
  $('#lesson-submit').hidden = false;
  $('#lesson-submit').textContent = lesson.type === 'speak' ? 'Сохранить ответ →' : 'Проверить →';
  $('#lesson-finish').hidden = true;
  if (['speak', 'write'].includes(lesson.type)) {
    const speechSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    $('#lesson-answer-area').innerHTML = `<textarea class="lesson-textarea" id="lesson-response" maxlength="900" placeholder="${item.placeholder}"></textarea><div class="speech-tools"><span>${lesson.type === 'speak' ? 'Произнеси ответ вслух, затем запиши его здесь.' : 'Сформулируй и отредактируй ответ на английском.'}</span>${lesson.type === 'speak' && speechSupported ? '<button class="speech-button" id="speech-button">◎ Записать речь</button>' : ''}</div>`;
    $('#lesson-submit').hidden = false;
    $('#lesson-finish').hidden = true;
  } else {
    $('#lesson-answer-area').innerHTML = `<div class="lesson-options">${item.options.map((option, index) => `<button class="lesson-option" data-lesson-option="${index}" aria-pressed="false"><span>${String.fromCharCode(65 + index)}</span>${option}</button>`).join('')}</div>`;
    document.querySelectorAll('[data-lesson-option]').forEach((button) => button.addEventListener('click', () => {
      document.querySelectorAll('[data-lesson-option]').forEach((option) => { option.classList.remove('is-selected'); option.setAttribute('aria-pressed', 'false'); });
      button.classList.add('is-selected');
      button.setAttribute('aria-pressed', 'true');
    }));
  }
  if (item.sentence) {
    $('#play-audio').onclick = () => speakText(item.sentence);
    $('#transcript-toggle').onclick = () => {
      sentence.hidden = !sentence.hidden;
      $('#transcript-toggle').textContent = sentence.hidden ? 'Показать текст' : 'Скрыть текст';
    };
  }
  if (lesson.type === 'speak' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) $('#speech-button').addEventListener('click', startSpeechRecognition);
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showToast('Озвучивание не поддерживается. Прочитай фразу и продолжи задание.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function startSpeechRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Recognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.onresult = (event) => { $('#lesson-response').value = event.results[0][0].transcript; };
  recognition.onerror = () => showToast('Не получилось распознать речь. Можно ввести ответ с клавиатуры.');
  recognition.start();
}

function checkLessonAnswer() {
  const lesson = state.activeLesson;
  const item = lesson.items[state.lessonIndex];
  if (lesson.type === 'speak') {
    const response = $('#lesson-response').value.trim();
    if (response.length < 8) {
      showToast('Добавь хотя бы одну короткую фразу, чтобы сохранить ответ.');
      return;
    }
    state.lessonAnswers[state.lessonIndex] = response;
    $('#lesson-feedback').innerHTML = '<strong>Ответ сохранён.</strong> Попробуй произнести его ещё раз, следя за ясностью и связками между идеями.';
  } else if (lesson.type === 'write') {
    const response = $('#lesson-response').value.trim();
    if (response.length < 15) {
      showToast('Добавь несколько предложений, чтобы ответ можно было разобрать.');
      return;
    }
    const question = { mode: 'write', minWords: item.minWords, requiredWords: item.requiredWords };
    state.lessonAnswers[state.lessonIndex] = scoreWrittenResponse(question, response);
    $('#lesson-feedback').innerHTML = '<strong>Черновик принят.</strong> Проверь, есть ли в ответе позиция, причина и пример. Внешняя система официальную оценку не выставляет.';
  } else {
    const selected = $('.lesson-option.is-selected');
    if (!selected) {
      showToast('Выбери вариант ответа, чтобы продолжить.');
      return;
    }
    const answer = Number(selected.dataset.lessonOption);
    state.lessonAnswers[state.lessonIndex] = answer === item.correct;
    $('#lesson-feedback').innerHTML = answer === item.correct ? `<strong>Верно.</strong> ${item.explanation}` : `<strong>Почти.</strong> Правильный ответ: ${item.options[item.correct]}. ${item.explanation}`;
  }
  $('#lesson-feedback').hidden = false;
  $('#lesson-submit').hidden = true;
  $('#lesson-finish').hidden = state.lessonIndex !== lesson.items.length - 1;
  if (state.lessonIndex < lesson.items.length - 1) {
    $('#lesson-finish').hidden = false;
    $('#lesson-finish').textContent = 'Следующее задание →';
  } else {
    $('#lesson-finish').textContent = lesson.type === 'speak' ? 'Завершить урок ✓' : 'Сохранить результат ✓';
  }
}

async function advanceLesson() {
  if (state.lessonIndex < state.activeLesson.items.length - 1) {
    state.lessonIndex += 1;
    renderLessonQuestion();
    return;
  }
  const score = state.activeLesson.type === 'choice' ? state.lessonAnswers.filter(Boolean).length : null;
  const engaged = state.activeLesson.type === 'choice'
    ? score > 0
    : state.activeLesson.type === 'write'
      ? state.lessonAnswers.some(Boolean)
      : state.lessonAnswers.some((answer) => typeof answer === 'string' && answer.trim().split(/\s+/).length >= 5);
  const weakestSkill = getWeakestSkill()?.[0];
  if (engaged && weakestSkill && getLessonForSkill(weakestSkill) === state.activeLesson.id) recordStudyActivity(state.lessonMinutes, `lesson-${state.activeLesson.id}`);
  profile.lessons.unshift({ id: state.activeLesson.id, title: state.activeLesson.title, skill: state.activeLesson.skill, minutes: state.lessonMinutes, score, total: state.activeLesson.items.length, date: new Date().toISOString() });
  profile.lessons = profile.lessons.slice(0, 100);
  clearInterval(state.lessonTimerId);
  await saveProfile();
  $('#duration-planner').hidden = false;
  $('#lesson-room').hidden = true;
  $('#lesson-grid').hidden = false;
  state.activeLesson = null;
  renderPractice();
  showToast('Урок завершён. Прогресс сохранён в кабинете.');
}

function renderTests() {
  const attempts = profile.tests || [];
  $('#tests-count').textContent = `${attempts.length} ${attempts.length === 1 ? 'попытка' : attempts.length >= 2 && attempts.length <= 4 ? 'попытки' : 'попыток'}`;
  $('#test-history-list').innerHTML = attempts.length ? attempts.map((attempt, index) => {
    const title = attempt.review ? 'Повтор ошибок' : attempt.mode === 'diagnostic' ? 'Диагностика' : attempt.mode === 'practice' ? 'Тренировочный тест' : 'Пробный тест';
    const date = attempt.date && !Number.isNaN(new Date(attempt.date).valueOf()) ? new Date(attempt.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Дата не указана';
    const hasReview = Array.isArray(attempt.mistakeDetails) && attempt.mistakeDetails.some((item) => item.question);
    return `<article class="test-history-entry"><div class="test-history-score"><strong>${escapeHtml(attempt.scoreRange || attempt.level || '—')}</strong><span>${escapeHtml(attempt.score)}% точность</span></div><div class="test-history-copy"><span class="eyebrow">${escapeHtml(title)}</span><h3>${escapeHtml(date)}</h3><p>${escapeHtml(attempt.correct || 0)} из ${escapeHtml(attempt.total || 0)} верных · ${escapeHtml(attempt.mistakes || 0)} ошибок</p></div><button class="button button-outline" data-review-test="${index}" ${hasReview ? '' : 'disabled'}>${hasReview ? 'Повторить ошибки' : 'Нет ошибок для повтора'}</button></article>`;
  }).join('') : '<div class="empty-state">Попыток пока нет. Начни с десятиминутной диагностики или полного пробного теста.</div>';
}

function renderSettings() {
  const goal = profile.goal || {};
  $('#settings-daily-minutes').value = String(goal.dailyMinutes || 30);
  $('#settings-reminder-enabled').checked = Boolean(profile.reminderEnabled);
  $('#settings-reminder-time').value = profile.reminderTime || '18:00';
  $('#settings-dark-theme').checked = document.body.dataset.theme === 'dark';
  $('#settings-freeze-streak').disabled = profile.streakFreezeUsed || getStudyStreak() === 0;
  $('#settings-freeze-streak').title = $('#settings-freeze-streak').disabled ? 'Сначала выполни учебный план; заряд появляется после практики.' : 'Сохранить серию на один день.';
  $('#settings-preference-status').textContent = 'Изменения сохраняются автоматически.';
  renderVoiceRecordings();
}

function renderVoiceRecordings() {
  const recordings = profile.voiceRecordings || [];
  $('#voice-recordings-list').innerHTML = recordings.length ? recordings.map((recording, index) => `<article class="voice-recording-entry"><div><strong>${escapeHtml(recording.taskType || 'Говорение')}</strong><span>${escapeHtml(recording.prompt || 'Устный ответ')} · ${new Date(recording.createdAt).toLocaleDateString('ru-RU')}</span></div><audio controls preload="none" data-voice-player="${index}" hidden></audio><div><button class="button button-outline" data-voice-play="${index}" type="button">Воспроизвести</button><button class="text-button" data-voice-delete="${index}" type="button">Удалить</button></div></article>`).join('') : '<p class="voice-recordings-empty">Записей пока нет. Во время speaking-задания нажми «Записать голос».</p>';
}

function renderAccount() {
  const activeAccount = accountUser || localAccountUser;
  $('#account-auth').hidden = Boolean(activeAccount);
  $('#account-authenticated').hidden = !activeAccount;
  $('#signed-in-label').textContent = accountUser ? `Вошли как ${accountUser.email}` : localAccountUser ? `Локальный аккаунт · ${localAccountUser.email}` : '';
  $('#auth-config-note').hidden = Boolean(supabaseClient);
  $('#account-sidebar-status').textContent = accountUser ? 'Синхронизация включена' : localAccountUser ? 'Локальный аккаунт' : 'Гостевой профиль';
  document.querySelectorAll('[data-auth-google]').forEach((button) => { button.disabled = false; });
  const latestSavedResult = profile.tests.find((test) => !test.review);
  $('#auth-result-highlight').textContent = latestSavedResult
    ? `Сохраним результат диагностики: ${latestSavedResult.scoreRange || `${latestSavedResult.score} баллов`}.`
    : 'Сохраним результаты диагностики и план подготовки.';
  $('#register-message').textContent = supabaseClient ? 'Прогресс будет синхронизироваться между устройствами.' : 'Локальный аккаунт и пароль будут храниться только в этом браузере.';
  $('#login-message').textContent = supabaseClient ? 'Войдите, чтобы синхронизировать прогресс.' : 'Войдите в локальный профиль на этом устройстве.';
  $('#ai-review-optin').checked = profile.aiReviewEnabled;
  $('#ai-review-optin').disabled = !supabaseClient || !accountUser;
  $('#profile-name').value = profile.name;
  $('#profile-monogram').textContent = profile.name.trim().charAt(0).toUpperCase() || 'W';
  $('#account-welcome-name').textContent = profile.name.trim() || (activeAccount?.email?.split('@')[0] || 'Мой кабинет');
  $('#local-current-password-label').hidden = !localAccountUser;
  $('#account-streak').textContent = `${getStudyStreak()} ${getStudyStreak() === 1 ? 'день' : 'дней'}`;
  const today = localDayKey();
  const todayMinutes = profile.activities.filter((activity) => activity.day === today).reduce((sum, activity) => sum + (Number(activity.minutes) || 0), 0);
  const dailyTarget = Number(profile.goal?.dailyMinutes) || 30;
  const examDate = profile.goal?.examDate ? new Date(`${profile.goal.examDate}T12:00:00`) : null;
  const remainingDays = examDate ? Math.max(0, Math.ceil((examDate - new Date()) / 86400000)) : null;
  const dueCount = profile.errors.filter((error) => error.question && new Date(error.dueAt) <= new Date()).length;
  const latestMock = profile.tests.find((test) => test.mode === 'mock');
  const scoreRange = latestMock?.scoreRange || (latestMock ? getScoreRange(latestMock.score) : '');
  const currentScore = scoreRange ? Number(scoreRange.split('–')[0]) : 0;
  const targetScore = Number(profile.goal?.targetScore) || 120;
  const goalProgress = Math.min(100, Math.round((currentScore / targetScore) * 100));
  const examDateLabel = profile.goal?.examDate ? new Date(`${profile.goal.examDate}T12:00:00`).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }) : 'дата не указана';
  $('#account-welcome-meta').textContent = `Цель ${targetScore} баллов · экзамен ${examDateLabel}`;
  $('#account-goal-overview').innerHTML = `<div class="account-goal-heading"><div><p class="eyebrow">ПРОГРЕСС К ЦЕЛИ</p><h2>${scoreRange ? escapeHtml(scoreRange) : '—'} <span>из ${targetScore}</span></h2></div><button class="account-edit-goal" id="account-edit-goal">Изменить цель ↗</button></div><div class="account-goal-track"><span style="width:${goalProgress}%"></span></div><div class="account-goal-foot"><span>${scoreRange ? `Осталось около ${Math.max(0, targetScore - currentScore)} баллов · ориентир пробного теста` : 'Пройди пробный тест, чтобы увидеть текущий ориентир.'}</span><span>${remainingDays === null ? '' : `До экзамена ${remainingDays} дн.`}</span></div>`;
  document.querySelectorAll('.account-checklist [data-exam-check]').forEach((input) => { input.checked = Boolean(profile.examChecklist[input.dataset.examCheck]); });
  const recentActivities = [
    ...profile.tests.map((test) => ({ date: test.date, title: test.review ? 'Повтор ошибок' : test.mode === 'diagnostic' ? 'Диагностика' : 'Пробный тест', detail: test.scoreRange || `${test.score}%`, kind: 'test' })),
    ...profile.lessons.map((lesson) => ({ date: lesson.date, title: lesson.title || lesson.skill || 'Урок', detail: lesson.skill || `${lesson.minutes} мин`, kind: 'lesson' })),
    ...profile.errors.filter((error) => error.lastReviewedAt).map((error) => ({ date: error.lastReviewedAt, title: 'Повтор ошибки', detail: error.taskType || 'Практика', kind: 'review' })),
  ].sort((left, right) => new Date(right.date) - new Date(left.date)).slice(0, 4);
  $('#account-activity-list').innerHTML = recentActivities.length ? recentActivities.map((activity) => `<article class="account-activity-item"><span class="activity-mark activity-${activity.kind}" aria-hidden="true">${activity.kind === 'test' ? '▣' : activity.kind === 'review' ? '⟳' : '↗'}</span><span>${escapeHtml(activity.title)}</span><strong>${escapeHtml(activity.detail)}</strong><small>${new Date(activity.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</small></article>`).join('') : '<p class="account-activity-empty">Заверши первое задание, и оно появится здесь.</p>';
  const reviewableErrors = profile.errors.filter((error) => error.question).sort((left, right) => new Date(left.dueAt) - new Date(right.dueAt));
  const dueErrors = reviewableErrors.filter((error) => new Date(error.dueAt) <= new Date());
  $('#account-error-practice').innerHTML = `<div class="account-section-heading"><div><p class="eyebrow">ПЕРСОНАЛЬНАЯ ПРАКТИКА</p><h2 id="account-error-title">Исправь свои ошибки</h2></div><span class="account-error-count">${dueErrors.length} к повтору</span></div>${reviewableErrors.length ? `<div class="account-error-list">${reviewableErrors.slice(0, 3).map((error) => {
    const due = new Date(error.dueAt) <= new Date();
    return `<article class="account-error-item"><div><span class="diary-type">${escapeHtml(error.taskType)}</span><span class="diary-due">${due ? 'Пора повторить' : `Повтор ${new Date(error.dueAt).toLocaleDateString('ru-RU')}`}</span><h3>${escapeHtml(error.question.prompt)}</h3><p>Твой ответ: ${escapeHtml(error.answer || 'Без ответа')}</p></div><button class="button button-outline" data-practice-account-error="${escapeHtml(error.id)}">Практиковать <span aria-hidden="true">→</span></button></article>`;
  }).join('')}</div><div class="account-error-actions"><button class="button button-primary" data-practice-due-errors ${dueErrors.length ? '' : 'disabled'}>Начать повтор${dueErrors.length ? ` · ${dueErrors.length}` : ''} <span aria-hidden="true">→</span></button><button class="text-button" data-account-destination="errors">Весь дневник ошибок</button></div>` : `<p class="account-error-empty">Ошибки из тестов и практики слов появятся здесь. Их можно будет повторить отдельно.</p><button class="text-button" data-account-destination="practice">Перейти к практике →</button>`}`;
  const latest = profile.tests[0];
  const bestScore = profile.tests.length ? Math.max(...profile.tests.map((test) => test.score)) : 0;
  $('#account-stats').innerHTML = `
    <article class="account-stat"><span>ПОПЫТКИ</span><strong>${profile.tests.length}</strong><small>пройдено тестов</small></article>
    <article class="account-stat"><span>ПОСЛЕДНИЙ ОРИЕНТИР</span><strong>${latest?.level || '—'}</strong><small>${latest ? new Date(latest.date).toLocaleDateString('ru-RU') : 'пройди первый тест'}</small></article>
    <article class="account-stat"><span>ЛУЧШИЙ РЕЗУЛЬТАТ</span><strong>${profile.tests.length ? `${bestScore}%` : '—'}</strong><small>точность ответов</small></article>
    <article class="account-stat"><span>МИКРОУРОКИ</span><strong>${profile.lessons.length}</strong><small>завершено</small></article>`;
  $('#history-list').innerHTML = profile.tests.length ? profile.tests.map((test, testIndex) => {
    const mistakeItems = (test.mistakeDetails || []).map((mistake, mistakeIndex) => {
      const question = mistake.question || questions[mistake.questionIndex];
      if (!question) return '';
      const expected = question.mode === 'speak' ? question.explanation : `${question.options?.[question.correct] || ''}. ${question.explanation || ''}`;
      return `<article class="history-mistake"><span>${String(mistakeIndex + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(question.prompt || 'Вопрос')}</strong><p>Твой ответ: ${escapeHtml(mistake.given || 'Без ответа')}</p><p class="mistake-answer">Подсказка: ${escapeHtml(expected)}</p></div></article>`;
    }).join('');
    return `<article class="history-entry"><div class="history-row"><span class="history-level">${escapeHtml(test.level || '—')}</span><div class="history-main"><strong>${new Date(test.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</strong><span>${escapeHtml(test.correct)}/${escapeHtml(test.total)} верных · ${escapeHtml(test.mistakes)} ошибок${test.review ? ' · повтор' : ''}</span></div><div class="history-score"><strong>${escapeHtml(test.score)}%</strong><span>точность</span></div></div>${mistakeItems ? `<details class="history-details"><summary>Открыть ошибки (${escapeHtml(test.mistakes)})</summary><div>${mistakeItems}</div><button class="history-review-button" data-review-history="${testIndex}">Проработать ошибки →</button></details>` : '<p class="history-no-details">Для этой попытки нет сохранённых вопросов.</p>'}</article>`;
  }).join('') : '<div class="account-empty"><span>01</span><p>История пока пустая. Пройди диагностику, и здесь появится твой прогресс.</p><button class="button button-primary" data-start-test>Пройти тест →</button></div>';
  const weakest = getWeakestSkill();
  const focus = $('#focus-panel');
  if (weakest) {
    const [skill, result] = weakest;
    const accuracy = Math.round((result.correct / result.total) * 100);
    const lessonId = getLessonForSkill(skill);
    focus.innerHTML = `<span class="focus-icon" aria-hidden="true">✳</span><p class="eyebrow">ПЕРСОНАЛЬНЫЙ ФОКУС</p><h2>Удели время<br><em>${skill.toLowerCase()}</em></h2><p>По истории ответов точность в этой области — ${accuracy}%. Несколько коротких повторений помогут закрепить навык.</p><div class="focus-meter"><span style="width:${accuracy}%"></span></div><button class="button button-dark" data-open-focus="${lessonId}">Начать урок <span aria-hidden="true">→</span></button>`;
  } else {
    focus.innerHTML = '<span class="focus-icon" aria-hidden="true">✳</span><p class="eyebrow">ПЕРСОНАЛЬНЫЙ ФОКУС</p><h2>Сначала узнаем<br><em>твою отправную точку</em></h2><p>Пройди тест, чтобы увидеть сильные стороны, заметить пробелы и получить подходящую практику.</p><button class="button button-primary" data-start-test>Начать диагностику →</button>';
  }
  $('#focus-panel [data-open-focus]')?.addEventListener('click', (event) => {
    showView('practice');
    openLesson(event.currentTarget.dataset.openFocus);
  });
  $('#history-list [data-start-test]')?.addEventListener('click', startTest);
  $('#history-list [data-review-history]')?.addEventListener('click', (event) => {
    const test = profile.tests[Number(event.currentTarget.dataset.reviewHistory)];
    if (test?.mistakeDetails?.length) startMistakeReview(test.mistakeDetails.map((item) => item.question).filter(Boolean));
  });
  $('#focus-panel [data-start-test]')?.addEventListener('click', startTest);
  refreshAccountSecurity();
}

async function refreshAccountSecurity() {
  const signedIn = Boolean(supabaseClient && accountUser);
  const anyAccount = Boolean(accountUser || localAccountUser);
  document.querySelectorAll('[data-security-requires-account]').forEach((button) => { button.disabled = !anyAccount; });
  $('#account-email-current').textContent = accountUser?.email ? `Сейчас: ${accountUser.email}` : localAccountUser?.email ? `Локальный адрес: ${localAccountUser.email}` : 'Войдите, чтобы изменить почту аккаунта.';
  $('#security-backend-note').textContent = !supabaseClient
    ? localAccountUser ? 'Локальные почта и пароль управляются только в этом браузере. Google и 2FA требуют Supabase.' : 'Настройки безопасности станут доступны после подключения Supabase.'
    : accountUser ? 'Изменения подтверждаются через защищённый Supabase Auth.' : 'Войдите в аккаунт, чтобы управлять способами входа.';
  $('#google-link-status').textContent = !accountUser
    ? 'Войдите, чтобы связать Google с аккаунтом.'
    : accountUser.identities?.some((identity) => identity.provider === 'google') ? 'Google уже связан с аккаунтом.' : 'Свяжите Google для дополнительного способа входа.';
  $('#link-google').disabled = !signedIn || Boolean(accountUser?.identities?.some((identity) => identity.provider === 'google'));
  $('#mfa-status').textContent = signedIn ? 'Проверяю настройки двухэтапной защиты…' : localAccountUser ? 'TOTP-защита появится после подключения облачного аккаунта.' : 'Для входа можно включить код из приложения-аутентификатора.';
  $('#enable-mfa').disabled = !signedIn;
  $('#disable-mfa').disabled = !signedIn;
  if (!signedIn) {
    $('#enable-mfa').hidden = false;
    $('#disable-mfa').hidden = true;
    state.accountMfaFactorId = null;
    return;
  }
  try {
    const { data, error } = await supabaseClient.auth.mfa.listFactors();
    if (error) throw error;
    const verifiedFactor = (data.totp || []).find((factor) => factor.status === 'verified');
    state.accountMfaFactorId = verifiedFactor?.id || null;
    $('#mfa-status').textContent = verifiedFactor
      ? 'Двухэтапная проверка включена. При следующем входе понадобится код из приложения.'
      : 'Добавь TOTP-код из приложения-аутентификатора, чтобы защитить вход.';
    $('#enable-mfa').hidden = Boolean(verifiedFactor);
    $('#disable-mfa').hidden = !verifiedFactor;
    $('#enable-mfa').disabled = Boolean(verifiedFactor);
    $('#disable-mfa').disabled = !verifiedFactor;
  } catch (error) {
    $('#mfa-status').textContent = error.message || 'Не удалось загрузить настройки 2FA.';
    $('#enable-mfa').disabled = true;
  }
}

async function establishAuthenticatedSession(user) {
  const { data: assurance, error: assuranceError } = await supabaseClient.auth.mfa.getAuthenticatorAssuranceLevel();
  if (assuranceError) throw assuranceError;
  if (assurance.nextLevel === 'aal2' && assurance.currentLevel !== 'aal2') {
    const { data: factors, error: factorsError } = await supabaseClient.auth.mfa.listFactors();
    if (factorsError) throw factorsError;
    const factor = (factors.totp || []).find((item) => item.status === 'verified');
    if (factor) {
      const { data: challenge, error: challengeError } = await supabaseClient.auth.mfa.challenge({ factorId: factor.id });
      if (challengeError) throw challengeError;
      state.pendingAuthUser = user;
      state.pendingMfaFactorId = factor.id;
      state.pendingMfaChallengeId = challenge.id;
      $('#auth-login-form').hidden = true;
      $('#login-mfa-form').hidden = false;
      if (state.view !== 'account') showView('account');
      $('#login-message').textContent = 'Введи одноразовый код из приложения, чтобы завершить вход.';
      $('#login-mfa-code').value = '';
      $('#login-mfa-code').focus();
      return false;
    }
  }
  state.pendingAuthUser = null;
  state.pendingMfaFactorId = null;
  state.pendingMfaChallengeId = null;
  await hydrateAccount(user);
  return true;
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const dark = theme === 'dark';
  $('#theme-icon').textContent = dark ? '☀' : '☾';
  $('#theme-toggle').setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
  $('#account-theme-toggle').textContent = dark ? '☀' : '☾';
  $('#account-theme-toggle').setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#141414' : '#f4f5ef';
}

async function startWordPractice(index) {
  const word = words[index];
  if (!word) return;
  if (word.source && !getDictionaryMeaning(word)) {
    $('#dictionary-source-status').textContent = `Запрашиваю русский перевод “${word.word}”…`;
    try { await translateDictionaryWord(word); } catch { /* The user can add a personal translation in step two. */ }
  }
  state.activeWordPractice = { word, step: 0, currentOptions: [], correctCount: 0, completed: 0, errorCount: 0, hasTranslationAtStart: Boolean(getDictionaryMeaning(word)) };
  renderWordPracticeStep();
  $('#word-practice-dialog').showModal();
}

function buildWordPracticeOptions(word, step) {
  const importedTranslation = word.source ? getDictionaryMeaning(word) : '';
  const posLabels = { noun: 'Существительное', adjective: 'Прилагательное', verb: 'Глагол', adverb: 'Наречие', other: 'Другая часть речи' };
  const sourcePOS = ['noun', 'adjective', 'verb', 'adverb'].find((part) => word.pos.toLowerCase().includes(part)) || 'other';
  const posOptions = () => shuffle(Object.keys(posLabels).map((part) => ({ text: posLabels[part], correct: part === sourcePOS })));
  if (step === 0) {
    if (word.source && !importedTranslation) return posOptions();
    if (word.source && importedTranslation) {
      const alternatives = shuffle(words.filter((item) => item.word !== word.word && item.level === word.level).map((item) => getDictionaryMeaning(item)).filter((meaning) => meaning && meaning !== importedTranslation)).slice(0, 3);
      return shuffle([{ text: importedTranslation, correct: true }, ...alternatives.map((text) => ({ text, correct: false }))]);
    }
    const distractors = shuffle(words.filter((item) => item.word !== word.word && item.level === word.level)).slice(0, 3).map((item) => ({ text: item.meaning, correct: false }));
    return shuffle([{ text: word.meaning, correct: true }, ...distractors]);
  }
  if (step === 1 && word.source && !importedTranslation) return [];
  if (step === 1 && word.source) return posOptions();
  const targetExample = word.example.replace(/<\/?strong>/g, '');
  const distractors = shuffle(words.filter((item) => item.word !== word.word && !item.example.replace(/<\/?strong>/g, '').toLowerCase().includes(word.word.toLowerCase()))).slice(0, 3).map((item) => ({ text: item.example.replace(/<\/?strong>/g, ''), correct: false }));
  return shuffle([{ text: targetExample, correct: true }, ...distractors]);
}

function renderWordPracticeStep() {
  const practice = state.activeWordPractice;
  if (!practice) return;
  const { word, step } = practice;
  const importedTranslation = word.source ? getDictionaryMeaning(word) : '';
  const isOpenSourceWithoutMeaning = Boolean(word.source && !importedTranslation);
  const isPersonalTranslation = isOpenSourceWithoutMeaning && step === 1;
  const isPartOfSpeechStep = Boolean(word.source && importedTranslation && step === 1);
  const posLabels = { noun: 'существительное', adjective: 'прилагательное', verb: 'глагол', adverb: 'наречие', other: 'другая часть речи' };
  const sourcePOS = ['noun', 'adjective', 'verb', 'adverb'].find((part) => word.pos.toLowerCase().includes(part)) || 'other';
  const isSentence = step === 2;
  const isFreeResponse = isSentence || isPersonalTranslation;
  $('#word-practice-title').textContent = word.word;
  $('#word-practice-step-label').textContent = `ШАГ ${step + 1} ИЗ 3 · ${word.level}`;
  $('#word-practice-progress-fill').style.width = `${Math.round(((step + 1) / 3) * 100)}%`;
  $('#word-practice-prompt').textContent = word.source
    ? step === 0 ? importedTranslation ? `Что означает “${word.word}”?` : `Какая часть речи у слова “${word.word}”?` : isPersonalTranslation ? `Как ты переведёшь “${word.word}”? Запиши свою заметку.` : isPartOfSpeechStep ? `Какая часть речи у слова “${word.word}”?` : `Составь своё предложение со словом “${word.word}”.`
    : step === 0 ? `Что значит “${word.word}”?` : step === 1 ? `Какое предложение показывает употребление “${word.word}”?` : `Составь своё предложение со словом “${word.word}”.`;
  $('#word-practice-response').hidden = !isFreeResponse;
  $('#word-practice-options').hidden = isFreeResponse;
  $('#word-practice-response').value = isPersonalTranslation ? (profile.wordNotes?.[word.word] || '') : '';
  $('#word-practice-feedback').hidden = true;
  $('#word-practice-feedback').textContent = '';
  $('#word-practice-check').hidden = false;
  $('#word-practice-next').hidden = true;
  if (isFreeResponse) {
    practice.currentOptions = [];
    $('#word-practice-response').placeholder = isPersonalTranslation ? 'Запиши русский перевод или подсказку для себя…' : `Write one sentence with ${word.word}…`;
  } else {
    practice.currentOptions = buildWordPracticeOptions(word, step);
    $('#word-practice-options').innerHTML = practice.currentOptions.map((option, index) => `<button class="word-practice-option" data-word-practice-option="${index}" aria-pressed="false">${escapeHtml(option.text)}</button>`).join('');
  }
}

function recordWordPracticeError(practice, prompt, given, expected, mode) {
  const id = `err-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const question = { type: 'Практика слова', mode, prompt, options: mode === 'choice' ? practice.currentOptions.map((option) => option.text) : [], correct: mode === 'choice' ? practice.currentOptions.findIndex((option) => option.correct) : undefined, explanation: mode === 'choice' ? '' : expected, wordPractice: mode === 'write', minWords: 4, requiredWords: [practice.word.word], errorRecordId: id };
  profile.errors.unshift({ id, taskType: `Словарь · ${practice.word.level}`, skill: 'Лексика', question, answer: given, interval: 0, dueAt: new Date(Date.now() + 86400000).toISOString(), createdAt: new Date().toISOString() });
  profile.errors = profile.errors.slice(0, 500);
  saveProfile();
}

async function checkWordPracticeAnswer() {
  const practice = state.activeWordPractice;
  if (!practice) return;
  const { word, step, currentOptions } = practice;
  let correct = false;
  let given = '';
  let expected = '';
  const importedTranslation = word.source ? getDictionaryMeaning(word) : '';
  const isOpenSourceWithoutMeaning = Boolean(word.source && !importedTranslation);
  const isPersonalTranslation = isOpenSourceWithoutMeaning && step === 1;
  const posLabels = { noun: 'существительное', adjective: 'прилагательное', verb: 'глагол', adverb: 'наречие', other: 'другая часть речи' };
  const sourcePOS = ['noun', 'adjective', 'verb', 'adverb'].find((part) => word.pos.toLowerCase().includes(part)) || 'other';
  if (step < 2) {
    if (isPersonalTranslation) {
      given = $('#word-practice-response').value.trim();
      if (given.length < 2) {
        showToast('Добавь перевод или личную подсказку к слову.');
        return;
      }
      profile.wordNotes[word.word] = given.slice(0, 180);
      await saveProfile();
      practice.completed += 1;
      $('#word-practice-feedback').textContent = 'Личная заметка сохранена. В открытом наборе нет эталонного русского перевода, поэтому этот ответ не оценивается.';
      $('#word-practice-feedback').hidden = false;
      $('#word-practice-check').hidden = true;
      $('#word-practice-next').hidden = false;
      $('#word-practice-next').textContent = 'Следующий шаг →';
      return;
    }
    const selected = $('.word-practice-option.is-selected');
    if (!selected) {
      showToast('Выбери вариант, чтобы проверить слово.');
      return;
    }
    const option = currentOptions[Number(selected.dataset.wordPracticeOption)];
    correct = option.correct;
    given = option.text;
    expected = word.source ? step === 0 ? importedTranslation || posLabels[sourcePOS] : posLabels[sourcePOS] : step === 0 ? word.meaning : word.example.replace(/<\/?strong>/g, '');
  } else {
    given = $('#word-practice-response').value.trim();
    const tokens = given.toLowerCase().match(/[a-z-]+/g) || [];
    correct = tokens.includes(word.word.toLowerCase()) && tokens.length >= 4;
    expected = word.example.replace(/<\/?strong>/g, '');
    if (tokens.length < 4) {
      showToast('Добавь короткий контекст и используй слово в предложении.');
      return;
    }
  }
  practice.completed += 1;
  if (correct) practice.correctCount += 1;
  else {
    practice.errorCount += 1;
    const prompt = step === 2 ? `Write a sentence with ${word.word}` : word.source ? importedTranslation ? step === 0 ? `Meaning of ${word.word}` : `Part of speech of ${word.word}` : `Part of speech of ${word.word}` : step === 0 ? `Meaning of ${word.word}` : `Use ${word.word} in context`;
    recordWordPracticeError(practice, prompt, given, `Expected: ${expected}`, step === 2 ? 'write' : 'choice');
  }
  $('#word-practice-feedback').innerHTML = correct ? `<strong>Верно.</strong> ${step === 2 ? `Хороший пример: ${escapeHtml(given)}` : `“${escapeHtml(word.word)}” — ${escapeHtml(expected)}`}` : `<strong>Почти.</strong> ${step === 2 ? `Попробуй так: ${escapeHtml(expected)}` : `Верный вариант: ${escapeHtml(expected)}`}`;
  $('#word-practice-feedback').hidden = false;
  $('#word-practice-check').hidden = true;
  $('#word-practice-next').hidden = false;
  $('#word-practice-next').textContent = step === 2 ? 'Завершить →' : 'Следующий шаг →';
}

async function advanceWordPractice() {
  const practice = state.activeWordPractice;
  if (!practice) return;
  if (practice.step < 2) {
    practice.step += 1;
    renderWordPracticeStep();
    return;
  }
  const weakSkill = getWeakestSkill()?.[0];
  if (practice.correctCount > 0 && ['Лексика', 'Literacy'].includes(weakSkill)) recordStudyActivity(5, 'targeted-word-practice');
  await saveProfile();
  $('#word-practice-dialog').close();
  state.activeWordPractice = null;
  renderDictionary();
  renderTodayDashboard();
  showToast(practice.errorCount ? `${wordPracticeFinishedMessage(practice)} Ошибки сохранены в дневнике.` : wordPracticeFinishedMessage(practice));
}

function wordPracticeFinishedMessage(practice) {
  const checkedSteps = practice.word.source && !practice.hasTranslationAtStart ? 2 : 3;
  return `Практика «${practice.word.word}» завершена: ${practice.completed} шага, ${practice.correctCount} из ${checkedSteps} проверяемых ответов верно.`;
}

function renderDictionary() {
  const search = $('#dictionary-search').value.trim().toLowerCase();
  const activeButton = $('.filter-chip.is-active');
  const selectedLevel = activeButton ? activeButton.dataset.filterLevel : 'all';
  const baseFiltered = words.filter((item) => {
    const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
    const matchesLetter = state.selectedLetter === 'all' || item.word[0].toLowerCase() === state.selectedLetter.toLowerCase();
    const matchesSearch = !search || `${item.word} ${getDictionaryMeaning(item)} ${item.meaning} ${item.pos} ${item.usage || ''}`.toLowerCase().includes(search);
    return matchesLevel && matchesLetter && matchesSearch;
  }).sort((left, right) => left.word.localeCompare(right.word));
  const categories = [
    ['all', 'Все'], ['noun', 'Существительные'], ['verb', 'Глаголы'], ['adjective', 'Прилагательные'], ['adverb', 'Наречия'], ['other', 'Другие'],
  ];
  const categoriesFor = (item) => {
    const pos = item.pos.toLowerCase();
    const matches = ['noun', 'verb', 'adjective', 'adverb'].filter((category) => pos.includes(category));
    return matches.length ? matches : ['other'];
  };
  $('#pos-filters').innerHTML = categories.map(([id, label]) => {
    const count = id === 'all' ? baseFiltered.length : baseFiltered.filter((item) => categoriesFor(item).includes(id)).length;
    return `<button class="pos-filter ${state.selectedPos === id ? 'is-active' : ''}" data-filter-pos="${id}" aria-pressed="${state.selectedPos === id}">${label}<span>${count}</span></button>`;
  }).join('');
  const filtered = baseFiltered.filter((item) => state.selectedPos === 'all' || categoriesFor(item).includes(state.selectedPos));
  const pageCount = Math.max(1, Math.ceil(filtered.length / state.dictionaryPageSize));
  state.dictionaryPage = Math.min(state.dictionaryPage, pageCount);
  const startIndex = (state.dictionaryPage - 1) * state.dictionaryPageSize;
  const pageWords = filtered.slice(startIndex, startIndex + state.dictionaryPageSize);
  $('#dictionary-count').textContent = filtered.length;
  if (words.some((item) => item.source === 'LexiCore-5000 v1.0.0')) {
    $('#dictionary-source-status').textContent = `В каталоге ${words.length.toLocaleString('ru-RU')} уникальных слов · LexiCore-5000 A1–C1 загружен · C2 — локальная подборка.`;
  }
  $('#dictionary-range').textContent = filtered.length ? `Показаны ${startIndex + 1}–${Math.min(startIndex + state.dictionaryPageSize, filtered.length)} из ${filtered.length} слов` : 'Нет слов по этим фильтрам';
  $('#dictionary-grid').classList.toggle('is-list', state.dictionaryView === 'list');
  $('#dictionary-grid').classList.toggle('is-cards', state.dictionaryView === 'cards');
  $('#dictionary-grid').innerHTML = pageWords.length ? pageWords.map((item) => `
    <article class="${state.dictionaryView === 'list' ? 'word-row' : 'word-card'}"><div class="word-card-top"><div><h2>${escapeHtml(item.word)}</h2><p class="word-pos">${escapeHtml(item.pos)}</p></div><div class="word-card-actions"><span class="word-level">${escapeHtml(item.level)}</span>${item.source ? '<span class="word-source-badge" title="LexiCore-5000 CC BY 4.0">LC</span>' : ''}<button class="word-help-button" data-word-help="${words.indexOf(item)}" aria-label="Как использовать слово ${escapeHtml(item.word)}" title="Пояснение и примеры">?</button></div></div><p class="word-meaning ${item.source ? 'is-machine-translation' : ''}" ${item.source ? `data-word-translation="${words.indexOf(item)}"` : ''}>${escapeHtml(getDictionaryMeaning(item) || (item.source ? 'Загружаю русский перевод…' : ''))}${item.source && getDictionaryMeaning(item) ? `<small class="translation-origin">${profile.wordNotes?.[item.word] ? 'моя заметка' : 'машинный перевод'}</small>` : ''}</p><p class="word-example">${item.example || (item.source ? 'В исходном наборе нет примера. Попробуй составить собственное предложение.' : '')}</p><div class="word-row-actions"><button class="word-practice-button" data-word-practice="${words.indexOf(item)}">Практика <span aria-hidden="true">→</span></button></div></article>`).join('') : '<div class="empty-state">Ничего не нашлось. Попробуй другой запрос.</div>';
  $('#word-pagination').innerHTML = pageCount > 1 ? `<button class="page-step" data-word-page="prev" ${state.dictionaryPage === 1 ? 'disabled' : ''}>← Назад</button><span>Страница ${state.dictionaryPage} из ${pageCount}</span><button class="page-step" data-word-page="next" ${state.dictionaryPage === pageCount ? 'disabled' : ''}>Дальше →</button>` : '';
  loadVisibleWordTranslations(pageWords);
}

function getDictionaryMeaning(item) {
  return item.meaning || profile.wordNotes?.[item.word] || wordTranslationCache[item.word] || '';
}

async function loadVisibleWordTranslations(pageWords) {
  const unresolved = pageWords.filter((item) => item.source && !getDictionaryMeaning(item));
  if (!unresolved.length) return;
  const status = $('#dictionary-source-status');
  status.textContent = `Получаю русские переводы для слов на этой странице… (${unresolved.length})`;
  for (let offset = 0; offset < unresolved.length; offset += 4) {
    const batch = unresolved.slice(offset, offset + 4);
    await Promise.allSettled(batch.map((item) => translateDictionaryWord(item)));
    batch.forEach((item) => {
      const target = $(`[data-word-translation="${words.indexOf(item)}"]`);
      if (!target) return;
      const meaning = getDictionaryMeaning(item);
      target.innerHTML = `${escapeHtml(meaning || 'Перевод не получен · добавь свой в практике')}${meaning ? `<small class="translation-origin">${profile.wordNotes?.[item.word] ? 'моя заметка' : 'машинный перевод'}</small>` : ''}`;
      target.classList.toggle('is-translation-unavailable', !meaning);
    });
  }
  status.textContent = `Открытый LexiCore-5000 A1–C1 · переводы машинные и могут содержать ошибки · ${words.length.toLocaleString('ru-RU')} слов в каталоге.`;
}

function getVerbForms(item) {
  if (item.forms) return item.forms;
  if (!item.pos.includes('verb')) return null;
  const irregular = { be: 'was / were', become: 'became', begin: 'began', break: 'broke', bring: 'brought', build: 'built', buy: 'bought', catch: 'caught', choose: 'chose', come: 'came', cost: 'cost', cut: 'cut', do: 'did', draw: 'drew', drink: 'drank', drive: 'drove', eat: 'ate', fall: 'fell', feel: 'felt', fight: 'fought', find: 'found', fly: 'flew', forget: 'forgot', get: 'got', give: 'gave', go: 'went', grow: 'grew', have: 'had', hear: 'heard', hold: 'held', keep: 'kept', know: 'knew', lead: 'led', learn: 'learned / learnt', leave: 'left', lend: 'lent', lose: 'lost', make: 'made', meet: 'met', pay: 'paid', put: 'put', read: 'read', ride: 'rode', rise: 'rose', run: 'ran', say: 'said', see: 'saw', sell: 'sold', send: 'sent', set: 'set', show: 'showed / shown', shut: 'shut', sit: 'sat', sleep: 'slept', speak: 'spoke', spend: 'spent', stand: 'stood', steal: 'stole', swim: 'swam', take: 'took', teach: 'taught', tell: 'told', think: 'thought', throw: 'threw', understand: 'understood', wear: 'wore', win: 'won', write: 'wrote' };
  const past = irregular[item.word] || (item.word.endsWith('e') ? `${item.word}d` : item.word.endsWith('y') ? `${item.word.slice(0, -1)}ied` : `${item.word}ed`);
  const thirdPerson = item.word.endsWith('y') ? `${item.word.slice(0, -1)}ies` : /(?:s|x|z|ch|sh|o)$/.test(item.word) ? `${item.word}es` : `${item.word}s`;
  return { past, present: `${item.word} / ${thirdPerson}`, future: `will ${item.word}` };
}

function getWordTimeExamples(item) {
  if (item.tenses) return item.tenses;
  if (!item.example && item.source) {
    return {
      Past: `Вчера ты встретил(а) слово “${item.word}” в английском тексте.`,
      Present: `Сейчас ты разбираешь слово “${item.word}” и сохраняешь собственный перевод.`,
      Future: `Завтра попробуй составить своё предложение со словом “${item.word}”.`,
    };
  }
  const example = item.example.replace(/<\/?strong>/g, '');
  return {
    Past: `Yesterday, I heard someone say: “${example}”`,
    Present: `In everyday conversation, I can say: “${example}”`,
    Future: `Next time, I will try this phrase: “${example}”`,
  };
}

async function openWordHelp(item) {
  if (!item) return;
  if (item.source && !getDictionaryMeaning(item)) {
    $('#word-dialog-title').textContent = item.word;
    $('#word-dialog-meaning').textContent = 'Загружаю русский перевод…';
    $('#word-dialog').showModal();
    try { await translateDictionaryWord(item); } catch { /* The source itself contains no translation. */ }
  }
  $('#word-dialog-title').textContent = item.word;
  $('#word-dialog-meta').textContent = item.pos;
  $('#word-dialog-level').textContent = item.level;
  $('#word-dialog-meaning').textContent = getDictionaryMeaning(item) || (item.source ? 'Открытый набор не содержит русского перевода. Добавь личную заметку через практику слова.' : 'Перевод пока не добавлен.');
  $('#word-dialog-usage').textContent = item.usage || (item.source ? `${profile.wordNotes?.[item.word] ? 'Это твоя личная заметка.' : wordTranslationCache[item.word] ? 'Русский перевод получен машинным способом; проверь его по контексту.' : 'LexiCore не предоставляет перевод или пример.'} Часть речи в исходном наборе может быть неточной.` : `Используй слово как ${item.pos}, когда нужно выразить значение «${item.meaning}». Сверяйся с примером и ситуацией.`);
  const forms = getVerbForms(item);
  $('#word-dialog-forms').hidden = !forms;
  $('#word-dialog-forms').innerHTML = forms ? Object.entries(forms).map(([tense, form]) => `<div><span>${{ past: 'PAST', present: 'PRESENT', future: 'FUTURE' }[tense]}</span><strong>${escapeHtml(form)}</strong></div>`).join('') : '';
  $('#word-dialog-tenses').innerHTML = Object.entries(getWordTimeExamples(item)).map(([tense, example]) => `<article><span>${escapeHtml(tense.toUpperCase())}</span><p>${escapeHtml(example)}</p></article>`).join('');
  $('#word-dialog').showModal();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

navButtons.forEach((button) => button.addEventListener('click', () => {
  const target = button.dataset.viewTarget;
  if (target === 'dictionary') renderDictionary();
  showView(target);
}));
startButtons.forEach((button) => button.addEventListener('click', () => startTest('mock')));
document.querySelectorAll('[data-start-mock]').forEach((button) => button.addEventListener('click', () => startTest('mock')));
document.querySelectorAll('[data-start-diagnostic]').forEach((button) => button.addEventListener('click', () => openGoalSetup(true)));
$('#goal-date').min = localDayKey();
$('#goal-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  profile.goal = {
    targetScore: Number($('#goal-score').value),
    examDate: $('#goal-date').value,
    dailyMinutes: Number($('#goal-daily-minutes').value),
    updatedAt: new Date().toISOString(),
  };
  await saveProfile();
  $('#goal-dialog').close();
  renderTodayDashboard();
  renderAccount();
  if (state.goalDialogStartsDiagnostic) startTest('diagnostic');
});
$('#goal-skip').addEventListener('click', () => {
  if (!profile.goal) profile.goal = { targetScore: 110, examDate: '', dailyMinutes: 30, updatedAt: new Date().toISOString() };
  $('#goal-dialog').close();
  saveProfile();
  renderTodayDashboard();
  renderAccount();
  if (state.goalDialogStartsDiagnostic) startTest('diagnostic');
});
$('#goal-dialog-close').addEventListener('click', () => $('#goal-dialog').close());
$('#edit-goal').addEventListener('click', () => openGoalSetup(false));
$('#today-task-action').addEventListener('click', () => {
  if ($('#today-task-action').dataset.errorId) startErrorReview($('#today-task-action').dataset.errorId);
  else if ($('#today-task-action').dataset.taskId) startDetTask($('#today-task-action').dataset.taskId);
  else openGoalSetup(true);
});
$('#account-goal-overview').addEventListener('click', (event) => {
  if (event.target.closest('#account-edit-goal')) {
    openGoalSetup(false);
    return;
  }
  const destination = event.target.closest('[data-account-destination]')?.dataset.accountDestination;
  if (destination) showView(destination);
});
$('#view-account').addEventListener('click', (event) => {
  const targetId = event.target.closest('[data-account-scroll]')?.dataset.accountScroll;
  if (targetId) document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#diary-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-error-filter]');
  if (!button) return;
  state.errorFilter = button.dataset.errorFilter;
  renderErrorDiary();
});
$('#test-history-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-review-test]');
  if (!button || button.disabled) return;
  const attempt = profile.tests[Number(button.dataset.reviewTest)];
  const questionsToReview = (attempt?.mistakeDetails || []).map((item) => item.question).filter(Boolean);
  if (questionsToReview.length) startMistakeReview(questionsToReview);
});
$('#voice-recordings-list').addEventListener('click', async (event) => {
  const playButton = event.target.closest('[data-voice-play]');
  const deleteButton = event.target.closest('[data-voice-delete]');
  const index = Number((playButton || deleteButton)?.dataset.voicePlay ?? deleteButton?.dataset.voiceDelete);
  const recording = profile.voiceRecordings?.[index];
  if (!recording) return;
  if (deleteButton) {
    if (!window.confirm('Удалить эту голосовую запись?')) return;
    try {
      await dataLayer.deleteVoiceRecording(recording, accountUser || localAccountUser);
      profile.voiceRecordings.splice(index, 1);
      await saveProfile();
      renderSettings();
    } catch (error) {
      showToast(error.message || 'Не удалось удалить голосовую запись.');
    }
    return;
  }
  if (playButton) {
    const audio = $(`[data-voice-player="${index}"]`);
    try {
      audio.src = await dataLayer.getVoiceSource(recording, accountUser || localAccountUser);
      audio.hidden = false;
      await audio.play();
    } catch (error) {
      showToast(error.message || 'Не удалось открыть голосовую запись.');
    }
  }
});
$('#diary-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-review-error]');
  if (button) startErrorReview(button.dataset.reviewError);
});
$('#account-error-practice').addEventListener('click', (event) => {
  const errorButton = event.target.closest('[data-practice-account-error]');
  if (errorButton) { startErrorReview(errorButton.dataset.practiceAccountError); return; }
  const destination = event.target.closest('[data-account-destination]')?.dataset.accountDestination;
  if (destination) { showView(destination); return; }
  if (!event.target.closest('[data-practice-due-errors]')) return;
  const dueErrors = profile.errors.filter((error) => error.question && new Date(error.dueAt) <= new Date()).sort((left, right) => new Date(left.dueAt) - new Date(right.dueAt));
  if (dueErrors.length) startMistakeReview(dueErrors.map((error) => error.question), dueErrors.map((error) => error.id));
});
$('#freeze-streak').addEventListener('click', async () => {
  if (profile.streakFreezeUsed || getStudyStreak() === 0) {
    showToast('Сначала поработай над слабым местом. Затем можно будет сохранить серию на один день.');
    return;
  }
  profile.streakFreezeDate = localDayKey();
  profile.streakFreezeUsed = true;
  await saveProfile();
  renderTodayDashboard();
  showToast('Сегодняшняя серия заморожена. Возвращайся к практике, когда будет удобно.');
});
$('#reminder-time').addEventListener('change', async () => {
  profile.reminderTime = $('#reminder-time').value || '18:00';
  await saveProfile();
});
$('#toggle-reminder').addEventListener('click', async () => {
  if (!('Notification' in window)) {
    showToast('Браузер не поддерживает уведомления. План и серия работают без них.');
    return;
  }
  if (profile.reminderEnabled) {
    profile.reminderEnabled = false;
  } else {
    const permission = Notification.permission === 'granted' ? 'granted' : await Notification.requestPermission();
    if (permission !== 'granted') {
      $('#reminder-status').textContent = 'Разрешение не выдано. Практика и план остаются доступны без уведомлений.';
      return;
    }
    profile.reminderEnabled = true;
    profile.lastReminderDate = null;
  }
  await saveProfile();
  renderTodayDashboard();
  checkStudyReminder();
});
$('#settings-daily-minutes').addEventListener('change', async () => {
  profile.goal ||= { targetScore: 110, examDate: '', dailyMinutes: 30, updatedAt: new Date().toISOString() };
  profile.goal.dailyMinutes = Number($('#settings-daily-minutes').value) || 30;
  profile.goal.updatedAt = new Date().toISOString();
  await saveProfile();
  renderTodayDashboard();
  renderAccount();
  $('#settings-preference-status').textContent = 'Дневной план обновлён.';
});
$('#settings-reminder-time').addEventListener('change', async () => {
  profile.reminderTime = $('#settings-reminder-time').value || '18:00';
  await saveProfile();
  $('#reminder-time').value = profile.reminderTime;
  $('#settings-preference-status').textContent = 'Время напоминания сохранено.';
});
$('#settings-reminder-enabled').addEventListener('change', async () => {
  if ($('#settings-reminder-enabled').checked) {
    if (!('Notification' in window)) {
      $('#settings-reminder-enabled').checked = false;
      $('#settings-preference-status').textContent = 'Браузер не поддерживает уведомления.';
      return;
    }
    const permission = Notification.permission === 'granted' ? 'granted' : await Notification.requestPermission();
    if (permission !== 'granted') {
      $('#settings-reminder-enabled').checked = false;
      $('#settings-preference-status').textContent = 'Разреши уведомления в браузере, чтобы включить напоминание.';
      return;
    }
    profile.lastReminderDate = null;
  }
  profile.reminderEnabled = $('#settings-reminder-enabled').checked;
  await saveProfile();
  renderTodayDashboard();
  $('#settings-preference-status').textContent = profile.reminderEnabled ? 'Напоминания включены.' : 'Напоминания выключены.';
});
$('#settings-dark-theme').addEventListener('change', () => {
  const theme = $('#settings-dark-theme').checked ? 'dark' : 'light';
  applyTheme(theme);
  try { localStorage.setItem(themeStorageKey, theme); } catch { /* Theme stays active for this page load. */ }
});
$('#settings-freeze-streak').addEventListener('click', async () => {
  if (profile.streakFreezeUsed || getStudyStreak() === 0) {
    $('#settings-preference-status').textContent = 'Сначала выполни учебный план; серия появится после практики.';
    return;
  }
  profile.streakFreezeDate = localDayKey();
  profile.streakFreezeUsed = true;
  await saveProfile();
  renderSettings();
  renderTodayDashboard();
  $('#settings-preference-status').textContent = 'Серия сохранена на один день.';
});
$('#det-task-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-det-task]');
  if (button) startDetTask(button.dataset.detTask);
});
$('#view-scales').addEventListener('change', async (event) => {
  const input = event.target.closest('[data-exam-check]');
  if (!input) return;
  profile.examChecklist[input.dataset.examCheck] = input.checked;
  await saveProfile();
});
$('#view-account').addEventListener('change', async (event) => {
  const input = event.target.closest('[data-exam-check]');
  if (!input) return;
  profile.examChecklist[input.dataset.examCheck] = input.checked;
  await saveProfile();
});
$('#check-devices').addEventListener('click', checkDevicePermissions);
$('#stop-device-check').addEventListener('click', () => {
  stopDeviceCheck();
  $('#device-status').textContent = 'Проверка остановлена; поток камеры и микрофона закрыт.';
});
$('#start-walkthrough').onclick = startWalkthrough;
$('#university-search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  searchUniversityRequirements($('#university-name').value);
});
$('#next-question').addEventListener('click', advanceQuestion);
$('#previous-question').addEventListener('click', () => {
  if (state.index > 0 && !state.reviewRevealed) { state.index -= 1; renderQuestion(); }
});
$('#retry-mistakes').addEventListener('click', () => startMistakeReview());
$('#lesson-submit').addEventListener('click', checkLessonAnswer);
$('#lesson-finish').addEventListener('click', advanceLesson);
$('#lesson-back').addEventListener('click', () => {
  clearInterval(state.lessonTimerId);
  state.activeLesson = null;
  $('#duration-planner').hidden = false;
  $('#lesson-room').hidden = true;
  $('#lesson-grid').hidden = false;
  renderPractice();
});
$('#dictionary-search').addEventListener('input', () => { state.dictionaryPage = 1; renderDictionary(); });
$('#pos-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter-pos]');
  if (!button) return;
  state.selectedPos = button.dataset.filterPos;
  state.dictionaryPage = 1;
  renderDictionary();
});
document.querySelectorAll('[data-dictionary-view]').forEach((button) => button.addEventListener('click', () => {
  state.dictionaryView = button.dataset.dictionaryView;
  document.querySelectorAll('[data-dictionary-view]').forEach((viewButton) => {
    const active = viewButton === button;
    viewButton.classList.toggle('is-active', active);
    viewButton.setAttribute('aria-pressed', String(active));
  });
  renderDictionary();
}));
$('#word-pagination').addEventListener('click', (event) => {
  const button = event.target.closest('[data-word-page]');
  if (!button || button.disabled) return;
  state.dictionaryPage += button.dataset.wordPage === 'next' ? 1 : -1;
  renderDictionary();
  $('#dictionary-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#alphabet-index').innerHTML = `<button class="alphabet-chip is-active" data-filter-letter="all" aria-pressed="true">Все</button>${[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => `<button class="alphabet-chip" data-filter-letter="${letter}" aria-pressed="false">${letter}</button>`).join('')}`;
$('#alphabet-index').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter-letter]');
  if (!button) return;
  state.selectedLetter = button.dataset.filterLetter.toLowerCase();
  state.dictionaryPage = 1;
  document.querySelectorAll('[data-filter-letter]').forEach((chip) => {
    const active = chip === button;
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  renderDictionary();
});
$('#dictionary-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-word-help]');
  if (button) { openWordHelp(words[Number(button.dataset.wordHelp)]); return; }
  const practiceButton = event.target.closest('[data-word-practice]');
  if (practiceButton) startWordPractice(Number(practiceButton.dataset.wordPractice));
});
$('#word-practice-options').addEventListener('click', (event) => {
  const button = event.target.closest('[data-word-practice-option]');
  if (!button) return;
  document.querySelectorAll('[data-word-practice-option]').forEach((option) => {
    const selected = option === button;
    option.classList.toggle('is-selected', selected);
    option.setAttribute('aria-pressed', String(selected));
  });
});
$('#word-practice-check').addEventListener('click', checkWordPracticeAnswer);
$('#word-practice-next').addEventListener('click', advanceWordPractice);
$('#word-practice-close').addEventListener('click', () => {
  $('#word-practice-dialog').close();
  state.activeWordPractice = null;
});
$('#word-practice-dialog').addEventListener('click', (event) => {
  if (event.target === $('#word-practice-dialog')) {
    $('#word-practice-dialog').close();
    state.activeWordPractice = null;
  }
});
$('#word-dialog-close').addEventListener('click', () => $('#word-dialog').close());
$('#word-dialog').addEventListener('click', (event) => {
  if (event.target === $('#word-dialog')) $('#word-dialog').close();
});
const lessonDurations = [15, 20, 25, 30, 45, 60];
$('#lesson-duration-options').innerHTML = lessonDurations.map((minutes) => `<button class="duration-option ${minutes === state.lessonMinutes ? 'is-active' : ''}" data-lesson-minutes="${minutes}" aria-pressed="${minutes === state.lessonMinutes}"><strong>${minutes}</strong><span>мин</span></button>`).join('');
$('#lesson-duration-options').addEventListener('click', (event) => {
  const button = event.target.closest('[data-lesson-minutes]');
  if (!button) return;
  state.lessonMinutes = Number(button.dataset.lessonMinutes);
  $('#lesson-plan-summary').textContent = `${getLessonQuestionCount(state.lessonMinutes)} упражнений · примерно ${state.lessonMinutes} минут`;
  document.querySelectorAll('[data-lesson-minutes]').forEach((option) => {
    const active = option === button;
    option.classList.toggle('is-active', active);
    option.setAttribute('aria-pressed', String(active));
  });
  renderPractice();
});
$('#level-filters').innerHTML = `<button class="filter-chip is-active" data-filter-level="all">Все</button>${levels.map((level) => `<button class="filter-chip" data-filter-level="${level}">${level}</button>`).join('')}`;
$('#level-filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter-level]');
  if (!button) return;
  state.dictionaryPage = 1;
  document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.toggle('is-active', chip === button));
  renderDictionary();
});
$('#scale-rows').innerHTML = examRows.map((row) => `<tr>${row.map((value, index) => `<td>${index === 0 ? `<span class="level-pill">${value}</span>` : value}</td>`).join('')}</tr>`).join('');
$('#current-year').textContent = new Date().getFullYear();
async function handleAuthSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const register = form.dataset.authMode === 'register';
  const message = form.querySelector('.auth-message');
  const email = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value;
  const emailError = $(`#${register ? 'register' : 'login'}-email-error`);
  const passwordError = $(`#${register ? 'register' : 'login'}-password-error`);
  emailError.textContent = '';
  passwordError.textContent = '';
  message.textContent = '';
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = 'Введите корректный адрес почты.';
    form.querySelector('input[type="email"]').focus();
    return;
  }
  if (password.length < 8) {
    passwordError.textContent = 'Пароль должен содержать минимум 8 символов.';
    form.querySelector('input[type="password"]').focus();
    return;
  }
  if (register && !$('#auth-consent').checked) {
    message.textContent = 'Подтверди согласие на хранение прогресса в аккаунте.';
    return;
  }
  const submit = form.querySelector('button[type="submit"]');
  submit.disabled = true;
  message.textContent = register ? 'Создаю аккаунт…' : 'Выполняю вход…';
  try {
    if (!supabaseClient) {
      if (register) {
        localAccountUser = await dataLayer.registerLocalAccount(email, password, $('#auth-name').value, profile);
        profile = normalizeProfile(dataLayer.loadLocalProfile(localAccountUser));
      } else {
        localAccountUser = await dataLayer.signInLocalAccount(email, password);
        profile = normalizeProfile(dataLayer.loadLocalProfile(localAccountUser));
      }
      accountUser = null;
      form.reset();
      renderAccount();
      renderTodayDashboard();
      showToast(register ? 'Аккаунт создан. Результаты диагностики сохранены в нём.' : 'Вход выполнен. Твой профиль открыт.');
      return;
    }
    const result = register
      ? await supabaseClient.auth.signUp({ email, password, options: { data: { display_name: $('#auth-name').value.trim().slice(0, 32) } } })
      : await supabaseClient.auth.signInWithPassword({ email, password });
    if (result.error) throw result.error;
    if (result.data.session?.user) {
      const authenticated = register
        ? (await hydrateAccount(result.data.session.user), true)
        : await establishAuthenticatedSession(result.data.session.user);
      if (!authenticated) return;
      form.reset();
      message.textContent = 'Аккаунт подключён, прогресс синхронизирован.';
    } else {
      message.textContent = 'Аккаунт создан. Подтверди адрес по письму, затем войди.';
    }
  } catch (error) {
    const detail = error.message || 'Не удалось выполнить запрос. Проверь настройки Supabase.';
    if (/почт|email|already registered/i.test(detail)) emailError.textContent = detail;
    else passwordError.textContent = detail;
    message.textContent = detail;
  } finally {
    submit.disabled = false;
  }
}

document.querySelectorAll('[data-auth-mode]').forEach((form) => form.addEventListener('submit', handleAuthSubmit));
document.querySelectorAll('[data-auth-google]').forEach((button) => button.addEventListener('click', async () => {
  if (!supabaseClient) {
    const message = button.closest('.auth-panel')?.querySelector('.auth-message') || $('#login-message');
    message.textContent = 'Вход через Google подключается на этапе 2. Создай локальный аккаунт по почте или продолжай как гость.';
    return;
  }
  button.disabled = true;
  try {
    const { error } = await supabaseClient.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.href } });
    if (error) throw error;
  } catch (error) {
    $('#login-message').textContent = error.message || 'Не удалось войти через Google. Проверь настройки провайдера в Supabase.';
    button.disabled = false;
  }
}));

$('#auth-forgot').addEventListener('click', async () => {
  $('#forgot-password-email').value = $('#login-email').value.trim();
  $('#forgot-password-error').textContent = '';
  $('#forgot-password-message').textContent = '';
  $('#forgot-password-dialog').showModal();
  $('#forgot-password-email').focus();
});

$('#forgot-password-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = $('#forgot-password-email').value.trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    $('#forgot-password-error').textContent = 'Введите корректный адрес почты.';
    $('#forgot-password-email').focus();
    return;
  }
  if (!supabaseClient) {
    $('#forgot-password-message').textContent = 'Для локального аккаунта email не отправляется. Настрой Supabase, чтобы включить восстановление по ссылке.';
    return;
  }
  const submit = event.currentTarget.querySelector('button[type="submit"]');
  submit.disabled = true;
  $('#forgot-password-message').textContent = 'Отправляю ссылку…';
  try {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: window.location.href });
    if (error) throw error;
    $('#forgot-password-message').textContent = 'Если аккаунт с этой почтой существует, инструкция уже отправлена.';
  } catch (error) {
    $('#forgot-password-message').textContent = error.message || 'Не удалось отправить письмо. Попробуйте ещё раз.';
  } finally {
    submit.disabled = false;
  }
});
$('#forgot-password-close').addEventListener('click', () => $('#forgot-password-dialog').close());
$('#forgot-password-cancel').addEventListener('click', () => $('#forgot-password-dialog').close());
$('#forgot-password-dialog').addEventListener('click', (event) => { if (event.target === $('#forgot-password-dialog')) $('#forgot-password-dialog').close(); });

$('#password-recovery-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const password = $('#recovery-password').value;
  if (password !== $('#recovery-password-confirm').value) {
    $('#login-message').textContent = 'Пароли не совпадают.';
    return;
  }
  const button = event.currentTarget.querySelector('button[type="submit"]');
  button.disabled = true;
  $('#login-message').textContent = 'Сохраняю новый пароль…';
  try {
    const { data, error } = await supabaseClient.auth.updateUser({ password });
    if (error) throw error;
    event.currentTarget.reset();
    await establishAuthenticatedSession(data.user);
    $('#login-message').textContent = 'Пароль обновлён. Аккаунт открыт.';
  } catch (error) {
    $('#login-message').textContent = error.message || 'Не удалось обновить пароль.';
  } finally {
    button.disabled = false;
  }
});

$('#cancel-password-recovery').addEventListener('click', async () => {
  if (supabaseClient) await supabaseClient.auth.signOut();
  $('#password-recovery-form').reset();
  $('#password-recovery-form').hidden = true;
  $('#auth-login-form').hidden = false;
  $('#login-message').textContent = 'Войдите с новым паролем.';
});

if (supabaseClient) {
  supabaseClient.auth.onAuthStateChange((event) => {
    if (event !== 'PASSWORD_RECOVERY') return;
    window.setTimeout(() => {
      if (state.view !== 'account') showView('account');
      $('#account-auth').hidden = false;
      $('#auth-login-form').hidden = true;
      $('#login-mfa-form').hidden = true;
      $('#password-recovery-form').hidden = false;
      $('#login-message').textContent = 'Задай новый пароль для аккаунта.';
      $('#recovery-password').focus();
    }, 0);
  });
}

$('#login-mfa-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!state.pendingMfaFactorId || !state.pendingMfaChallengeId || !state.pendingAuthUser) return;
  const button = event.currentTarget.querySelector('button[type="submit"]');
  button.disabled = true;
  $('#login-message').textContent = 'Проверяю одноразовый код…';
  try {
    const { error } = await supabaseClient.auth.mfa.verify({
      factorId: state.pendingMfaFactorId,
      challengeId: state.pendingMfaChallengeId,
      code: $('#login-mfa-code').value.trim(),
    });
    if (error) throw error;
    await hydrateAccount(state.pendingAuthUser);
    event.currentTarget.reset();
  } catch (error) {
    $('#login-message').textContent = error.message || 'Код не принят. Проверь время на устройстве и попробуй ещё раз.';
  } finally {
    button.disabled = false;
  }
});

$('#cancel-login-mfa').addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  state.pendingAuthUser = null;
  state.pendingMfaFactorId = null;
  state.pendingMfaChallengeId = null;
  $('#login-mfa-form').reset();
  $('#login-mfa-form').hidden = true;
  $('#auth-login-form').hidden = false;
  $('#login-message').textContent = 'Вход отменён.';
});

$('#change-email-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = $('#change-email-message');
  if (localAccountUser) {
    try {
      localAccountUser = dataLayer.updateLocalAccount(localAccountUser.id, { email: $('#account-new-email').value });
      message.textContent = 'Почта локального профиля изменена.';
      renderAccount();
    } catch (error) { message.textContent = error.message; }
    return;
  }
  if (!supabaseClient || !accountUser) { message.textContent = 'Сначала войди в аккаунт.'; return; }
  const email = $('#account-new-email').value.trim();
  if (email.toLowerCase() === accountUser.email?.toLowerCase()) { message.textContent = 'Это уже адрес аккаунта.'; return; }
  const submit = event.currentTarget.querySelector('button[type="submit"]');
  submit.disabled = true;
  message.textContent = 'Отправляю письмо для подтверждения нового адреса…';
  try {
    const { error } = await supabaseClient.auth.updateUser({ email });
    if (error) throw error;
    message.textContent = 'Проверь почту и подтверди новый адрес. До подтверждения аккаунт остаётся на прежней почте.';
  } catch (error) {
    message.textContent = error.message || 'Не удалось изменить почту.';
  } finally {
    submit.disabled = false;
  }
});

$('#change-password-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = $('#change-password-message');
  const password = $('#account-new-password').value;
  if (password !== $('#account-confirm-password').value) { message.textContent = 'Пароли не совпадают.'; return; }
  if (localAccountUser) {
    try {
      await dataLayer.changeLocalPassword(localAccountUser.id, $('#account-current-password').value, password);
      event.currentTarget.reset();
      message.textContent = 'Пароль локального аккаунта изменён.';
    } catch (error) { message.textContent = error.message; }
    return;
  }
  if (!supabaseClient || !accountUser) { message.textContent = 'Сначала войди в аккаунт.'; return; }
  const submit = event.currentTarget.querySelector('button[type="submit"]');
  submit.disabled = true;
  message.textContent = 'Обновляю пароль…';
  try {
    const { error } = await supabaseClient.auth.updateUser({ password });
    if (error) throw error;
    event.currentTarget.reset();
    message.textContent = 'Пароль изменён.';
  } catch (error) {
    message.textContent = error.message || 'Не удалось изменить пароль.';
  } finally {
    submit.disabled = false;
  }
});

$('#link-google').addEventListener('click', async () => {
  if (!supabaseClient || !accountUser) return;
  $('#google-link-message').textContent = 'Открываю страницу Google…';
  $('#link-google').disabled = true;
  try {
    const { error } = await supabaseClient.auth.linkIdentity({ provider: 'google', options: { redirectTo: window.location.href } });
    if (error) throw error;
  } catch (error) {
    $('#google-link-message').textContent = error.message || 'Не удалось связать Google. Проверь настройки провайдера.';
    $('#link-google').disabled = false;
  }
});

$('#enable-mfa').addEventListener('click', async () => {
  if (!supabaseClient || !accountUser) return;
  $('#enable-mfa').disabled = true;
  $('#mfa-message').textContent = 'Создаю секрет для приложения-аутентификатора…';
  try {
    const { data, error } = await supabaseClient.auth.mfa.enroll({ factorType: 'totp', friendlyName: 'Wordwise authenticator' });
    if (error) throw error;
    state.accountMfaFactorId = data.id;
    $('#mfa-qr-code').src = data.totp.qr_code;
    $('#mfa-qr-code').hidden = false;
    $('#mfa-secret').value = data.totp.secret;
    $('#mfa-setup-panel').hidden = false;
    $('#mfa-message').textContent = 'Открой authenticator на телефоне, отсканируй QR-код и введи текущий код.';
    $('#mfa-setup-code').focus();
  } catch (error) {
    $('#mfa-message').textContent = error.message || 'Не удалось начать настройку 2FA.';
    $('#enable-mfa').disabled = false;
  }
});

$('#mfa-verify-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!state.accountMfaFactorId || !supabaseClient) return;
  const button = event.currentTarget.querySelector('button[type="submit"]');
  button.disabled = true;
  $('#mfa-message').textContent = 'Проверяю код…';
  try {
    const { data: challenge, error: challengeError } = await supabaseClient.auth.mfa.challenge({ factorId: state.accountMfaFactorId });
    if (challengeError) throw challengeError;
    const { error } = await supabaseClient.auth.mfa.verify({ factorId: state.accountMfaFactorId, challengeId: challenge.id, code: $('#mfa-setup-code').value.trim() });
    if (error) throw error;
    $('#mfa-setup-panel').hidden = true;
    $('#mfa-qr-code').removeAttribute('src');
    event.currentTarget.reset();
    $('#mfa-message').textContent = 'Двухэтапная проверка включена. При следующем входе понадобится код.';
    await refreshAccountSecurity();
  } catch (error) {
    $('#mfa-message').textContent = error.message || 'Код не принят. Попробуй ещё раз.';
  } finally {
    button.disabled = false;
  }
});

$('#disable-mfa').addEventListener('click', async () => {
  if (!supabaseClient || !state.accountMfaFactorId || !window.confirm('Отключить двухэтапную проверку для этого аккаунта?')) return;
  $('#disable-mfa').disabled = true;
  try {
    const { error } = await supabaseClient.auth.mfa.unenroll({ factorId: state.accountMfaFactorId });
    if (error) throw error;
    $('#mfa-message').textContent = 'Двухэтапная проверка отключена.';
    await refreshAccountSecurity();
  } catch (error) {
    $('#mfa-message').textContent = error.message || 'Не удалось отключить 2FA.';
    $('#disable-mfa').disabled = false;
  }
});

$('#auth-logout').addEventListener('click', async () => {
  try {
    if (accountUser && supabaseClient) {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      try { localStorage.removeItem(dataLayer.profileKey(accountUser)); } catch { /* Cloud profile is already closed. */ }
    } else if (localAccountUser) {
      dataLayer.signOutLocal();
    }
  } catch (error) {
    showToast(error.message || 'Не удалось завершить сессию. Попробуй ещё раз.');
    return;
  }
  accountUser = null;
  localAccountUser = dataLayer?.getLocalSession() || null;
  profile = normalizeProfile(dataLayer?.loadLocalProfile(localAccountUser) || {});
  renderAccount();
  renderTodayDashboard();
  showToast('Ты вышел из аккаунта.');
});

$('#profile-name').addEventListener('input', () => {
  profile.name = $('#profile-name').value.trim();
  $('#profile-monogram').textContent = profile.name.charAt(0).toUpperCase() || 'W';
  $('#account-welcome-name').textContent = profile.name || ((accountUser || localAccountUser)?.email?.split('@')[0] || 'Мой кабинет');
  $('#profile-save-status').textContent = 'Сохраняю…';
  clearTimeout($('#profile-name').saveTimeout);
  $('#profile-name').saveTimeout = setTimeout(() => {
    saveProfile();
    $('#profile-save-status').textContent = 'Сохранено';
  }, 300);
});
$('#clear-history').addEventListener('click', async () => {
  if (!profile.tests.length && !profile.lessons.length && !profile.errors.length) return;
  if (!window.confirm('Удалить историю тестов, уроков и дневник ошибок с этого устройства?')) return;
  profile.tests = [];
  profile.lessons = [];
  profile.errors = [];
  profile.activities = [];
  profile.streakFreezeDate = null;
  profile.streakFreezeUsed = false;
  await dataLayer?.clearHistory(accountUser);
  await saveProfile();
  renderAccount();
  renderTodayDashboard();
  renderErrorDiary();
});
$('#download-my-data').addEventListener('click', async () => {
  const button = $('#download-my-data');
  const message = $('#account-data-message');
  button.disabled = true;
  message.textContent = 'Готовлю экспорт…';
  try {
    const payload = await dataLayer.exportData(profile, accountUser || localAccountUser);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wordwise-data-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    message.textContent = 'Экспорт JSON скачан.';
  } catch (error) {
    message.textContent = error.message || 'Не удалось подготовить экспорт.';
  } finally {
    button.disabled = false;
  }
});
$('#delete-account-data').addEventListener('click', () => $('#delete-account-dialog').showModal());
$('#delete-account-close').addEventListener('click', () => $('#delete-account-dialog').close());
$('#cancel-delete-account').addEventListener('click', () => $('#delete-account-dialog').close());
$('#delete-account-dialog').addEventListener('click', (event) => { if (event.target === $('#delete-account-dialog')) $('#delete-account-dialog').close(); });
$('#confirm-delete-account').addEventListener('click', async () => {
  const button = $('#confirm-delete-account');
  const user = accountUser || localAccountUser;
  button.disabled = true;
  $('#account-data-message').textContent = 'Удаляю профиль и связанные данные…';
  try {
    await dataLayer.deleteAccount(user, profile);
    accountUser = null;
    localAccountUser = null;
    profile = normalizeProfile({});
    $('#delete-account-dialog').close();
    renderAccount();
    renderTodayDashboard();
    renderErrorDiary();
    $('#account-data-message').textContent = 'Профиль и данные удалены.';
    showToast('Профиль и данные удалены.');
  } catch (error) {
    $('#account-data-message').textContent = error.message || 'Не удалось удалить профиль. Проверь подключение и попробуй ещё раз.';
  } finally {
    button.disabled = false;
  }
});
$('#ai-review-optin').addEventListener('change', async () => {
  if (!supabaseClient || !accountUser) {
    $('#ai-review-optin').checked = false;
    showToast('AI-разбор требует аккаунт и настройку Supabase.');
    return;
  }
  profile.aiReviewEnabled = $('#ai-review-optin').checked;
  await saveProfile();
  showToast(profile.aiReviewEnabled ? 'AI-разбор включён. Ответы будут отправляться защищённой функции после теста.' : 'AI-разбор выключен. Доступна только локальная рубрика.');
});
$('#theme-toggle').addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try { localStorage.setItem(themeStorageKey, nextTheme); } catch { showToast('Тема изменится, но браузер не смог запомнить выбор.'); }
});
$('#account-theme-toggle').addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try { localStorage.setItem(themeStorageKey, nextTheme); } catch { showToast('Тема изменится, но браузер не смог запомнить выбор.'); }
});
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem(themeStorageKey) || 'dark'; } catch { /* Storage may be disabled. */ }
applyTheme(savedTheme);
renderDictionary();
renderTodayDashboard();
renderDetTaskGrid();
renderExamReadiness();
renderAccount();
routeFromAddress();
restoreAccountSession();
checkStudyReminder();
setInterval(checkStudyReminder, 60000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) checkStudyReminder();
});

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-revealed');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }) : null;
if (revealObserver) {
  document.body.classList.add('has-reveal');
  document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
}

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && state.view === 'dictionary' && document.activeElement.tagName !== 'INPUT') {
    event.preventDefault();
    $('#dictionary-search').focus();
  }
  if (state.view !== 'quiz') return;
  if (['1', '2', '3', '4'].includes(event.key)) {
    document.querySelector(`[data-answer="${Number(event.key) - 1}"]`)?.click();
  }
  if (event.key === 'ArrowLeft' && state.index > 0) $('#previous-question').click();
  if (event.key === 'ArrowRight') $('#next-question').click();
});