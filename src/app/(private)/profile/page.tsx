'use client'
import { AuthContext } from '@/provider'
import React, { useContext } from 'react'

export default function Profile () {
  const { user, isAuth } = useContext(AuthContext)
  console.log(user, isAuth)
  return <h1>Oi</h1>
}
