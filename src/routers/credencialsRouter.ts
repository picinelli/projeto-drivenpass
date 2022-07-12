import { Router } from "express";
import { createCredential } from "../controllers/credencialsController.js";

const credencialsRouter = Router()

credencialsRouter.post("/create-credencial", createCredential)

export default credencialsRouter