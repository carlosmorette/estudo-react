import React, { Component } from 'react';
import './app.css'
import logo from './imagens/logo-git.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      urlFoto: '',
      repositorios: []
    }

    this.buscarUsuario = this.buscarUsuario.bind(this)
  }

  buscarUsuario(e) {
    e.preventDefault()

    console.log(e)

    let usuarioProcurado = e.target.children[0].value
    console.log(usuarioProcurado)

    // Fizemos a requisição do usuário
    fetch(`https://api.github.com/users/${usuarioProcurado}`)
      .then(resp => resp.json())
      .then(data => this.setState({ nome: data.login, urlFoto: data.avatar_url }))

    // Fizemos a requisição dos repositórios do usuário
    fetch(`https://api.github.com/users/${usuarioProcurado}/repos`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({ repositorios: data})
      
    })
  }

  render() {
    return (
      <div>
        <div className="tudo">
          <div className="formulario">
            <h2>Pesquisar Usuário GitHub</h2>
            <form onSubmit={this.buscarUsuario}>
              <input name="usuarioProcurado" type="text" placeholder="Nome do usuário..." required />
              <button>Buscar</button>
            </form>
          </div>
        </div>
        <hr /><br /><br />
        <div className="dados">
          {
            // Caso o state urlFoto for estritamente diferente de nulo então renderiza o que pedimos
            this.state.urlFoto !== '' ? 
            <div className="usuario">
              <img src={this.state.urlFoto} />
              <p>Nome: {this.state.nome}</p>
              <table>
                <thead>
                  <tr>
                    <td><h2>Repositórios</h2></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {
                      // Percorremos o state e renderiamos o nome do repositório
                      this.state.repositorios.map((e, index) => {
                        return(
                          <td key={index}>{e.name}</td>
                        )
                      })
                    }
                  </tr>
                </tbody>
              </table>

            </div> :
              <img src={logo} />
          }
        </div>
      </div>
    )
  }
}

export default App