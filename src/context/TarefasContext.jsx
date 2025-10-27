import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useLocalStorage("tarefas", []);
  const [filtro, setFiltro] = useState("todas");

  // useEffect opcional — exemplo de persistência
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (texto) => {
    if (!texto.trim()) return;
    const nova = { id: Date.now(), texto, concluida: false };
    setTarefas((prev) => [...prev, nova]);
  };

  const alternarConclusao = (id) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const removerTarefa = (id) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TarefasContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        alternarConclusao,
        removerTarefa,
        filtro,
        setFiltro,
      }}
    >
      {children}
    </TarefasContext.Provider>
  );
}
