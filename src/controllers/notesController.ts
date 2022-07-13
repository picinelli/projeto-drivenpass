import { Request, Response } from "express";
import { Note } from "../repositories/notesRepository.js";
import throwError from "../utils/throwError.js";
import * as notesService from "../services/notesService.js"



export async function createNote(req: Request, res: Response) {
  const noteData: Note = req.body;
  const userId: number = res.locals.token.userId
  if(noteData.userId !== userId) throwError("userId Incorrect")

  await notesService.createNote(noteData, userId)

  res.status(201).send("Nota criada com sucesso!");
}