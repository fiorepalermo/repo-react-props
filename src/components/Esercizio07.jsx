import { useState } from 'react';

const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5', 'Elemento 6'];

export default function Esercizio07() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2>Lista espandibile</h2>
      <ul>
        {items.slice(0, expanded ? items.length : 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Nascondi' : 'Mostra tutti'}
      </button>
    </div>
  );
}
