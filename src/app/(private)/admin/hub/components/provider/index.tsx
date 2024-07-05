import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

// Tipagem para receber parametros do decode jwt de acordo com o index, e o valor. ex: 'role': 'client'
type decodeProps = Record<string, string | number>

// Rota Privada: Verifica se a role é administrador, caso nn seja, encaminha para as paginas do client
export default function PrivateProvider ({ children }: { children: React.ReactElement }) {
  let decode: decodeProps = {}
  // Pega o token do cookie
  const getToken = cookies().get('token')?.value
  if (getToken) { decode = jwtDecode(getToken) }

  if (decode.role === 'admin') {
    return (
                <section>
                    {children}
                </section>
    )
  } else {
    redirect('/hub')
  }
}
