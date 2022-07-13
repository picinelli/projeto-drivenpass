import { Request, Response } from "express";
import * as notesService from "../services/notesService.js"
import { Note } from "@prisma/client";



export async function createNote(req: Request, res: Response) {
  const userId: number = res.locals.token.userId
  const noteData: Note = {...req.body, userId: userId};

  await notesService.createNote(noteData)

  res.status(201).send("Nota criada com sucesso!");
}