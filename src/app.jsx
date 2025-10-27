import { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaTarefas from "./components/ListaTarefas";
import FiltroTarefas from "./components/FiltroTarefas";
import "./style.css";


function Conteudo() {
  const [texto, setTexto] = useState("");
  const { adicionarTarefa } = useContext(TarefasContext);

  const handleAdd = () => {
    adicionarTarefa(texto);
    setTexto("");
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Tarefas 🧠</h1>

      <div className="inputContainer">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
          className="input"
        />
        <button onClick={handleAdd} className="buttonAdd">
          Adicionar
        </button>
      </div>

      <FiltroTarefas />
      <ListaTarefas />
    </div>
  );
}

export default function App() {
  return (
    <TarefasProvider>
      <Conteudo />
    </TarefasProvider>
  );
}


