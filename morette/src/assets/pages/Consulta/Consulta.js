import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

export default class Consulta extends Component {

    constructor(){
        super();
        this.state= {
            cep:''
        }
    }

    consultaCEP(){
        let cep = ;
        
        
        let url = "https://viacep.com.br/ws/{this.props.cep}/json/";

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ cep : data}))

    }


    render() {
        return (
            <div className="Home">
                <Header />
                <body>
                    <main>
                        <h2>Consulta CEP: </h2>
                        <form method="post">
                            <label>CEP: </label>
                            <input type="text" placeholder="Insira o CEP..." />
                            <button>Consultar</button>
                        </form>
                        <div className="consultado">
                            {
                                this.state.cep.map(
                                    function (consulta){
                                        return(
                                            <p>{consulta.cep}</p>
                                        )
                                    }
                                )
                            }
                        </div>
                    </main>
                </body>
                <Footer />
            </div>
        );
    }
}