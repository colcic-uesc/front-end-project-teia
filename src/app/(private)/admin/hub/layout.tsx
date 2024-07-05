import React from 'react'
import type { Metadata } from 'next'
import Header, { type liProps } from '@/components/hubHeader'
import PrivateProvider from './components/provider'

export const metadata: Metadata = {
  title: 'Admin - HUB',
  description: 'hub de gerenciamento de pacotes'
}
const li: liProps[] = [
  { href: '/profile', name: 'Perfil' },
  { href: '/', name: 'Pacotes' },
  { href: '/packages', name: 'Novo Pacote' }
]

export default function AdminLayout ({
  children
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section>
        <PrivateProvider>
            <>
            <Header li={li} />
            {children}
            </>
        </PrivateProvider>
    </section>
  )
}
