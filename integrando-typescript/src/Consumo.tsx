import React, { Component, ChangeEvent } from 'react'


interface Props {
  titulo: string
}

interface State{
  cep: number
  bairro: string
  logradouro: string
}

export default class Consumo extends Component<Props, State> {

  state = {
    cep: 0,
    bairro: '',
    logradouro: ''
  }

  consultarCep = (e: ChangeEvent | any) => {
    e.preventDefault()
    console.log(e)

    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        this.setState({ logradouro: resp.data.logradouro, bairro: resp.data.bairro})
      })
  }

  render() {
    const { logradouro, bairro } = this.state

    return (
      <div className="github">
        <div className="formulario">
          <form>
            <h1>{this.props.titulo}</h1>
            <input type="text" name="cep" id="cep" placeholder="CEP..." onChange={(e) => this.consultarCep(e)} />
            <input type="text" name="logradouro" id="logradouro" placeholder="Logradouro" value={logradouro} />
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" value={bairro} />
          </form>
        </div>
      </div>
    )
  }
}