import { Router } from "express";
import { createUser, loginUser } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { userInfoSchema } from "../schemas/authSchemas.js";

const authRouter = Router()

authRouter.post('/create-account', validateSchema(userInfoSchema), createUser)
authRouter.post('/login', validateSchema(userInfoSchema), loginUser)

export default authRouter