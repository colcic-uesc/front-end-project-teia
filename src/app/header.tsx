// Header.js

import React from 'react'
import styles from './index.module.css' // Importe o arquivo de estilos do cabeçalho
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Agência de Viagens</h1>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href='/'>Início</Link></li>
            <li><a href="#destinations">Destinos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#buy-package">Comprar seu pacote</a></li>
            <li><a href="#cadastro">Cadastro</a></li>
            <li><a href="#Login">Login</a></li>
            <li><a href="#contact">Contato</a></li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
