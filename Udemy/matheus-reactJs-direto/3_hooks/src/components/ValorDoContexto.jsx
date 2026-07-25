import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ValorDoContexto = () => {
  const { mensagem } = useContext(MeuContexto);

  return (
    <div>Valor do Contexto: {mensagem}</div>
  )
}

export default ValorDoContexto;