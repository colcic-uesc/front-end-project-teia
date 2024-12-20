import React from 'react'
import Inicio from './components/inicio'
import Carousel from './components/carousel'
import Servicos from './components/services' // Importando o componente Servicos
import Contato from './components/contato'
import styles from './index.module.css' // Arquivo de estilos específicos da LandingPage
import Maintext from './components/mainText'

const LandingPage = () => {
  return (
    <main className={styles.landingPage}>
      <Maintext />

      <section id="home" className={styles.section}>
        {/* Seção de Início */}
        <Inicio />
      </section>

      <section id="destinations" className={styles.section}>
        {/* Seção de Destinos com Carousel */}
        <Carousel />
      </section>

      <section id="contact" className={styles.section}>
        <Contato />
      </section>

    </main>
  )
}

export default LandingPage
