import React, { Component } from 'react'
import {Avo} from './Familia'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Componentes:</h1>
        <div className="familia">
          <Avo nome="Joao" sobrenome="Silva"/>
        </div>
      </div>
    );
  }
}