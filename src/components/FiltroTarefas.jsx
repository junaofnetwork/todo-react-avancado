import { useContext, memo } from "react";
import { TarefasContext } from "../context/TarefasContext";

const FiltroTarefas = memo(() => {
  const { filtro, setFiltro } = useContext(TarefasContext);

  const filtros = ["todas", "pendentes", "concluidas"];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {filtros.map((f) => (
        <button
          key={f}
          onClick={() => setFiltro(f)}
          style={{
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            border: filtro === f ? "2px solid #4CAF50" : "1px solid #ccc",
            background: filtro === f ? "#4CAF50" : "#fff",
            color: filtro === f ? "#fff" : "#000",
          }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
});

export default FiltroTarefas;
