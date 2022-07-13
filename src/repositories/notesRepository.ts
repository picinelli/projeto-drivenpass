import { Note, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

export async function getNoteByTitle(note: Note) {
  return await prisma.note.findFirst({
    where: {
      title: note.title,
      userId: note.userId,
    },
  });
}
