import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ComponenteFilho = () => {
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <p>Componente Filho: {mensagem}</p>
      <button onClick={() => setMensagem("Olá, mundo! Atualizado!")}>
        Atualizar Mensagem
      </button>
    </div>
  );
};

export default ComponenteFilho;