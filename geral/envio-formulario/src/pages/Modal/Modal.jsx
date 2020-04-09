import React, { Component } from 'react'
import '../card.css'

class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal">
                    <h3>Seus dados!</h3>
                    <p>Nome: {this.props.nome}</p>
                    <p>Email: {this.props.email}</p>
                    <p>CEP: {this.props.cep}</p>
                    <p>Logradouro: {this.props.logradouro}</p>
                    <p>Bairro: {this.props.bairro}</p>
                </div>
            </div>
        );
    }
}
export default Modal