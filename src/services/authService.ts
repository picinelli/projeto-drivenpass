import { getUserByEmail, insertSession, insertUser } from "../repositories/authRepository.js";
import throwError from "../utils/throwError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Session, User } from "@prisma/client";

export type UserInfo = Omit<User, "id" | "createdAt">
export type tokenInfo = Omit<Session, "id" | "createdAt">

export async function createUser(userInfo: User) {
  const { email, password } = userInfo;
  const isEmailUsed = await getUserByEmail(email);
  if (isEmailUsed) throwError("This email is already being used!", 409);

  const saltRounds = 10;
  const encryptedPass = await bcrypt.hash(password, saltRounds);
  const insertInfo: UserInfo = {
    email: email,
    password: encryptedPass,
  };

  return await insertUser(insertInfo);
}

export async function loginUser(userInfo: User) {
  const { email, password } = userInfo;
  const user = await getUserByEmail(email);
  if (!user) throwError("This account doesnt exists!", 404);
  
  const isPasswordCorrect = bcrypt.compareSync(password, user.password)
  if (!isPasswordCorrect) throwError("Email or password incorrect", 400)

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  const insertInfo: tokenInfo = {
    token,
    userId: user.id
  }

  await insertSession(insertInfo)

  return token
}
