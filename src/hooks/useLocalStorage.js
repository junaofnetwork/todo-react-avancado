import { useState } from "react";

export default function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const armazenado = localStorage.getItem(chave);
    return armazenado ? JSON.parse(armazenado) : valorInicial;
  });

  const atualizarValor = (novoValor) => {
    setValor(novoValor);
    localStorage.setItem(chave, JSON.stringify(novoValor));
  };

  return [valor, atualizarValor];
}
