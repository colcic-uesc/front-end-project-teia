// GoToTop.jsx

import React, { useState, useEffect } from 'react';
import './css/gototop.css'; // Importe o arquivo de estilos específicos
import { FaArrowUp } from 'react-icons/fa'; // Importe o ícone de seta para cima do React Icons

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo a partir do topo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Adicionar um listener para verificar a posição de rolagem
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Função para rolar suavemente até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`go-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
      <FaArrowUp className="arrow-icon" /> {/* Ícone de seta para cima */}
    </div>
  );
};

export default GoToTop;
