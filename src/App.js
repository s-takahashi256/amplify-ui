import { useState } from 'react';
import axios from 'axios';

function PreferencesForm() {
  const [userId, setUserId] = useState('');
  const [preferences, setPreferences] = useState('');
  const [ngConditions, setNgConditions] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('https://w6nkdiwgs8.execute-api.ap-northeast-1.amazonaws.com/prod/SaveUserPreferences', {
        userId: userId,
        preferences: preferences,
        ngConditions: ngConditions
      });
      setMessage('保存しました。');
    } catch (err) {
      console.error(err);
      setMessage('保存に失敗しました。');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">ユーザー好み 登録フォーム</h2>
      <input className="border p-2 w-full mb-2" placeholder="userId" onChange={(e) => setUserId(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="好み（例：和食、静かな店）" onChange={(e) => setPreferences(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="NG条件（例：騒がしい場所）" onChange={(e) => setNgConditions(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSubmit}>保存</button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}

export default PreferencesForm;