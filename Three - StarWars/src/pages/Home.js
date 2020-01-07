import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super();
        this.state = {

            // Dados retorna um objeto com os dados da API
            dados: {},

            // ID armazena o value do input
            id: "",

            // Icone carregando setado como falso para não aparecer
            carregando: false,

        }
    }

    //#region FUNCTIONS
    pegarId = (input) => {
        //Setamos o estado do id e pegamos o value dele
        this.setState({ id: input.target.value })

    }


    buscar = (e) => {
        // Evita que a tela recarregue
        e.preventDefault();

        // Quando entrar na consulta, vamos 
        this.setState({ carregando: true })

        // Realizamos a requisição acrescentando o id pegado do input
        fetch("https://swapi.co/api/people/" + this.state.id + "/")

            // Trazemos a resposta para json
            .then(response => response.json())

            // Quando ocorrer esta resposta então nos setamos o icone como verdadeiro e mostramos a resposta, ou seja os dados
            .then(response => {
                this.setState({ dados: response })
                this.setState({ carregando: false })

            })
            // Se houver erro nos deixamos o icone como falso
            .catch(error => {
                this.setState({ carregando: false });
                console.log(error);
            })
    }

    //#endregion

    render() {
        return (
            <div className="Home">
                <main>
                    <h1>API do Star Wars</h1><br />
<<<<<<< HEAD:Three - StarWars/src/pages/Home.js
=======
                    {this.state.carregando && <i className="fab fa-galactic-republic fa-spin fs-5 fa-5x"></i>}<br /><br />
>>>>>>> ce116f6026f9cf3992f0548355049e176e1d2b40:Three/src/pages/Home.js
                    <form onSubmit={this.buscar}>
                        <input
                            placeholder="Id..."
                            onChange={this.pegarId} name="id"
                            id="input"
                        />
                        <button type="submit">Buscar</button>
                    </form><br />
                    <div className="dados">
                        <p>
                            Nome: {this.state.dados.name}<br />
                            Altura: {this.state.dados.height}<br />
                            Massa: {this.state.dados.mass}<br />
                            Nascimento: {this.state.dados.birth_year}<br />
                        </p>
                    </div>
                </main>
            </div>
        );
    }
}
export default Home;
            // <div className="Home">
            //     <div className="conteudo">
            //         <h1>API Star Wars</h1>
            //         <div className="info">
            //             <div className="fa-3x">
            //                 


            //             </div>
            //             <p id="response">Nome: {this.state.dados.name}</p>
            //             <p id="response">Altura: {this.state.dados.height}</p>
            //             <p id="response">Massa: {this.state.dados.mass}</p>
            //             <p id="response">Nascimento: {this.state.dados.birth_year}</p>

            //             <div className="formulario">
            //                 <form onSubmit={this.getDados}>
            //                     <label>Escolha: </label>
            //                     <input
            //                         name="id"
            //                         onChange={this.pegarId}
            //                         type="text"
            //                     />
            //                     <button type="submit">Consultar</button>
            //                 </form>
            //             </div>
            //         </div>
            //     </div>
            // </div>