import React, { useState, ChangeEvent } from "react";
import "./App.modules.scss";

function App() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const debug = (event: ChangeEvent<HTMLFormElement>) => {
    console.log(altura, peso);
    event.preventDefault()
  };

  function handleChangePeso(event: ChangeEvent<HTMLInputElement>){
    const novoValor = event.target.valueAsNumber;
    return setPeso(novoValor)
  }

  function handleChangeAltura(event: ChangeEvent<HTMLInputElement>){
    const novoValor = event.target.valueAsNumber;
    return setAltura(novoValor)
  }

  return (
    <form action="POST" onSubmit={debug}>
      <div>
        Altura (m)
        <input
          type="number"
          min="0"
          max="3.00"
          step="0.01"
          placeholder="Insira sua Altura em m" value={altura}
          onChange={handleChangeAltura}
        />
        Peso (kg)
        <input
          type="number"
          min="0"
          max="500"
          placeholder="Insira seu Peso em kg" value={peso}
          onChange={handleChangePeso}
        />
      </div>
      <button type="submit">
        Calcular
      </button>
    </form>
  );
}

export default App;
