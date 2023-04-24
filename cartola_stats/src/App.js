import { Component, useState} from 'react';
import api from './services/api'

import CardJogador from './CardJogador';

class App extends Component{

  state = {
    infos: [],
    clubes: [], //todo
    atletas: [],
    pesquisa: "",
    pesquisado:""
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({atletas: response.data.atletas})
  }


  render(){

    const { atletas, pesquisa, pesquisado } = this.state;

    const handleChange = (event) => {
      this.setState({pesquisa: event.target.value});
    };

    const handleClick = () => {
      this.setState({pesquisado: pesquisa})
    }
    
    const lowerPesquisado = pesquisado.toLowerCase();
    const atletasFiltrados = atletas
      .filter((atleta) => atleta.apelido.toLowerCase().includes(lowerPesquisado));

    const atletasPrintados = atletasFiltrados.slice(0,9);

    return(
      <div>
        <h1>INFOS CARTOLA</h1>
        <hr/>
        <input type="text" value= {pesquisa} onChange = {handleChange}/>
        <button onClick={handleClick}>Pesquisar</button>
        <hr/>
          
          {console.log(atletas)}
          {atletasPrintados.map(atleta => (
            <li key={atleta.atleta_id}>
              <CardJogador  nome={atleta.apelido} 
              minimo_para_valorizar={atleta.minimo_para_valorizar}/>
            </li>
          ))}
      </div>
    )
  }
}
export default App;
