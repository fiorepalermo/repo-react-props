import { useState } from 'react';

const products = [
  { id: 1, name: 'iPhone', brand: 'Apple' },
  { id: 2, name: 'Galaxy', brand: 'Samsung' },
  { id: 3, name: 'Pixel', brand: 'Google' },
  { id: 4, name: 'MacBook', brand: 'Apple' },
  { id: 5, name: 'ThinkPad', brand: 'Lenovo' },
];

export default function Esercizio06() {
  const [selectedBrand, setSelectedBrand] = useState('');

  const brands = [...new Set(products.map(p => p.brand))];
  const filteredProducts = selectedBrand
    ? products.filter(p => p.brand === selectedBrand)
    : products;

  return (
    <div>
      <h2>Filtro marca a tendina</h2>
      <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">Tutte le marche</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} ({product.brand})</li>
        ))}
      </ul>
    </div>
  );
}
