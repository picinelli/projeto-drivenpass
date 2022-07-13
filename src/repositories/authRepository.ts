import { PrismaClient } from "@prisma/client";
import { UserInfo } from "../services/authService.js";
import { tokenInfo } from "../services/authService.js";

const prisma = new PrismaClient();

export async function insertUser(userInfo: UserInfo) {
  return await prisma.user.create({
    data: {
      email: userInfo.email,
      password: userInfo.password,
    },
  });
}

export async function insertSession(tokenInfo: tokenInfo) {
  return await prisma.session.create({
    data: {
      token: tokenInfo.token,
      userId: tokenInfo.userId
    }
  })
}

export async function verifySession(token: string) {
  return await prisma.session.findFirst({
    where: {
      token: token
    }
  })
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findFirst({ 
    where: { 
      email: email 
    } 
  });
}
