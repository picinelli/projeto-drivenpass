import { Router } from "express";
import { createNote } from "../controllers/notesController.js";
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

export default notesRouter;
