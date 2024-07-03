import { z } from 'zod'
import { registerValidation } from './register'

export const packageValidation = z.object({
  birthDay: z.string().nonempty('Esse campo é obrigatório'),
}).merge(registerValidation)

export type packageTypeProps = z.infer<typeof packageValidation>
