'use client'
import React, { useContext } from 'react'
import styles from './index.module.css' // Arquivo de estilos específicos
import { type loginTypeProps, loginValidation } from '@/validations/login'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { AuthContext } from '@/provider'
import { useRouter } from 'next/navigation'
// import SignIn from '@/provider/signIn'

const LoginUser = () => {
  const router = useRouter()
  const { SignIn } = useContext(AuthContext)
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

  const handleForm = async ({ username, password }: loginTypeProps) => {
    try {
      const status = await SignIn({ username, password })
      console.log(status)
      toast.success('Login bem-sucedido!')
      setTimeout(() => {
        router.push('/profile')
      }, 1000)
    } catch (err) {
      console.log('Status Error:', status)
      toast.error('Erro ao fazer login')
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
