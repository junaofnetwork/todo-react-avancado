import { useContext, useMemo } from "react";
import { TarefasContext } from "../context/TarefasContext";

function ListaTarefas() {
  const { tarefas, alternarConclusao, removerTarefa, filtro } =
    useContext(TarefasContext);

  const tarefasFiltradas = useMemo(() => {
    console.log("Filtrando tarefas..."); // mostra quando recalcula
    if (filtro === "concluidas") return tarefas.filter((t) => t.concluida);
    if (filtro === "pendentes") return tarefas.filter((t) => !t.concluida);
    return tarefas;
  }, [tarefas, filtro]);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tarefasFiltradas.map((t) => (
        <li
          key={t.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            background: "#fff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <span
            onClick={() => alternarConclusao(t.id)}
            style={{
              textDecoration: t.concluida ? "line-through" : "none",
              cursor: "pointer",
              flex: 1,
            }}
          >
            {t.texto}
          </span>
          <button
            onClick={() => removerTarefa(t.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTarefas;
