import throwError from "../utils/throwError.js";
import * as notesRepository from "../repositories/notesRepository.js";
import { Note } from "@prisma/client";

export async function createNote(noteData: Note) {
  const noteTitleAlreadyExist = await notesRepository.getNoteByTitle(noteData);

  if (noteTitleAlreadyExist)
    throwError("You already have a credential with this title");

  await notesRepository.createNote(noteData);
}

export async function getNote(id: number, userId: number) {
  const note = await notesRepository.getNoteById(id)
  if(!note) throwError("This note does not exist!")
  if(note.userId !== userId) throwError("This is not your note!")

  return note
}

export async function getAllUserNotes(userId: number) {
  const notes = await notesRepository.getAllUserNotes(userId)
  if(!notes) throwError("No note was found")

  return notes
}

export async function deleteNote(id: number, userId: number) {
  const note = await notesRepository.getNoteById(id)
  if(!note) throwError("This note does not exist!")
  if(note.userId !== userId) throwError("This is not your note!")

  await notesRepository.deleteNote(id)
}
