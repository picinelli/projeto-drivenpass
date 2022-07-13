import { Router } from "express";
import { createCredential, deleteCredential, getAllUserCredentials, getCredential } from "../controllers/credencialsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import { createCredentialSchema } from "../schemas/credentialsSchemas.js";

const credencialsRouter = Router();

credencialsRouter.post(
  "/create-credencial",
  validateSchema(createCredentialSchema),
  validateToken,
  createCredential
);
credencialsRouter.get(
  "/credencial/:id",
  validateToken,
  getCredential
);
credencialsRouter.get(
  "/credencials",
  validateToken,
  getAllUserCredentials
);
credencialsRouter.delete(
  "/credencial/:id",
  validateToken,
  deleteCredential
);

export default credencialsRouter;
