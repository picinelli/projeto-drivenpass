import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Credential {
  id?: number;
  title: string;
  username: string;
  url: string;
  password: string;
  userId: number;
  createdAt?: Date;
}

export async function getCredentialByTitle(title: string, userId: number) {
  return await prisma.credential.findFirst({
    where: {
      title: title,
      userId: userId,
    },
  });
}

export async function getCredentialById(id: number) {
  return await prisma.credential.findFirst({
    where: {
      id: id,
    },
  });
}

export async function getAllUserCredentials(userId: number) {
  return await prisma.credential.findMany({
    where: {
      userId: userId,
    },
  });
}

export async function createCredential(credential: Credential) {
  const { title, username, url, password, userId } = credential;
  return await prisma.credential.create({
    data: {
      title,
      username,
      url,
      password,
      userId,
    },
  });
}

export async function deleteCredential(id: number) {
  return await prisma.credential.delete({
    where: {
      id: id,
    },
  });
}
