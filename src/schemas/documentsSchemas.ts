import Joi from "joi";

export const createDocumentSchema = Joi.object({
  type: Joi.string().valid("RG", "CNH").required(),
  name: Joi.string().required(),
  issueDate: Joi.date().required(),
  expirationDate: Joi.date().required(),
  number: Joi.string().required(),
  agency: Joi.string().required()
})