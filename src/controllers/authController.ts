import { Request, Response } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { userInfoSchema } from "../schemas/authSchemas.js";
import * as authService from "../services/authService.js";

export interface UserInfo {
  email: string,
  password: string
}

export async function createUser(req: Request, res: Response) {
  const body: UserInfo = req.body;

  validateSchema(userInfoSchema, body);

  await authService.createUser(body);

  res.status(201).send("Usuário criado com sucesso!");
}

export async function loginUser(req: Request, res: Response) {
  const body: UserInfo = req.body;

  validateSchema(userInfoSchema, body);

  const token = await authService.loginUser(body);

  res.status(200).send(token);
}
