import { z } from 'zod'
import { loginValidation } from './login'

export const registerValidation = z.object({
  fullname: z.string().nonempty('Esse campo é obrigatório'),
  // eslint-disable-next-line no-useless-escape
  cpf: z.string().nonempty('Esse campo é obrigatório').refine((val) => /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/.test(val ?? ''), 'CPF inválido'),
  email: z.string().nonempty('Esse campo é obrigatório').email('Email inválido'),
  role: z.string().nonempty('Esse campo é obrigatório')
}).merge(loginValidation)

export type registerTypeProps = z.infer<typeof registerValidation>
