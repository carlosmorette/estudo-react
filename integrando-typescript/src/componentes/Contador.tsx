import React, { Component } from 'react'
import ContadorValor from './ContadorValor'
import './Contador.css'
import logRender from '../decorators/logRender'

interface IContadorProps {
  valorInicial?: number
}

interface IContadorState {
  valor: number
}

// Usamos Generics para resolver os tipos da classe
@logRender
export default class Contador extends Component<IContadorProps, IContadorState>{
  public state = {
    // O valor recebe a prop valorInicial
    valor: this.props.valorInicial || 0
  }

  private setValor = (delta: number) => {
    this.setState({
      valor: this.state.valor + delta
    })
  }
  render() {
    return (
      <div>
        <ContadorValor contador={this.state.valor} />
        <button onClick={() => this.setValor(10)}>+</button>
        <button onClick={() => this.setValor(-10)}>-</button>
      </div>
    );
  }
}