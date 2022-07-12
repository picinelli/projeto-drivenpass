import { UserInfo } from "../controllers/authController.js";
import { getUserByEmail, insertSession, insertUser } from "../repositories/authRepository.js";
import throwError from "../utils/throwError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface tokenInfo {
  token: string,
  userId: number
}

export async function createUser(userInfo: UserInfo) {
  const { email, password } = userInfo;
  const isEmailUsed = await getUserByEmail(email);
  if (isEmailUsed) throwError("This email is already being used!");

  const saltRounds = 10;
  const encryptedPass = await bcrypt.hash(password, saltRounds);
  const insertInfo: UserInfo = {
    email: email,
    password: encryptedPass,
  };

  return await insertUser(insertInfo);
}

export async function loginUser(userInfo: UserInfo) {
  const { email, password } = userInfo;
  const user = await getUserByEmail(email);
  if (!user) throwError("This account doesnt exists!");
  if (password !== user.password) throwError("Email or password incorrect")

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  const insertInfo: tokenInfo = {
    token,
    userId: user.id
  }

  await insertSession(insertInfo)

  return token
}
