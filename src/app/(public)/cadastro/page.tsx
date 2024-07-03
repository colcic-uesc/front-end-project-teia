'use client'
import React from 'react'
import styles from './index.module.css' // Arquivo de estilos específicos da LandingPage
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerValidation, type registerTypeProps } from '@/validations/register'

const RegisterUser = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<registerTypeProps>(
    {
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(registerValidation),
      defaultValues: {
        fullname: '',
        username: '',
        email: '',
        password: '',
        cpf: '',
        role: ''
      }
    })

  async function handleForm (data: registerTypeProps) {
    try {
      const response = await axios.post('http://localhost:5088/users/create_account', {
        full_Name: data.fullname,
        cpf: data.cpf,
        password: data.password,
        email: data.email,
        user_Name: data.username,
        role: data.role
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status) {
        console.log('Usuário cadastrado com sucesso!')
      }
    } catch (error) {
      console.error('Erro:', error)
      console.log('Erro ao cadastrar usuário')
    }
  }

  return (
        <section className={styles.registerFormSection}>
          <form className={styles.formContainer} onSubmit={handleSubmit(handleForm)}>
              <h2 className='self-center'>Cadastro</h2>
              <div>
                  <label>Nome Completo:</label>
                  <input type="text" {...register('fullname')} />
                  {errors.fullname?.message && (<p className='text-red-500'>{errors.fullname.message}</p>)}
              </div>
              <div>
                  <label>CPF:</label>
                  <input type="text" {...register('cpf')} />
                  {errors.cpf?.message && (<p className='text-red-500'>{errors.cpf.message}</p>)}
              </div>

              <div>
                  <label>Email:</label>
                  <input type="email" {...register('email')} />
                  {errors.email?.message && (<p className='text-red-500'>{errors.email.message}</p>)}
              </div>

              <div>
                  <label>Senha:</label>
                  <input type="password" {...register('password')} />
                  {errors.password?.message && (<p className='text-red-500'>{errors.password.message}</p>)}
              </div>

              <div>
                  <label>Nome de Usuário:</label>
                  <input type="text" {...register('username')} />
                  {errors.username?.message && (<p className='text-red-500'>{errors.username.message}</p>)}
              </div>
              <div>
                  <label>Role:</label>
                  <input type="text" {...register('role')} />
                  {errors.role?.message && (<p className='text-red-500'>{errors.role.message}</p>)}
              </div>
              <button type="submit">Cadastrar</button>
          </form>
        </section>
  )
}

export default RegisterUser
