import React from 'react';
import Slider from 'react-slick';
import './css/carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/image.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: image1,
      title: "Atenas",
      description: "Explore o berço da civilização ocidental em uma viagem mágica a Atenas. Caminhe pelas ruas que testemunharam o nascimento da democracia, descubra os antigos templos que ecoam histórias de deuses e deusas, e maravilhe-se com a Acropole, um ícone eterno da grandeza humana.",
    },
    {
      image: image2,
      title: "Itacaré",
      description: "Descubra o paraíso escondido de Itacaré, onde as águas azul-turquesa do Oceano Atlântico encontram praias intocadas e vegetação exuberante da Mata Atlântica. Aventure-se em trilhas pela selva, relaxe em praias desertas e mergulhe na energia vibrante desta jóia tropical do litoral brasileiro.",
    },
    {
      image: image3,
      title: "Veneza",
      description: "Perca-se na magia de Veneza, a cidade dos canais e dos palácios renascentistas. Navegue pelos tranquilos canais em gôndolas, descubra obras de arte icônicas em museus grandiosos e explore ruas estreitas que revelam segredos antigos em cada esquina. Deixe-se seduzir pelo romance eterno de uma das cidades mais fascinantes do mundo.",
    }
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content">
              <img src={slide.image} alt={slide.title} className="carousel-image" />
              <div className="carousel-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
