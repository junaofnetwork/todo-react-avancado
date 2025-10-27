import { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaTarefas from "./components/ListaTarefas";
import FiltroTarefas from "./components/FiltroTarefas";

function Conteudo() {
  const [texto, setTexto] = useState("");
  const { adicionarTarefa } = useContext(TarefasContext);

  const handleAdd = () => {
    adicionarTarefa(texto);
    setTexto("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Tarefas 🧠</h1>

      <div style={styles.inputContainer}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.buttonAdd}>
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

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    textAlign: "center",
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: { marginBottom: "20px" },
  inputContainer: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonAdd: {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    background: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
};
