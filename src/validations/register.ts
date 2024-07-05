import { z } from 'zod'
import { loginValidation } from './login'

// Validação para o cadastro
export const registerValidation = z.object({
  fullname: z.string().nonempty('Esse campo é obrigatório'),
  // eslint-disable-next-line no-useless-escape
  cpf: z.string().nonempty('Esse campo é obrigatório').refine((val) => /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/.test(val ?? ''), 'CPF inválido'),
  email: z.string().nonempty('Esse campo é obrigatório').email('Email inválido'),
  confirmPassword: z.string()
}).merge(loginValidation).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword']
})

export type registerTypeProps = z.infer<typeof registerValidation>

// Validação para o PUT do perfil
export const updateRegisterValidation = z.object({
  fullname: z.string().nonempty('Esse campo é obrigatório'),
  username: z.string().nonempty('Esse campo é obrigatório'),
  email: z.string().nonempty('Esse campo é obrigatório').email('Email inválido')
})

export type updateRegisterTypeProps = z.infer<typeof updateRegisterValidation>
