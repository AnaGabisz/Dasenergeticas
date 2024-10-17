import React from 'react';
import './App.css';
import logo from './logo3.png'; // Certifique-se de que o logo está importado
import { FaUser } from 'react-icons/fa'; // Importando o ícone do usuário

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo-title rowdies-bold">Dasenergéticas</h1>
        <div className="header-top">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="search-bar"
          />
          <div className="user-area">
            <FaUser className="user-icon" />
            <span className="login-text">Entre ou 
              Cadastre-se</span>
          </div>
        </div>
        <img src={logo} className="logo" alt="logo" />
        <p className="introducao poppins-text">
          Olá, sou Ana Rodrigues, psicanalista, mentora, consultora, e vou guiar você para o seu autoconhecimento.
        </p>
        <div className="servicos poppins-text">
          <h2>Serviços:</h2>
          <ul>
           <li>Terapia Individual: R$ 251,00 por sessão</li>
           <li>Constelação Familiar: R$ 450,00 (presencial ou online)</li>
           <li>Constelação Familiar: R$ 648,00 (presencial + 1 sessão online)</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
