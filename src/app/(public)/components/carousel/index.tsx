'use client'
import React from 'react'
import Slider from 'react-slick'
import styles from './index.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const slides = [
    {
      image: '/image.jpeg',
      title: 'Atenas',
      description: 'Explore o berço da civilização ocidental em uma viagem mágica a Atenas. Caminhe pelas ruas que testemunharam o nascimento da democracia, descubra os antigos templos que ecoam histórias de deuses e deusas, e maravilhe-se com a Acropole, um ícone eterno da grandeza humana.'
    },
    {
      image: '/image2.jpeg',
      title: 'Itacaré',
      description: 'Descubra o paraíso escondido de Itacaré, onde as águas azul-turquesa do Oceano Atlântico encontram praias intocadas e vegetação exuberante da Mata Atlântica. Aventure-se em trilhas pela selva, relaxe em praias desertas e mergulhe na energia vibrante desta jóia tropical do litoral brasileiro.'
    },
    {
      image: '/image3.jpeg',
      title: 'Veneza',
      description: 'Perca-se na magia de Veneza, a cidade dos canais e dos palácios renascentistas. Navegue pelos tranquilos canais em gôndolas, descubra obras de arte icônicas em museus grandiosos e explore ruas estreitas que revelam segredos antigos em cada esquina. Deixe-se seduzir pelo romance eterno de uma das cidades mais fascinantes do mundo.'
    }
  ]

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.carouselSlide}>
            <div className={styles.carouselContent}>
              <Image width={1000} height={1000} src={slide.image} alt={slide.title} className={styles.carouselImage} />
              <div className={styles.carouselText}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
