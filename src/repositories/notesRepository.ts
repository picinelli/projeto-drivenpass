import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Note {
  id?: number;
  title: string;
  description: string;
  userId: number;
  createdAt?: Date;
}

export async function createNote(note: Note) {
  const {title, description, userId} = note
  return await prisma.note.create({
    data: {
      title,
      description,
      userId
    }
  })
}

export async function getNoteByTitle(title: string, userId: number) {
  return await prisma.note.findFirst({
    where: {
      title: title,
      userId: userId,
    },
  });
}
