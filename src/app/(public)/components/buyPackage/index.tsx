'use client'
import React from 'react'
import styles from './index.module.css' // Arquivo de estilos específicos
import axios from 'axios' // Importando axios para fazer requisições HTTP

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type packageTypeProps, packageValidation } from '@/validations/package'


  const pacotes = [
    { destino: 'Atenas', preco: 1000 },
    { destino: 'Itacaré', preco: 800 },
    { destino: 'Veneza', preco: 1200 }
  ]


 export default function BuyPackage(){ 
  const { handleSubmit, register, formState: { errors } } = useForm<packageTypeProps>({
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(packageValidation),
      defaultValues: {
        birthDay: '',
        email: '',
        cpf: '',
        fullname: '',
        password: '',
        role: '',
        username: ''
      }
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
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" {...register('password')} />
          {errors.password?.message && (<p className='text-red-500'>{errors.password.message}</p>)}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email?.message && (<p className='text-red-500'>{errors.email.message}</p>)}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="user_name">Nome de Usuário:</label>
          <input type="text" id="user_name" {...register('username')} />
          {errors.username?.message && (<p className='text-red-500'>{errors.username.message}</p>)}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role">Pacote:</label>
          <select id="role" {...register('role')}>
            <option value="">Selecione o pacote</option>
            {pacotes.map((pacote, index) => (
              <option key={index} value={pacote.destino}>
                {pacote.destino} - R$ {pacote.preco}
              </option>
            ))}
          </select>
          {errors.role?.message && (<p className='text-red-500'>{errors.role.message}</p>)}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
