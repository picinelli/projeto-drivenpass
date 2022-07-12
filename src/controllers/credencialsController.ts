import { Request, Response } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { createCredentialSchema } from "../schemas/credentialsSchemas.js";
import * as credentialsService from "../services/credentialsService.js"

export async function createCredential(req: Request, res: Response) {
  const body = req.body

  validateSchema(createCredentialSchema, body)

  await credentialsService.createCredential()

  res.send("deu certo")
}