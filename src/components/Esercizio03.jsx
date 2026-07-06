import { useState } from 'react';

export default function Esercizio03() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h2>Validazione checkbox</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accetto i termini di servizio
      </label>
      <button disabled={!isChecked}>Registrati</button>
    </div>
  );
}
