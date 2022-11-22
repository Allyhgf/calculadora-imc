import React from 'react';
import './App.modules.scss'

function App() {
  return (
    <form action="POST">
      <div>
        Altura <input type="text" placeholder='Insira sua Altura'/>
        Peso <input type="text" placeholder='Insira seu Peso' />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
}

export default App;
