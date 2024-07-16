import React from "react";

class Botao extends React.Component<{ texto: string}> {
    render() {
        const backgroundColor = 'red';
        const styles = {
            backgroundColor
        }
        return(
            <button style={ styles }>{this.props.texto}</button>
        );
    }
}

export default Botao;