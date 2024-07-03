'use client'
import React, { createContext, useState } from 'react'
import { type loginTypeProps } from '@/validations/login'
import axios from 'axios'
import { setCookie } from 'cookies-next'

type userProps = {
  user_Id: string
  full_Name: string
  role: string
}

type AuthContextProps = {
  isAuth: boolean
  user: userProps | null
  SignIn: (data: loginTypeProps) => Promise<number>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider ({ children }: { children: React.ReactElement }) {
  const [user, setUser] = useState<userProps | null>(null)
  const isAuth = !!user
  async function SignIn ({ username, password }: loginTypeProps) {
    try {
      const response = await axios.post('http://localhost:5088/login', {
        user_Name: username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      console.log('provider', response)
      setUser(response.data.user)
      setCookie('token', response.data.token)
      return response.status
    } catch (err: any) {
      return err.response.status
    }
  }

  return (
    <AuthContext.Provider value={{ isAuth, user, SignIn }}>
        {children}
    </AuthContext.Provider>
  )
}
