'use server'
import { type loginTypeProps } from '@/validations/login'
import axios from 'axios'
import { cookies } from 'next/headers'

export default async function SignIn ({ username, password }: loginTypeProps) {
  try {
    const response = await axios.post('http://localhost:5088/login', {
      user_Name: username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    cookies().set({
      name: 'token',
      value: response.data.token
    })

    return response.status
  } catch (err: any) {
    return err.response.status
  }
}
