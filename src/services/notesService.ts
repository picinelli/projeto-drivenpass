import { Note } from "../repositories/notesRepository.js";
import throwError from "../utils/throwError.js";
import * as notesRepository from "../repositories/notesRepository.js";

export async function createNote(noteData: Note) {
  const noteTitleAlreadyExist = await notesRepository.getNoteByTitle(noteData);

  if (noteTitleAlreadyExist)
    throwError("You already have a credential with this title");

  await notesRepository.createNote(noteData);
}
