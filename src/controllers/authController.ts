import { User } from "@prisma/client";
import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function createUser(req: Request, res: Response) {
  const body: User = req.body;

  await authService.createUser(body);

  res.status(201).send("Usuário criado com sucesso!");
}

export async function loginUser(req: Request, res: Response) {
  const body: User = req.body;

  const token = await authService.loginUser(body);

  res.status(200).send(token);
}
