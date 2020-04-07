import React, { Component } from 'react'
import './app.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cep: "",
      logradouro: '',
      bairro: '',
      erro: false
    }

    this.buscarCep = this.buscarCep.bind(this)
  }

  buscarCep(e) {
    e.preventDefault()

    let cep = e.target.value.replace('-', '')

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(data => this.setState({
          logradouro: data.logradouro,
          bairro: data.bairro
        }))
    } else if (cep.length < 8) {
      this.setState({ logradouro: '', bairro: '' })
    }
  }

  render() {
    return (
      <div className="geral">
        <div className="formulario">
          <form className="formulario" onSubmit={this.enviarDados}>
            <input
              placeholder="Nome..."
              name="nome"
            />
            <input
              type="email"
              placeholder="E-mail..."
              name="email"
            />
            <input
              placeholder="Digite seu CEP..."
              name="cep"
              onChange={this.buscarCep}
            />
            <input
              placeholder="Logradouro"
              value={this.state.logradouro}
              disabled
            />
            <input
              placeholder="Bairro"
              value={this.state.bairro}
              disabled
            />
            <button>Enviar</button>
          </form>
        </div>
        {
          this.state.erro === true &&
          <div className="alert-sucess">
            A simple success alert—check it out!
          </div>
        }
      </div>
    );
  }
}

const inputs = {
  width: "300px"
}