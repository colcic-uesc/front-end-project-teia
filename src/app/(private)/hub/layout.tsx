import React from 'react'
import type { Metadata } from 'next'
import Header, { type liProps } from '@/components/hubHeader'
import PrivateProvider from './components/provider'

export const metadata: Metadata = {
  title: 'Client - HUB',
  description: 'hub de gerenciamento de pacotes'
}
const li: liProps[] = [
  { href: '/hub', name: 'Meus Pacotes' },
  { href: '/hub/profile', name: 'Perfil' },
  { href: '/hub/packages', name: 'Comprar Pacotes' }
]

export default function ClientLayout ({
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
