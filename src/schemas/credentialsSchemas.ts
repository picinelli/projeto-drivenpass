import joi from "joi"

export const createCredentialSchema = joi.object({
  title: joi.string().required(),
  username: joi.string().required(),
  url: joi.string().uri().required(),
  password: joi.string().required(),
  userId: joi.number().required()
})