import React from 'react';
import Inicio from './Inicio';
import Carousel from './Carousel';
import Servicos from './Servicos'; // Importando o componente Servicos
import BuyPackage from './Buypackage'; // Importando o componente BuyPackage
import Contato from './Contato';
import './css/LandingPage.css'; // Arquivo de estilos específicos da LandingPage

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section id="home" className="section">
        {/* Seção de Início */}
        <Inicio />
      </section>

      <section id="destinations" className="section">
        {/* Seção de Destinos com Carousel */}
        <Carousel />
      </section>

      <section id="services" className="section">
        {/* Seção de Serviços */}
        <Servicos />
      </section>

      <section id="buy-package" className="section">
        {/* Seção de Compra de Pacote */}
        <BuyPackage />
      </section>

      <section id="contact" className="section">
        {/* Seção de Contato */}
        <Contato />
      </section>

    </div>
  );
};

export default LandingPage;
