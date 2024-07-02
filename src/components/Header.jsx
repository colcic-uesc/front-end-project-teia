// Header.js

import React from 'react';
import './css/header.css'; // Importe o arquivo de estilos do cabeçalho

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Agência de Viagens</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#destinations">Destinos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#buy-package">Comprar seu pacote</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
