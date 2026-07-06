import { useState } from 'react';

export default function Esercizio05() {
  const [variant, setVariant] = useState('base');
  const basePrice = 100;
  const variants = {
    base: 0,
    premium: 20,
    gold: 50,
  };

  const finalPrice = basePrice + (basePrice * variants[variant] / 100);

  return (
    <div>
      <h2>Calcolo prezzo variante</h2>
      <p>Prezzo base: {basePrice}€</p>
      <select value={variant} onChange={(e) => setVariant(e.target.value)}>
        <option value="base">Base</option>
        <option value="premium">Premium (+20%)</option>
        <option value="gold">Gold (+50%)</option>
      </select>
      <p>Prezzo finale: {finalPrice.toFixed(2)}€</p>
    </div>
  );
}
