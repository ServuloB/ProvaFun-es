import './index.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

function pegarInicio() {
  const state = {};
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      state[`${r}-${c}`] = null;
    }
  }
  return state;
}

const Chave = (index) => {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return `${row}-${col}`;
};

const getLabel = (value) => {
  if (!value) {
    return null;
  }
  return value > 0 ? 'O' : 'X';
};

function getVencedor(v) {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const linha =
        v[`${r}-${c}`] +
        v[`${r}-${c + 1}`] +
        v[`${r}-${c + 2}`];
      if (linha === 3 || linha === -3) {
        return linha;
      }

      const coluna =
        v[`${r}-${c}`] +
        v[`${r + 1}-${c}`] +
        v[`${r + 2}-${c}`];
      if (coluna === 3 || coluna === -3) {
        return coluna;
      }

      const diagonal =
        v[`${r}-${c}`] +
        v[`${r + 1}-${c + 1}`] +
        v[`${r + 2}-${c + 2}`];
      if (diagonal === 3 || diagonal === -3) {
        return diagonal;
      }

      const DiagonalReversa =
        v[`${r}-${c}`] +
        v[`${r + 1}-${c - 1}`] +
        v[`${r + 2}-${c - 2}`];
      if (
        DiagonalReversa === 3 ||
        DiagonalReversa === -3
      ) {
        return DiagonalReversa;
      }
    }
  }

  return null;
}

const Game = () => {
  const [values, setValues] = useState(pegarInicio);
  const [player, setPlayer] = useState(1);
  const [Vencedor, setVencedor] = useState(null);

  function handleClick(key) {
    if (Vencedor || values[key]) {
      return;
    }
    const novosValores = {
      ...values,
      [key]: player
    };
    setValues(novosValores);
    setPlayer(player * -1);
    const novoVencedor = getVencedor(novosValores);

    if (novoVencedor) {
      setVencedor(novoVencedor > 0 ? 1 : -1);
    }
  }

  function resetar() {
    setVencedor(null);
    setValues(pegarInicio);
    setPlayer(1);
  }

  const Empate =
    Object.values(values).filter(Boolean).length === 9 &&
    !Vencedor;

  return (
    <div className="Game">
        <h1>JOGO DA VELHA</h1>
      <div className="GameTabuleiro">
        {Array.from({ length: 9 }).map((_, index) => {
          const key = Chave(index);
          return (
            <button className='botao'
              key={index}
             
              onClick={() => handleClick(key)}
            >
              {getLabel(values[key])}
            </button>
          );
        })}
      </div>
      {(Vencedor || Empate) && (
        <div className="menu">
          {Vencedor ? (
            <p className='i'>O ganhador é: {Vencedor > 0 ? 'O' : 'X'}</p>
          ) : (
            <p className='i'>Houve um empate</p>
          )}
          <button className='botao' onClick={resetar}>Reiniciar</button>
        </div>
      )}
      <Link to='/'>VOLTAR</Link>
    </div>

  );
};

export default Game;
