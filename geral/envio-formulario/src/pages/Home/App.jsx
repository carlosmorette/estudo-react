import React, { Component } from 'react'
import './app.css'
import '../card.css'
import Modal from '../Modal/Modal'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cep: '',
      logradouro: '',
      bairro: '',
      // erro: false,
      modal: false,
      corpo: true
    }

    this.buscarCep = this.buscarCep.bind(this)
    this.enviarDados = this.enviarDados.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  enviarDados(e) {
    e.preventDefault()
    // this.setState({ erro: true })
    this.setState({ modal: true, corpo: false })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  buscarCep(e) {
    e.preventDefault()
    let cep = e.target.value.replace('-', '').replace('/', '')

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.status === 200 ? resp.json() : null)
        .then(data => this.setState({ logradouro: data.logradouro, bairro: data.bairro, cep: data.cep }))

    } else if (cep.length < 8 || cep.length > 8) {
      this.setState({ logradouro: '', bairro: '' })
    }
  }

  render() {
    return (
      <div className="geral">
        {

          this.state.corpo === true &&

          <div className="formulario">
            <h3>Formulario de Cadastro</h3>
            <form className="formulario" onSubmit={this.enviarDados}>
              <input
                placeholder="Nome..."
                name="nome"
                onChange={this.onChange}
                required
              />
              <input
                type="email"
                placeholder="E-mail..."
                name="email"
                onChange={this.onChange}
                required
              />
              <input
                placeholder="Digite seu CEP..."
                name="cep"
                onChange={this.buscarCep}
                required
              />
              <input
                placeholder="Logradouro"
                value={this.state.logradouro}
                disabled
                name="logradouro"
                onChange={this.onChange}
              />
              <input
                placeholder="Bairro"
                value={this.state.bairro}
                disabled
                name="bairro"
                onChange={this.onChange}
              />
              <button>Enviar</button>
            </form>
          </div>
          /* <div>
            {
              this.state.erro === true &&
              <div className="alert-sucess">
                Dados enviados com sucesso!
            </div>
            }
          </div> */
        }
        {
          this.state.modal === true &&
          <Modal nome={this.state.nome} email={this.state.email} cep={this.state.cep} logradouro={this.state.logradouro} bairro={this.state.bairro} />
        }
      </div>
    );
  }
}