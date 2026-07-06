import { useState } from 'react';

export default function Esercizio09() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.length >= 5 && password.length >= 8;

  return (
    <div>
      <h2>Form login validato</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength={5}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
          />
        </div>
        <button type="submit" disabled={!isValid}>Invia</button>
      </form>
    </div>
  );
}
