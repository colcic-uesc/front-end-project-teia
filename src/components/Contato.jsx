// Contato.jsx

import React from 'react';
import './css/contato.css'; // Importe o arquivo de estilos para Contato

const Contato = () => {
  return (
    <div className="contato-container">
      <h2>Contato</h2>
      <p><strong>Email:</strong> contato@agenciadeviagem.com</p>
      <p><strong>Telefone:</strong> +55 (11) 1234-5678</p>
      <p><strong>Localização:</strong> Av. Principal, 123 - Centro, Cidade, Estado</p>
    </div>
  );
};

export default Contato;
