import React from 'react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Carlos')

  const nomes = ['João', 'Igor', 'Adalberto', 'Ronaldo', 'Junior']

  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={() =>  setName(nomes[1] || nomes[2])}>Clique aqui</button>
    </div>
  );
}

export default App;
