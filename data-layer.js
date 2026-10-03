(function attachWordwiseDataLayer() {
  const profileBaseKey = 'wordwise.profile.v1';
  const accountsKey = 'wordwise.accounts.v1';
  const localSessionKey = 'wordwise.local-session.v1';
  const voiceDatabaseName = 'wordwise-local-voice';
  const voiceBucket = 'voice-recordings';
  const passwordIterations = 120000;
  let supabaseClient = null;

  function randomId() {
    return globalThis.crypto?.randomUUID?.() || `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  function readJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function profileKey(user = null) {
    if (!user) return profileBaseKey;
    return `${profileBaseKey}.user.${user.id}`;
  }

  function getLocalSession() {
    const id = readJson(localSessionKey, null);
    if (!id) return null;
    const account = readJson(accountsKey, {})[id];
    return account ? { id: account.id, email: account.email, user_metadata: { display_name: account.displayName || '' }, local: true } : null;
  }

  function loadLocalProfile(user = null) {
    return readJson(profileKey(user), {});
  }

  function saveLocalProfile(profile, user = null) {
    writeJson(profileKey(user), profile);
  }

  function bytesToHex(bytes) {
    return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  async function hashPassword(password, saltHex) {
    if (!globalThis.crypto?.subtle) throw new Error('Для локального аккаунта нужен современный браузер и защищённое соединение.');
    const salt = Uint8Array.from(saltHex.match(/.{2}/g).map((part) => Number.parseInt(part, 16)));
    const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: passwordIterations, hash: 'SHA-256' }, material, 256);
    return bytesToHex(bits);
  }

  async function registerLocalAccount(email, password, displayName, guestProfile) {
    const normalizedEmail = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) throw new Error('Введите корректный адрес почты.');
    if (password.length < 8) throw new Error('Пароль должен содержать минимум 8 символов.');
    const accounts = readJson(accountsKey, {});
    if (Object.values(accounts).some((account) => account.email === normalizedEmail)) throw new Error('Аккаунт с такой почтой уже существует. Войдите или восстановите пароль.');
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const saltHex = bytesToHex(salt);
    const account = { id: randomId(), email: normalizedEmail, displayName: displayName.trim().slice(0, 32), salt: saltHex, passwordHash: await hashPassword(password, saltHex), createdAt: new Date().toISOString() };
    accounts[account.id] = account;
    writeJson(accountsKey, accounts);
    if (displayName.trim() && !guestProfile.name) guestProfile.name = displayName.trim().slice(0, 32);
    saveLocalProfile(guestProfile, account);
    localStorage.removeItem(profileBaseKey);
    writeJson(localSessionKey, account.id);
    return { id: account.id, email: account.email, user_metadata: { display_name: account.displayName }, local: true };
  }

  async function signInLocalAccount(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const accounts = readJson(accountsKey, {});
    const account = Object.values(accounts).find((item) => item.email === normalizedEmail);
    if (!account || (await hashPassword(password, account.salt)) !== account.passwordHash) throw new Error('Неверная почта или пароль. Проверь данные и попробуй ещё раз.');
    writeJson(localSessionKey, account.id);
    return { id: account.id, email: account.email, user_metadata: { display_name: account.displayName }, local: true };
  }

  function updateLocalAccount(userId, changes) {
    const accounts = readJson(accountsKey, {});
    const account = accounts[userId];
    if (!account) throw new Error('Локальный аккаунт не найден.');
    if (changes.email) {
      const email = changes.email.trim().toLowerCase();
      if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('Введите корректный адрес почты.');
      if (Object.values(accounts).some((item) => item.id !== userId && item.email === email)) throw new Error('Эта почта уже используется.');
      account.email = email;
    }
    if (changes.displayName !== undefined) account.displayName = changes.displayName.slice(0, 32);
    accounts[userId] = account;
    writeJson(accountsKey, accounts);
    return { id: account.id, email: account.email, user_metadata: { display_name: account.displayName }, local: true };
  }

  async function changeLocalPassword(userId, currentPassword, newPassword) {
    if (newPassword.length < 8) throw new Error('Пароль должен содержать минимум 8 символов.');
    const accounts = readJson(accountsKey, {});
    const account = accounts[userId];
    if (!account || (await hashPassword(currentPassword, account.salt)) !== account.passwordHash) throw new Error('Текущий пароль указан неверно.');
    const salt = crypto.getRandomValues(new Uint8Array(16));
    account.salt = bytesToHex(salt);
    account.passwordHash = await hashPassword(newPassword, account.salt);
    accounts[userId] = account;
    writeJson(accountsKey, accounts);
  }

  function signOutLocal() {
    localStorage.removeItem(localSessionKey);
  }

  function openVoiceDatabase() {
    return new Promise((resolve, reject) => {
      if (!globalThis.indexedDB) { reject(new Error('Хранилище голосовых записей недоступно в этом браузере.')); return; }
      const request = indexedDB.open(voiceDatabaseName, 1);
      request.onupgradeneeded = () => request.result.createObjectStore('recordings', { keyPath: 'id' });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function storeLocalVoice(id, blob, metadata = {}) {
    const database = await openVoiceDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction('recordings', 'readwrite');
      transaction.objectStore('recordings').put({ id, blob, metadata, createdAt: new Date().toISOString() });
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  }

  async function getLocalVoice(id) {
    const database = await openVoiceDatabase();
    const value = await new Promise((resolve, reject) => {
      const request = database.transaction('recordings', 'readonly').objectStore('recordings').get(id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    database.close();
    return value;
  }

  async function removeLocalVoice(id) {
    const database = await openVoiceDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction('recordings', 'readwrite');
      transaction.objectStore('recordings').delete(id);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  }

  async function uploadVoiceBlob(blob, userId, metadata = {}, id = randomId()) {
    if (!supabaseClient || !userId) throw new Error('Для облачной записи нужен подключённый аккаунт.');
    const extension = blob.type.includes('ogg') ? 'ogg' : blob.type.includes('mp4') ? 'm4a' : 'webm';
    const storagePath = `${userId}/${id}.${extension}`;
    const { error: uploadError } = await supabaseClient.storage.from(voiceBucket).upload(storagePath, blob, { contentType: blob.type || 'audio/webm', upsert: true });
    if (uploadError) throw uploadError;
    const row = { id, user_id: userId, storage_path: storagePath, content_type: blob.type || 'audio/webm', task_type: metadata.taskType || 'speaking', prompt: metadata.prompt || '', created_at: new Date().toISOString() };
    const { error: rowError } = await supabaseClient.from('voice_recordings').upsert(row, { onConflict: 'id' });
    if (rowError) {
      await supabaseClient.storage.from(voiceBucket).remove([storagePath]);
      throw rowError;
    }
    return { id, storagePath, taskType: row.task_type, prompt: row.prompt, createdAt: row.created_at };
  }

  async function saveVoiceRecording(blob, user, metadata = {}) {
    const id = randomId();
    if (supabaseClient && user && !user.local) {
      try { return await uploadVoiceBlob(blob, user.id, metadata, id); } catch (error) {
        await storeLocalVoice(id, blob, metadata);
        return { id, storagePath: `local:${id}`, taskType: metadata.taskType || 'speaking', prompt: metadata.prompt || '', createdAt: new Date().toISOString(), syncError: error.message };
      }
    }
    await storeLocalVoice(id, blob, metadata);
    return { id, storagePath: `local:${id}`, taskType: metadata.taskType || 'speaking', prompt: metadata.prompt || '', createdAt: new Date().toISOString() };
  }

  async function migrateLocalVoiceRecordings(recordings, userId) {
    const migrated = [];
    for (const recording of recordings || []) {
      if (!recording.storagePath?.startsWith('local:')) { migrated.push(recording); continue; }
      const localId = recording.storagePath.slice('local:'.length);
      const stored = await getLocalVoice(localId);
      if (!stored?.blob) continue;
      try {
        const uploaded = await uploadVoiceBlob(stored.blob, userId, stored.metadata || recording, recording.id);
        migrated.push(uploaded);
        await removeLocalVoice(localId);
      } catch {
        migrated.push(recording);
      }
    }
    return migrated;
  }

  async function getVoiceSource(recording, user) {
    if (recording.storagePath?.startsWith('local:')) {
      const stored = await getLocalVoice(recording.storagePath.slice('local:'.length));
      if (!stored?.blob) throw new Error('Эта локальная запись больше не найдена.');
      return URL.createObjectURL(stored.blob);
    }
    if (!supabaseClient || !user || user.local) throw new Error('Войди в облачный аккаунт, чтобы открыть запись.');
    const { data, error } = await supabaseClient.storage.from(voiceBucket).createSignedUrl(recording.storagePath, 60);
    if (error) throw error;
    return data.signedUrl;
  }

  async function getVoiceBlob(recording, user) {
    if (recording.storagePath?.startsWith('local:')) {
      const stored = await getLocalVoice(recording.storagePath.slice('local:'.length));
      if (!stored?.blob) throw new Error(`Голосовая запись ${recording.id} не найдена в этом браузере.`);
      return stored.blob;
    }
    if (!supabaseClient || !user || user.local) throw new Error('Войди в облачный аккаунт, чтобы экспортировать голосовые записи.');
    const { data, error } = await supabaseClient.storage.from(voiceBucket).download(recording.storagePath);
    if (error) throw error;
    return data;
  }

  function blobToDataUrl(blob) {
    return blob.arrayBuffer().then((buffer) => {
      const bytes = new Uint8Array(buffer);
      const chunkSize = 0x8000;
      let binary = '';
      for (let offset = 0; offset < bytes.length; offset += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
      }
      return `data:${blob.type || 'application/octet-stream'};base64,${btoa(binary)}`;
    });
  }

  async function deleteVoiceRecording(recording, user) {
    if (recording.storagePath?.startsWith('local:')) {
      await removeLocalVoice(recording.storagePath.slice('local:'.length));
      return;
    }
    if (!supabaseClient || !user || user.local) throw new Error('Войди в облачный аккаунт, чтобы удалить запись.');
    const { error: storageError } = await supabaseClient.storage.from(voiceBucket).remove([recording.storagePath]);
    if (storageError) throw storageError;
    const { error } = await supabaseClient.from('voice_recordings').delete().eq('user_id', user.id).eq('id', recording.id);
    if (error) throw error;
  }

  async function syncProfile(profile, user) {
    if (!supabaseClient || !user || user.local) return { data: profile, error: null };
    const userId = user.id;
    const now = new Date().toISOString();
    const attempts = (profile.tests || []).map((attempt) => {
      attempt.id ||= randomId();
      return { id: attempt.id, user_id: userId, mode: attempt.mode || 'mock', level: attempt.level || null, score: Number(attempt.score) || 0, score_range: attempt.scoreRange || null, correct: Number(attempt.correct) || 0, total: Number(attempt.total) || 0, mistakes: Number(attempt.mistakes) || 0, skill_results: attempt.skillResults || {}, component_results: attempt.componentResults || {}, details: attempt.mistakeDetails || [], timed_out: Boolean(attempt.timedOut), review: Boolean(attempt.review), created_at: attempt.date || now };
    });
    const mistakes = (profile.errors || []).map((mistake) => ({ id: mistake.id, user_id: userId, task_type: mistake.taskType || '', skill: mistake.skill || '', question: mistake.question || {}, answer: mistake.answer || '', interval_days: Number(mistake.interval) || 0, due_at: mistake.dueAt || now, last_reviewed_at: mistake.lastReviewedAt || null, created_at: mistake.createdAt || now }));
    const activitiesByDay = new Map();
    (profile.activities || []).forEach((activity) => {
      if (!activity.day) return;
      const existing = activitiesByDay.get(activity.day) || { user_id: userId, plan_date: activity.day, activities: [], minutes: 0, weak_area_work: false, updated_at: now };
      existing.activities.push(activity);
      existing.minutes += Number(activity.minutes) || 0;
      existing.weak_area_work ||= Boolean(activity.weakAreaWork);
      activitiesByDay.set(activity.day, existing);
    });
    const dailyPlans = [...activitiesByDay.values()];
    const settings = { examChecklist: profile.examChecklist || {}, streakFreezeDate: profile.streakFreezeDate || null, streakFreezeUsed: Boolean(profile.streakFreezeUsed), reminderEnabled: Boolean(profile.reminderEnabled), reminderTime: profile.reminderTime || '18:00', lastReminderDate: profile.lastReminderDate || null, aiReviewEnabled: Boolean(profile.aiReviewEnabled), wordNotes: profile.wordNotes || {}, university: profile.university || null, lessons: profile.lessons || [], voiceRecordings: (profile.voiceRecordings || []).filter((recording) => !recording.storagePath?.startsWith('local:')) };
    const writes = [
      supabaseClient.from('profiles').upsert({ user_id: userId, display_name: profile.name || user.user_metadata?.display_name || '', goal: profile.goal || null, updated_at: now }, { onConflict: 'user_id' }),
      supabaseClient.from('settings').upsert({ user_id: userId, data: settings, updated_at: now }, { onConflict: 'user_id' }),
    ];
    if (attempts.length) writes.push(supabaseClient.from('attempts').upsert(attempts, { onConflict: 'id' }));
    if (mistakes.length) writes.push(supabaseClient.from('mistakes').upsert(mistakes, { onConflict: 'id' }));
    if (dailyPlans.length) writes.push(supabaseClient.from('daily_plans').upsert(dailyPlans, { onConflict: 'user_id,plan_date' }));
    const results = await Promise.all(writes);
    const failure = results.find((result) => result.error);
    return { data: profile, error: failure?.error || null };
  }

  async function loadProfile(user, fallback = {}) {
    if (!supabaseClient || !user || user.local) return { ...loadLocalProfile(user?.local ? user : null), ...fallback };
    const userId = user.id;
    const [profileResult, attemptsResult, mistakesResult, plansResult, settingsResult, voiceResult] = await Promise.all([
      supabaseClient.from('profiles').select('*').eq('user_id', userId).maybeSingle(),
      supabaseClient.from('attempts').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(100),
      supabaseClient.from('mistakes').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(500),
      supabaseClient.from('daily_plans').select('*').eq('user_id', userId).order('plan_date', { ascending: false }).limit(120),
      supabaseClient.from('settings').select('data').eq('user_id', userId).maybeSingle(),
      supabaseClient.from('voice_recordings').select('id,storage_path,task_type,prompt,created_at').eq('user_id', userId).order('created_at', { ascending: false }).limit(200),
    ]);
    for (const result of [profileResult, attemptsResult, mistakesResult, plansResult, settingsResult, voiceResult]) if (result.error) throw result.error;
    const hasCloudProfile = Boolean(profileResult.data || attemptsResult.data?.length || mistakesResult.data?.length || plansResult.data?.length || settingsResult.data?.data || voiceResult.data?.length);
    if (!hasCloudProfile) return { ...fallback, name: fallback.name || user.user_metadata?.display_name || '', __guestMigration: true };
    const settings = settingsResult.data?.data || {};
    const activities = (plansResult.data || []).flatMap((plan) => plan.activities || []);
    return {
      ...fallback,
      name: profileResult.data?.display_name || user.user_metadata?.display_name || fallback.name || '',
      goal: profileResult.data?.goal || fallback.goal || null,
      tests: (attemptsResult.data || []).map((row) => ({ id: row.id, date: row.created_at, mode: row.mode, level: row.level, score: row.score, scoreRange: row.score_range, correct: row.correct, total: row.total, mistakes: row.mistakes, skillResults: row.skill_results, componentResults: row.component_results, mistakeDetails: row.details, timedOut: row.timed_out, review: row.review })),
      errors: (mistakesResult.data || []).map((row) => ({ id: row.id, taskType: row.task_type, skill: row.skill, question: row.question, answer: row.answer, interval: row.interval_days, dueAt: row.due_at, lastReviewedAt: row.last_reviewed_at, createdAt: row.created_at })),
      activities,
      lessons: settings.lessons || [],
      examChecklist: settings.examChecklist || {},
      streakFreezeDate: settings.streakFreezeDate || null,
      streakFreezeUsed: Boolean(settings.streakFreezeUsed),
      reminderEnabled: Boolean(settings.reminderEnabled),
      reminderTime: settings.reminderTime || '18:00',
      lastReminderDate: settings.lastReminderDate || null,
      aiReviewEnabled: Boolean(settings.aiReviewEnabled),
      wordNotes: settings.wordNotes || {},
      university: settings.university || null,
      voiceRecordings: [
        ...(voiceResult.data || []).map((row) => ({ id: row.id, storagePath: row.storage_path, taskType: row.task_type, prompt: row.prompt, createdAt: row.created_at })),
        ...(fallback.voiceRecordings || []).filter((recording) => recording.storagePath?.startsWith('local:')),
      ],
    };
  }

  async function clearHistory(user) {
    if (!supabaseClient || !user || user.local) return;
    for (const table of ['attempts', 'mistakes', 'daily_plans']) {
      const { error } = await supabaseClient.from(table).delete().eq('user_id', user.id);
      if (error) throw error;
    }
  }

  async function exportData(profile, user) {
    const recordings = [];
    for (const recording of profile.voiceRecordings || []) {
      recordings.push({ ...recording, audioDataUrl: await blobToDataUrl(await getVoiceBlob(recording, user)) });
    }
    return { exportedAt: new Date().toISOString(), account: user ? { email: user.email || '', id: user.id, local: Boolean(user.local) } : null, profile, voiceRecordings: recordings };
  }

  async function deleteAccount(user, profile) {
    if (supabaseClient && user && !user.local) {
      const { error } = await supabaseClient.functions.invoke('delete-account');
      if (error) throw error;
      await supabaseClient.auth.signOut();
      localStorage.removeItem(profileKey(user));
      localStorage.removeItem(profileBaseKey);
      for (const recording of profile.voiceRecordings || []) if (recording.storagePath?.startsWith('local:')) await removeLocalVoice(recording.storagePath.slice('local:'.length));
      return;
    }
    if (user?.local) {
      const accounts = readJson(accountsKey, {});
      delete accounts[user.id];
      writeJson(accountsKey, accounts);
      localStorage.removeItem(profileKey(user));
      signOutLocal();
    }
    if (!user) localStorage.removeItem(profileBaseKey);
    for (const recording of profile.voiceRecordings || []) if (recording.storagePath?.startsWith('local:')) await removeLocalVoice(recording.storagePath.slice('local:'.length));
  }

  async function clearMigratedLocalAccount(user) {
    if (user?.local) {
      const accounts = readJson(accountsKey, {});
      delete accounts[user.id];
      writeJson(accountsKey, accounts);
      localStorage.removeItem(profileKey(user));
      if (readJson(localSessionKey, null) === user.id) signOutLocal();
    } else {
      localStorage.removeItem(profileBaseKey);
    }
  }

  window.WordwiseData = {
    configure(client) { supabaseClient = client || null; },
    profileKey,
    loadLocalProfile,
    saveLocalProfile,
    getLocalSession,
    registerLocalAccount,
    signInLocalAccount,
    updateLocalAccount,
    changeLocalPassword,
    signOutLocal,
    loadProfile,
    ensureProfileIds(profile) { (profile.tests || []).forEach((attempt) => { attempt.id ||= randomId(); }); },
    saveProfile: syncProfile,
    clearHistory,
    exportData,
    deleteAccount,
    clearMigratedLocalAccount,
    saveVoiceRecording,
    migrateLocalVoiceRecordings,
    getVoiceSource,
    getVoiceBlob,
    deleteVoiceRecording,
  };
})();
