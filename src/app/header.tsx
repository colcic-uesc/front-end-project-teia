'use client'
import React, { useContext } from 'react'
import styles from './index.module.css' // Importe o arquivo de estilos do cabeçalho
import Link from 'next/link'
import { AuthContext } from '@/provider'

const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Agência de Viagens</h1>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href='/'>Início</Link></li>
            <li><Link href="/#destinations">Destinos</Link></li>
            {user?.role === 'client' && <li><Link href='/hub/packages'>Comprar seu pacote</Link></li>}
            <li><a href="/#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
