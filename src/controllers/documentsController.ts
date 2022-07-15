import { Document } from "@prisma/client";
import { Request, Response } from "express";
import { documentsService } from "../services/documentsService.js";
import throwError from "../utils/throwError.js";

export async function createDocument(req: Request, res: Response) {
  const userId: number = res.locals.token.userId;
  const documentData: Document = { ...req.body, userId: userId };

  await documentsService.createDocument(documentData);


  res.status(201).send("Document created successfully!");
}

export async function getDocument(req: Request, res: Response) {
  const id = req.params.id;
  const userId: number = res.locals.token.userId;
  if (!id || Number(id) === NaN) {
    throwError("Insert a valid id!");
  }

  const document = await documentsService.getDocument(Number(id), userId);

  res.status(200).send(document);
}

export async function getAllUserDocuments(req: Request, res: Response) {
  const userId: number = res.locals.token.userId

  const documents = await documentsService.getAllUserDocuments(userId)

  res.status(200).send(documents)
}

export async function deleteDocument(req: Request, res: Response) {
  const id = req.params.id
  const userId: number = res.locals.token.userId
  if(!id || Number(id) === NaN) {
    throwError("Insert a valid id!")
  }

  await documentsService.deleteDocument(Number(id), userId)

  res.status(200).send("Document deleted successfully!")
}