import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

export default class Consulta extends Component {

    constructor() {
        super();
        this.state = {


            cep: [],

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

        fetch(`https://viacep.com.br/ws/${this.state}}/json/`)
            .then(response => response.json())
            .then(data => this.setState({ cep: data }))
            .then(() => console.log(this.state.cep))

    }

    render() {
        return (
            <div className="Home">
                <Header />
                <div className="consultas">
                    <form onSubmit={this.EnviarFormulario}>
                        <input placeholder="Consulta Cep..."
                            onChange={this.PegaCep} />
                        <button>Consultar</button>
                    </form>
                    {/* {
                        this.state.cep.map(
                            function (mapear) {
                                return (
                                    <p>{mapear.cep.logradouro}</p>
                                )
                            }
                        )
                    } */}
                    {
                        <div>

                            <p>{this.state.cep.logradouro}</p>
                            <p>{this.state.cep.cep}</p>

                        </div>
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