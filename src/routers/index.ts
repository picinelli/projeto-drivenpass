import { Router } from "express";
import authRouter from "./authRouter.js";
import cardsRouter from "./cardsRouter.js";
import credencialsRouter from "./credencialsRouter.js";
import notesRouter from "./notesRouter.js";
import wifisRouter from "./wifisRouter.js";

const router = Router()

router.use(authRouter)
router.use(credencialsRouter)
router.use(notesRouter)
router.use(cardsRouter)
router.use(wifisRouter)

export default router