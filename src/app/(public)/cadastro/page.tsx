'use client'
import React from 'react'
import styles from './index.module.css' // Arquivo de estilos específicos da LandingPage
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerValidation, type registerTypeProps } from '@/validations/register'
import toast from 'react-hot-toast'
import { statusCode } from '@/enums/http'
import { useRouter } from 'next/navigation'

const RegisterUser = () => {
  const router = useRouter()
  const { handleSubmit, register, formState: { errors } } = useForm<registerTypeProps>(
    {
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(registerValidation),
      defaultValues: {
        fullname: '',
        username: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: ''
      }
    })

  async function handleForm (data: registerTypeProps) {
    try {
      const response = await axios.post('http://localhost:5088/users/create_account', {
        Full_Name: data.fullname,
        CPF: data.cpf,
        Password: data.password,
        Email: data.email,
        User_Name: data.username
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status === statusCode.Created) {
        toast.success('Usuário cadastrado com sucesso!')
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }
    } catch (error) {
      console.error('Erro:', error)
      toast.error('Erro ao cadastrar usuário')
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
                  <label>Nome de Usuário:</label>
                  <input type="text" {...register('username')} />
                  {errors.username?.message && (<p className='text-red-500'>{errors.username.message}</p>)}
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

              <div className='mb-5'>
                  <label>Confirme a Senha:</label>
                  <input type="password" {...register('confirmPassword')} />
                  {errors.confirmPassword?.message && (<p className='text-red-500'>{errors.confirmPassword.message}</p>)}
              </div>

              <button type="submit">Cadastrar</button>
          </form>
        </section>
  )
}

export default RegisterUser
