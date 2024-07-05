'use client'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css' // Arquivo de estilos específicos
import axios from 'axios' // Importando axios para fazer requisições HTTP

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type packageTypeProps, packageValidation } from '@/validations/package'
import { getCookies } from 'cookies-next'

type travelPackageProps = {
  travel_Package_Id: string
  package_Details: string
  cost: number
  country: string
  region: string
  package_Name: string
  travel_Date: string
  users: []
  userFeedbacks: []
  suppliers: []
}

export default function BuyPackage () {
  const [packageDB, setpackageDB] = useState<travelPackageProps[]>([])
  const { handleSubmit, register, formState: { errors } } = useForm<packageTypeProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(packageValidation),
    defaultValues: {
      birthDay: '',
      email: '',
      cpf: '',
      fullname: '',
      package: ''
    }
  })

  useEffect(() => {
    void axios.get('http://localhost:5088/travelpackages', {
      headers: {
        Authorization: `Bearer ${getCookies('token').token}`
      }
    }).then(res => {
      setpackageDB(res.data)
    })
  })

  // Handler para enviar o formulário
  const handleForm = async (data: packageTypeProps) => {
    try {
      // Substitua a URL abaixo pela sua API ou endpoint de destino para enviar os dados
      const response = await axios.post('sua_url_de_destino', data)
      console.log(response.data) // Log da resposta da API, se necessário

      alert('Dados enviados com sucesso!') // Exemplo de mensagem de sucesso
    } catch (error) {
      console.error('Erro ao enviar dados:', error)
      alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.') // Mensagem de erro
    }
  }

  return (
    <div className={styles.buyPackage}>
      <h2>Compra de pacote</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className={styles.formGroup}>
          <label htmlFor="full_name">Nome Completo:</label>
          <input type="text" id="full_name" {...register('fullname')} />
          {errors.fullname?.message && (<p className='text-red-500'>{errors.fullname.message}</p>)}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" {...register('cpf')} /> </div>
        <div className={styles.formGroup}>
          <label htmlFor="birth_day">Data de Nascimento:</label>
          <input type="date" id="birth_day" {...register('birthDay')} />
          {errors.birthDay?.message && (<p className='text-red-500'>{errors.birthDay.message}</p>)}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email?.message && (<p className='text-red-500'>{errors.email.message}</p>)}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role">Pacote:</label>
          <select id="role" {...register('package')}>
            <option value="">Selecione o pacote</option>
            {packageDB.map((pacote, index) => (
              <option key={index} value={pacote.package_Name}>
                {pacote.country} - R$ {pacote.cost}
              </option>
            ))}
          </select>
          {errors.package?.message && (<p className='text-red-500'>{errors.package.message}</p>)}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
