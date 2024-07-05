import { z } from 'zod'

export const packageValidation = z.object({
  fullname: z.string().nonempty('Esse campo é obrigatório'),
  // eslint-disable-next-line no-useless-escape
  cpf: z.string().nonempty('Esse campo é obrigatório').refine((val) => /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/.test(val ?? ''), 'CPF inválido'),
  email: z.string().nonempty('Esse campo é obrigatório').email('Email inválido'),
  birthDay: z.string().nonempty('Esse campo é obrigatório'),
  package: z.string().nonempty('Esse campo é obrigatório')
})

export type packageTypeProps = z.infer<typeof packageValidation>
