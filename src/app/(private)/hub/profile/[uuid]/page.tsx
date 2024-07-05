'use client'
import React, { useEffect, useState } from 'react'
import { getCookies } from 'cookies-next'
import axios from 'axios'
// React hook form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// Components
import { Input } from '@/components/ui/input'

// Validations
import { updateRegisterValidation, type updateRegisterTypeProps } from '@/validations/register'

// Icons
import { FaEdit } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { statusCode } from '@/enums/http'
import toast from 'react-hot-toast'

export default function Profile ({ params }: { params: { uuid: string } }) {
  const { handleSubmit, register, reset, formState: { errors } } = useForm<updateRegisterTypeProps>(
    {
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(updateRegisterValidation),
      defaultValues: {
        fullname: '',
        username: '',
        email: ''
      }
    })

  const [btnEdit, setBtnEdit] = useState<Record<string, boolean>>({
    fullname: true,
    username: true,
    email: true
  })

  useEffect(() => {
    void axios.get(`http://localhost:5088/users/profile/${params.uuid}`, {
      headers: {
        Authorization: `Bearer ${getCookies('token').token}`
      }
    })
      .then(res => {
        reset({
          fullname: res.data.full_Name,
          username: res.data.user_Name,
          email: res.data.email
        })
      })
  }, [reset])

  const updateForm = async ({ username, fullname, email }: updateRegisterTypeProps) => {
    try {
      const response = await axios.put(`http://localhost:5088/users/update_account/${params.uuid}`,
        {
          full_Name: fullname,
          user_Name: username,
          email
        },
        {
          headers: {
            Authorization: `Bearer ${getCookies('token').token}`
          }
        }
      )

      if (response.status === statusCode.OK) {
        toast.success('As Alterações foram feitas!')
      }
    } catch (err) {
      console.log('Status Error:', err)
      toast.error('Erro ao tentar fazer as Alterações')
    }
  }

  return (
    <section className='h-screen w-full flex flex-col justify-start pt-12 items-center'>
      <form onSubmit={handleSubmit(updateForm)} className='flex flex-col w-2/3 px-4 gap-10'>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Perfil do Usuário</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Informações do usuário.</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Nome Completo</dt>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-4'>
                <Input disabled={btnEdit.fullname} type="text" id="email" placeholder="Email" {...register('fullname')}/>
                <a onClick={() => { setBtnEdit({ ...btnEdit, fullname: !btnEdit.fullname }) }}><FaEdit className='w-6 h-6' /></a>
                {errors.fullname?.message && (<p className='text-red-500'>{errors.fullname.message}</p>)}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Nome de Usuário</dt>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-4'>
              <Input disabled={btnEdit.username} type="text" id="email" placeholder="Email" {...register('username')}/>
              <a onClick={() => { setBtnEdit({ ...btnEdit, username: !btnEdit.username }) }}><FaEdit className='w-6 h-6'/></a>
              {errors.username?.message && (<p className='text-red-500'>{errors.username.message}</p>)}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-4'>
                <Input disabled={btnEdit.email} type="email" id="email" placeholder="Email" {...register('email')}/>
                <a onClick={() => { setBtnEdit({ ...btnEdit, email: !btnEdit.email }) }}><FaEdit className='w-6 h-6'/></a>
                {errors.email?.message && (<p className='text-red-500'>{errors.email.message}</p>)}
              </div>
            </div>
          </dl>
        </div>
        <Button type='submit' className='mt-5 w-1/2 self-center'>Fazer Alterações</Button>
      </form>
    </section>
  )
}
