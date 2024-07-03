import React from 'react'
import styles from './index.module.css' // Importe o arquivo de estilos específicos

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Agência de Viagens. Todos os direitos reservados.</p>
        <nav>
          <ul className={styles.footerLinks}>
            <li><a href="#privacy-policy">Política de Privacidade</a></li>
            <li><a href="#terms-of-service">Termos de Serviço</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
