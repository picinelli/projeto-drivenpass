import { Credential } from "@prisma/client";
import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsService.js"
import throwError from "../utils/throwError.js";

export async function createCredential(req: Request, res: Response) {
  const userId: number = res.locals.token.userId
  const credentialData: Credential = {...req.body, userId: userId};

  await credentialsService.createCredential(credentialData)

  res.status(201).send("Credential created successfully!");
}

export async function getCredential(req: Request, res: Response) {
  const id = req.params.id
  const userId: number = res.locals.token.userId
  if(!id || Number(id) === NaN) {
    throwError("Insert a valid id!", 400)
  }

  const credential = await credentialsService.getCredential(Number(id), userId)

  res.status(200).send(credential)
}

export async function getAllUserCredentials(req: Request, res: Response) {
  const userId: number = res.locals.token.userId

  const credentials = await credentialsService.getAllUserCredentials(userId)

  res.status(200).send(credentials)
}

export async function deleteCredential(req: Request, res: Response) {
  const id = req.params.id
  const userId: number = res.locals.token.userId
  if(!id || Number(id) === NaN) {
    throwError("Insert a valid id!", 400)
  }

  await credentialsService.deleteCredential(Number(id), userId)

  res.status(200).send("Credential deleted successfully!")
}
