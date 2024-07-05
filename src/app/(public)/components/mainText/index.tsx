'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Maintext = () => {
  const router = useRouter()
  return (
            <div className="bg-cover bg-[url('/background.jpeg')] h-screen bg-">
              <div className="relative isolate px-6 pt-14 lg:px-8 bg-slate-700/60 h-screen">
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    As melhores experiências <br />Você encontra aqui
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#ced4da]">
                    Explorar o mundo é descobrir a si mesmo. Deixe cada viagem ser um novo capítulo da sua história, repleto de aventuras, descobertas e momentos inesquecíveis.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a type="button" onClick={async () => { router.push('/login') }}
                        className="rounded-md bg-slate-400 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-slate-600">
                        Login
                      </a>
                      <a type="button" onClick={async () => { router.push('/cadastro') }} className="rounded-md bg-[#333] px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-[#222]">
                        Cadastrar-se
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#003566] to-[#001d3d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  />
                </div>
              </div>
            </div>
  )
}
export default Maintext
