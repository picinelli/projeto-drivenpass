import { Router } from "express";
import authRouter from "./authRouter.js";
import credencialsRouter from "./credencialsRouter.js";

const router = Router()

router.use(authRouter)
router.use(credencialsRouter)

export default router