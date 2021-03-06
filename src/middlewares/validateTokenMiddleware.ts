import { NextFunction, Request, Response } from "express";
import { verifySession } from "../repositories/authRepository.js";
import throwError from "../utils/throwError.js";

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) return throwError("Token nao encontrado", 401);

  const token = authorization.replace("Bearer", "").trim();
  const dbToken = await verifySession(token);
  if (!dbToken) throwError("Token nao encontrado", 404);

  res.locals.token = dbToken

  next();
}
