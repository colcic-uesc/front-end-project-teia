'use client'
import React from 'react'
import styles from './index.module.css' // Arquivo de estilos específicos
import { type loginTypeProps, loginValidation } from '@/validations/login'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

const LoginUser = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<loginTypeProps>(
    {
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(loginValidation),
      defaultValues: {
        username: '',
        password: ''
      }
    })

  const handleForm = async (data: loginTypeProps) => {
    try {
      const response = await axios.post('http://localhost:5088/login', {
        user_Name: data.username,
        password: data.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      console.log(response)
      if (response.status) {
        console.log('Login bem-sucedido!')
        // Redirecionar ou realizar outras ações após o login bem-sucedido
      }
    } catch (err: any) {
      console.error('Erro:', err.response.status)
      console.log('Erro ao fazer login')
    }
  }

  return (
        <section className={styles.loginFormSection}>
            <form className={styles.loginFormContainer} onSubmit={handleSubmit(handleForm)}>
                <div>
                <h2>Login</h2>

                    <label>Nome de Usuário:</label>
                    <input type="text" {...register('username')} />
                    {errors.username?.message && (<p className='text-red-500'>{errors.username.message}</p>)}
                </div>

                <div>
                    <label>Senha:</label>
                    <input type="password" {...register('password')} />
                    {errors.password?.message && (<p className='text-red-500'>{errors.password.message}</p>)}
                </div>

                <button type="submit">Entrar</button>
            </form>
            <p className='text-lg'>Não possui cadastro? <Link className='text-blue-500' href='/cadastro' >clique aqui.</Link></p>
        </section>
  )
}

export default LoginUser
