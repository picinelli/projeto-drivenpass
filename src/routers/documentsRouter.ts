import { Router } from "express";
import { createDocument, deleteDocument, getAllUserDocuments, getDocument } from "../controllers/documentsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import { createDocumentSchema } from "../schemas/documentsSchemas.js";

const documentsRouter = Router()

documentsRouter.post(
  "/create-document",
  validateSchema(createDocumentSchema),
  validateToken,
  createDocument
);
documentsRouter.get("/document/:id", validateToken, getDocument);
documentsRouter.get("/documents", validateToken, getAllUserDocuments);
documentsRouter.delete("/document/:id", validateToken, deleteDocument);

export default documentsRouter