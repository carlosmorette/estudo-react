import React, {Component} from 'react'

export default class Calculadora extends Component{
    constructor(){
        super();
    }

    somarNomes = (nome) => {
        return `${nome} com outra coisa`
    }

    render(){
        return(
            <div>
                <p onChange={() => this.somarNomes(this.props.nome)}>{this.props.nome}</p>
            </div>
        );
    }


}