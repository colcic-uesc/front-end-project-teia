import React from 'react'
import styles from './index.module.css'

const Servicos = () => {
  const pacotes = [
    { destino: 'Atenas', preco: 1000 },
    { destino: 'Itacaré', preco: 800 },
    { destino: 'Veneza', preco: 1200 }
  ]

  return (
    <div className={styles.servicosContainer}>
      <h2>Preço por pessoa</h2>
      <ul>
        {pacotes.map((pacote, index) => (
          <li key={index}>
            {`${pacote.destino}: R$ ${pacote.preco}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Servicos
