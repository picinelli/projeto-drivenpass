import { Router } from "express";
import authRouter from "./authRouter.js";
import cardsRouter from "./cardsRouter.js";
import credencialsRouter from "./credencialsRouter.js";
import documentsRouter from "./documentsRouter.js";
import notesRouter from "./notesRouter.js";
import wifisRouter from "./wifisRouter.js";

const router = Router()

router.use(authRouter)
router.use(credencialsRouter)
router.use(notesRouter)
router.use(cardsRouter)
router.use(wifisRouter)
router.use(documentsRouter)

export default router