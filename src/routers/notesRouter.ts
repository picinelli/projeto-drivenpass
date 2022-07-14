import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllUserNotes,
  getNote,
} from "../controllers/notesController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import { createNoteSchema } from "../schemas/notesSchemas.js";

const notesRouter = Router();

notesRouter.post(
  "/create-note",
  validateSchema(createNoteSchema),
  validateToken,
  createNote
);
notesRouter.get("/note/:id", validateToken, getNote);
notesRouter.get("/notes", validateToken, getAllUserNotes);
notesRouter.delete("/note/:id", validateToken, deleteNote);

export default notesRouter;
