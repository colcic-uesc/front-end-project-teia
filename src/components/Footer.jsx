import React from 'react';
import './css/footer.css'; // Importe o arquivo de estilos específicos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Agência de Viagens. Todos os direitos reservados.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="#privacy-policy">Política de Privacidade</a></li>
            <li><a href="#terms-of-service">Termos de Serviço</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
