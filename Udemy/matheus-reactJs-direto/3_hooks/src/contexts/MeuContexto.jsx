import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MeuContexto = createContext({})

export const MeuContextProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState("Olá, mundo!");

  const ValorDoContexto = {
    mensagem,
    setMensagem
  }

  return (
    <MeuContexto.Provider value={ValorDoContexto}>
      {children}
    </MeuContexto.Provider>
  )
}