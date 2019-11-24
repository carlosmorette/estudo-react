import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

export default class Consulta extends Component {

    constructor() {
        super();
        this.state = {

            // Vai retornar os dados
            resultado: {
                bairro: "",
                cep: ""
            },

            // Valor pegado do input
            valor: ""
        }
    }

    componentDidMount() {
        console.log('Carregado');
        this.consultando();


    }

    // Pega o valor do Input
    //Setando o estado, valor: evento.alvo.valor
    PegaCep = (event) => {
        this.setState({ value: event.target.value });
    }

    // Pegando dados do formulario
    EnviarFormulario = (event) => {
        console.log('Um cep foi enviado: ' + this.state.value)
        event.preventDefault()
    }

    //GET
    consultando = () => {

        fetch('https://viacep.com.br/ws/09668050/json/')
            .then(response => response.json())
            .then(data => this.setState({ resultado: data }))
    }

    render() {
        return (
            <div className="Home">
                <Header />
                <div className="consultas">
                    {/* <form onSubmit={this.EnviarFormulario}>
                        <input placeholder="Consulta Cep..."
                            onChange={this.PegaCep} />
                        <button>Consultar</button>
                    </form> */}
                    {
                        this.state.resultado.map(
                            function (mapear) {
                                return (
                                    <p>{mapear.resultado.cep}</p>
                                )
                            }
                        )
                    }
                    {
                        console.log(this.state.cep.bairro)
                    }

                </div>
                <Footer />
            </div>
        );
    }
}