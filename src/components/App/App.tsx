import React, { useState, ChangeEvent } from "react";
import style from "./App.module.scss";

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const debug = (event: ChangeEvent<HTMLFormElement>) => {
    alert(`Seu valor de IMC é: ${(peso / altura) ^ 2} `);
    event.preventDefault();
  };

  function handleChangePeso(event: ChangeEvent<HTMLInputElement>) {
    const novoValor = event.target.valueAsNumber;
    return setPeso(novoValor);
  }

  function handleChangeAltura(event: ChangeEvent<HTMLInputElement>) {
    const novoValor = event.target.valueAsNumber;
    return setAltura(novoValor);
  }

  return (
    <form action="POST" onSubmit={debug}>
      <div className={style.divWrapper}>
        <p className={style.instrucoes}>Insira sua altura em m</p>
        <input
          className={style.dadosUsuario}
          type="number"
          min="0"
          max="3.00"
          step="0.01"
          value={altura}
          onChange={handleChangeAltura}
        />
        <p className={style.instrucoes}>Insira seu peso em kg</p>
        <input
          className={style.dadosUsuario}
          type="number"
          min="0"
          max="500"
          value={peso}
          onChange={handleChangePeso}
        />
        <div className={style.centerBotao}>
          <button type="submit" className={style.botaoSubmit}>
            Calcular
          </button>
        </div>
      </div>
    </form>
  );
}

export default App;
