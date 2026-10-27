import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operador, setOperador] = useState(null);

  function calcular(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") {
      if (b == 0) return "ERROR";
      return a / b;
    }
  }

  function clicarNumero(numero) {
    setDisplay(display + numero);
  }

  function clicarOperador(op) {
    setPrimeiroNumero(display);
    setOperador(op);
    setDisplay("");
  }

  function mostrarResultado() {
    const resultado = calcular(
      Number(primeiroNumero),
      Number(display),
      operador,
    );
    setDisplay(String(resultado));
  }

  function zerarResultado() {
    setDisplay("");
    setPrimeiroNumero(null);
    setOperador(null);
  }

  return (
    <>
      <div className="calculadora">
        <div className="display">{display}</div>
        <button className="btn-numero" onClick={() => clicarNumero("1")}>
          1
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("2")}>
          2
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("3")}>
          3
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("4")}>
          4
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("5")}>
          5
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("6")}>
          6
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("7")}>
          7
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("8")}>
          8
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("9")}>
          9
        </button>
        <button className="btn-numero" onClick={() => clicarNumero("0")}>
          0
        </button>
        <button className={`btn-operador ${operador === "+" ? "ativo" : ""}`} onClick={() => clicarOperador("+")}>
          +
        </button>
        <button className={`btn-operador ${operador === "-" ? "ativo" : ""}`} onClick={() => clicarOperador("-")}>
          -
        </button>
        <button className={`btn-operador ${operador === "/" ? "ativo" : ""}`} onClick={() => clicarOperador("/")}>
          /
        </button>
        <button className={`btn-operador ${operador === "*" ? "ativo" : ""}`} onClick={() => clicarOperador("*")}>
          *
        </button>
        <button className="btn-igual" onClick={mostrarResultado}>
          =
        </button>
        <button className="btn-limpar" onClick={zerarResultado}>
          C
        </button>
      </div>
    </>
  );
}

export default App;
