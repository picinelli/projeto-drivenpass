import joi from "joi"

export const createWifiSchema = joi.object({
  title: joi.string().required(),
  name: joi.string().required(),
  password: joi.string().required()
})