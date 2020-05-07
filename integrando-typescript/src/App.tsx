import React, { Component, ChangeEvent } from 'react'

import Consumo from './Consumo'

interface Local {
  buscarCep(text: string): void
  logradouro: string
  bairro: string
}

export default class App extends Component {
  state = { logradouro: '', bairro: '' };

  buscarCep = (text: any) => {

    fetch(`https://viacep.com.br/ws/${text.target.value}/json/`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ logradouro: resp.data.logradouro, bairro: resp.data.bairro })
      })
  }
  render() {
    const { logradouro, bairro } = this.state

    return (
      <div className="App">
        <div className="form">
          <form action="">
            <input type="text" name="cep" id="cep" placeholder="CEP..." onChange={(texto) => this.buscarCep(texto)} />
            <input type="text" name="logradouro" id="logradouro" placeholder="Logradouro" value={logradouro} />
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" value={bairro} />
          </form>
        </div>
        <div className="outroComponent">
          <Consumo titulo={'Formulario 2'} />
        </div>
      </div>
    )
  }
}