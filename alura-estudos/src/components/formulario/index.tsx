import React from "react";
import Botao from "../botao";

class Formulario extends React.Component {
    render(): React.ReactNode {
        return(
            <form action="">
                <div>
                    <label htmlFor="tarefa">Adicionar um novo estudo.</label>
                    <input type="text" name="tarega" id="tarefa" placeholder="O que você quer estudar" required />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao 
                    texto="Adicionar"
                />
            </form>
        )
    }
}

export default Formulario;