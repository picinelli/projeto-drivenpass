import { Card } from "@prisma/client"
import joi from "joi"

export const createCardSchema = joi.object<Card>({
  title: joi.string().required(),
  number: joi.string().required(),
  name: joi.string().required(),
  securityCode: joi.string().required(),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  virtual: joi.boolean().required(),
  type: joi.valid("CREDITO", "DEBITO", "AMBOS").required()
})