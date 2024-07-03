import { z } from 'zod'

export const loginValidation = z.object({
  username: z.string().nonempty('Esse campo é obrigatório'),
  password: z.string().nonempty('Esse campo é obrigatório')
})

export type loginTypeProps = z.infer<typeof loginValidation>
