import { Router } from "express";
import { createUser } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post('/create-account', createUser)

export default authRouter