import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

export default class Consulta extends Component {

    constructor() {
        super();
        this.state = {

            // Dados mostrados
            cep: [],

            // Valor pegado do input
            valor: "",
        }
    }

    componentDidMount() {
        console.log('Carregado');
        this.Consultar();
        console.log(this.state.valor)
    }

    PegaCep(input){
        this.setState({ valor: input.target.value })
    }
    
    Consultar(cep){   

        var url = 'https://viacep.com.br/ws/'+ cep +'/json/'

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ cep: data }))
    }


    render() {
        return (
            <div className="Home">
                <Header />
                <div className="consultas">
                    <form onSubmit={this.Consultar}>
                        <input
                            type="text"
                            placeholder="Consulta Cep..."
                            name="valor"
                            value={this.state.valor}
                            onChange={this.PegaCep.bind(this)} 
                        />
                        <button 
                            type="submit"
                        >Consultar</button>
                    </form>
                    {
                        <div>
                            <p>Bairro: {this.state.cep.bairro}</p>
                        </div>
                    }

                </div>
                <Footer />
            </div>
        );
    }
}