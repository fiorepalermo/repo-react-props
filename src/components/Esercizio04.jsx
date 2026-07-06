import { useState } from 'react';

export default function Esercizio04() {
  const [lang, setLang] = useState('it');

  const messages = {
    it: 'Benvenuto!',
    en: 'Welcome!',
    es: '¡Bienvenido!',
    fr: 'Bienvenue!',
  };

  return (
    <div>
      <h2>Selettore lingua</h2>
      <p>{messages[lang]}</p>
      <button onClick={() => setLang('it')}>Italiano</button>
      <button onClick={() => setLang('en')}>Inglese</button>
      <button onClick={() => setLang('es')}>Spagnolo</button>
      <button onClick={() => setLang('fr')}>Francese</button>
    </div>
  );
}
