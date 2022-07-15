import { Request, Response } from "express";
import * as notesService from "../services/notesService.js";
import { Note } from "@prisma/client";
import throwError from "../utils/throwError.js";

export async function createNote(req: Request, res: Response) {
  const userId: number = res.locals.token.userId;
  const noteData: Note = { ...req.body, userId: userId };

  await notesService.createNote(noteData);

  res.status(201).send("Note created successfully!");
}

export async function getNote(req: Request, res: Response) {
  const id = req.params.id;
  const userId: number = res.locals.token.userId;
  if (!id || Number(id) === NaN) {
    throwError("Insert a valid id!", 400);
  }

  const credential = await notesService.getNote(Number(id), userId);

  res.status(200).send(credential);
}

export async function getAllUserNotes(req: Request, res: Response) {
  const userId: number = res.locals.token.userId;

  const credentials = await notesService.getAllUserNotes(userId);

  res.status(200).send(credentials);
}

export async function deleteNote(req: Request, res: Response) {
  const id = req.params.id;
  const userId: number = res.locals.token.userId;
  if (!id || Number(id) === NaN) {
    throwError("Insert a valid id!", 400);
  }

  await notesService.deleteNote(Number(id), userId);

  res.status(200).send("Note deleted successfully!");
}
