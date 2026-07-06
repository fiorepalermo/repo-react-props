import { useState } from 'react';

export default function Esercizio02() {
  const [isPrimary, setIsPrimary] = useState(true);

  return (
    <div>
      <h2>Toggle Classe</h2>
      <button
        style={{
          background: isPrimary ? 'blue' : 'green',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => setIsPrimary(!isPrimary)}
      >
        Premi!! Cambia Colore
      </button>
    </div>
  );
}