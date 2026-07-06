import { useState } from 'react';

export default function Esercizio02() {
  const [isPrimary, setIsPrimary] = useState(true);

  return (
    <div>
      <h2>Toggle classe CSS</h2>
      <button
        className={isPrimary ? 'primary' : 'success'}
        onClick={() => setIsPrimary(!isPrimary)}
      >
        Toggle Classe
      </button>
      <style jsx>{`
        .primary { background: blue; color: white; }
        .success { background: green; color: white; }
      `}</style>
    </div>
  );
}
