import { Router } from "express";
import authRouter from "./authRouter.js";
import credencialsRouter from "./credencialsRouter.js";
import notesRouter from "./notesRouter.js";

const router = Router()

router.use(authRouter)
router.use(credencialsRouter)
router.use(notesRouter)

export default router