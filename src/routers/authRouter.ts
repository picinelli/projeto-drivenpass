import { Router } from "express";
import { createUser, loginUser } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post('/create-account', createUser)
authRouter.post('/login', loginUser)

export default authRouter