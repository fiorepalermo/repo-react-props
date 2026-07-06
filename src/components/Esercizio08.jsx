import { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export default function Esercizio08() {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
      <h2>Selezione taglia prodotto</h2>
      {sizes.map(size => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          style={{
            background: selectedSize === size ? 'black' : 'white',
            color: selectedSize === size ? 'white' : 'black',
            border: '1px solid black',
            margin: '5px',
          }}
        >
          {size}
        </button>
      ))}
      <p>Taglia selezionata: {selectedSize || 'Nessuna'}</p>
    </div>
  );
}
