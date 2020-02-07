import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./componentes/conversor"

class App extends Component {
  render() {
    return(
      <div className="App">
      <h1>Conversor de moedas</h1>

      <div className="linha"> 
        <Conversor moedaA="USD" moeda="BRL"></Conversor>
        <conversor moedaB="BRL" moeda="USD"></conversor>
        </div>

        <div className="linha"> 
        <Conversor moedaA="CAD" moeda="BRL"></Conversor>
        <conversor moedaB="BRL" moeda="CAD"></conversor>
        </div>

        <div className="linha"> 
        <Conversor moedaA="EUR" moeda="BRL"></Conversor>
        <conversor moedaB="BRL" moeda="EUR"></conversor>
        </div>



    </div>
  );
}

export default App;
