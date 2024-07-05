'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/provider'

export type liProps = {
  name: string
  href: string
}

type headerProps = {
  li: liProps[]
}

const Header = ({ li }: headerProps) => {
  const { user } = useContext(AuthContext)
  return (
        <nav className='mt-20 w-full flex flex-row justify-center items-center'>
            <ul className='w-1/2 flex flex-row justify-between items-center'>
                {
                    li.map((el, index) => {
                      if (el.name === 'Perfil') {
                        return (
                            <li key={index}><Link href={`${el.href}/${user?.user_Id}`}>{el.name}</Link></li>
                        )
                      } else {
                        return (
                                <li key={index}><Link href={el.href}>{el.name}</Link></li>
                        )
                      }
                    })
                }
            </ul>
        </nav>
  )
}

export default Header
