import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
// import { Link } from 'react-router-dom';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      cep: ""
    }

    this.enviardados = this.enviardados.bind(this)
  }

  enviardados(e) {
    e.preventDefault();

    fetch('https://viacep.com.br/ws/' + this.state.cep + '/json/')
      .then(response => response.json())
      .then(response => this.setState({ lista: response }))
  }

  pegardados = (c) => {
    this.setState({ cep: c.target.value })
  }

  render() {
    return (
      <div className="Home" >
        <Header />
        <h1>VIACEP</h1>
        <div className="Conteudo">
          <form onSubmit={this.enviardados}>
            <label>CEP</label>
            <input
              name="cep"
              type="text"
              placeholder="CEP..."
              onChange={this.pegardados}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="return">
          <p>Logradouro: {this.state.lista.logradouro}</p>
          <p>Bairro: {this.state.lista.bairro}</p>
          <p>Localidade: {this.state.lista.localidade}</p>

        </div>
        <Footer />
      </div >
    );
  };
}
export default Home;