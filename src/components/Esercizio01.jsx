import { useState } from 'react';

export default function Esercizio01() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contatore con reset</h2>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
