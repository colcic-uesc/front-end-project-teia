'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Maintext = () => {
  const router = useRouter()
  return (
        <section className='w-screen h-auto p-8 mt-16 flex flex-col justify-start gap-8'>
            <article className='w-full flex flex-col items-start justify-center gap-6'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h2 className='text-5xl font-bold'>As melhores experiências</h2>
                    <h2 className='text-5xl font-bold'>Você encontra aqui</h2>
                </div>
                <p className='w-1/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
            <div className='w-auto flex flex-row justify-start gap-6'>
                <button className='bg-slate-400 h-10 px-8 rounded-lg drop-shadow-lg font-medium text-gray-200 text-center'
                type="button" onClick={async () => { router.push('/login') }} >Login</button>

                <button className='bg-slate-600 h-10 px-8 rounded-lg drop-shadow-lg font-medium text-gray-200 text-center'
                type="button" onClick={async () => { router.push('/cadastro') }} >Cadastre-se</button>
            </div>
        </section>
  )
}
export default Maintext
