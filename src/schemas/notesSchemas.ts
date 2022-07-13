import { Note } from "@prisma/client"
import joi from "joi"

export const createNoteSchema = joi.object<Note>({
  title: joi.string().max(50).required(),
  description: joi.string().max(1000).required()
})