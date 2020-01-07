import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lista : [],
      nome : ""      
    }

    this.atualizaNome = this.atualizaNome.bind(this);
    this.buscarRepositorios = this.buscarRepositorios.bind(this);

  }

  buscarRepositorios(event){
    event.preventDefault();

    // Mostrando os 10 primeiros repositórios criados
    // fetch('https://api.github.com/users/' + this.state.nome + '/repos?sort=created&per_page=10&direction=asc',{
    
    fetch('https://api.github.com/users/' + this.state.nome + '/repos?sort=created&per_page=10',{
      headers : {
        Authorization : "Basic c2F1bG8ubWFjZWRvcHJvamV0b3NAZ21haWwuY29tOlNhdWxvbWFjZWRvMTI="
      }
    })
    .then(resposta => resposta.json())
    .then(data => this.setState({lista : data}))
    .catch((erro) => console.log(erro))
  }

  atualizaNome(event){
    this.setState({nome : event.target.value})
  }

  render() {
    return (
      <div>
        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-entrada">
            <h2 className="conteudoPrincipal-entrada-titulo">Informe o nome de usuário para listar os repositórios</h2>
            <form onSubmit={this.buscarRepositorios}>
              <div className="container">
                <input
                  type="text"
                  onChange={this.atualizaNome}
                  id="nome-usuario"
                  placeholder="Nome do usuário"
                />
                <button className="conteudoPrincipal-btn conteudoPrincipal-btn-listar">Listar</button>
              </div>
            </form>
          </section>

          <section className="conteudoPrincipal-lista">
            <h2 className="conteudoPrincipal-lista-titulo">Lista de repositórios</h2>
              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Descrição</th>
                    <th>Data de criação</th>
                    <th>Tamanho</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    this.state.lista.map(function(repositorio){
                      return (
                        <tr key={repositorio.id}>
                          <td>{repositorio.id}</td>
                          <td>{repositorio.name}</td>
                          <td>{repositorio.description}</td>
                          <td>{repositorio.created_at}</td>
                          <td>{repositorio.size} Kb</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
