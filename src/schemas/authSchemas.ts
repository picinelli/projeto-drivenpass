import joi from "joi"

export const userInfoSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(10).required()
})