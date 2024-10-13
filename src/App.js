import React from 'react';
import './App.css';
import logo from './logo3.png'; // Certifique-se de que o logo está importado

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo-title rowdies-bold">Dasenergéticas</h1> {/* Classe para a fonte */}
        <div className="header-top">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="search-bar"
          />
        </div>
        <img src={logo} className="logo" alt="logo" />
        <p className="introducao rowdies-regular">
          Olá, sou Ana Rodrigues, psicanalista, mentora, consultora, e vou guiar você para o seu autoconhecimento.
        </p>
        <div className="servicos">
          <h2 className="rowdies-bold">Serviços:</h2> {/* Classe para a fonte */}
          <ul>
            <li>Terapi a Individual: R$ 251,00 por sessão</li>
            <li>Constelação Familiar: R$ 450,00 (presencial ou online)</li>
            <li>Constelação Familiar: R$ 648,00 (presencial + 1 sessão online)</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
