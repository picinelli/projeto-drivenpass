import { Note, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createNote(note: Note) {
  const { title, description, userId } = note;
  return await prisma.note.create({
    data: {
      title,
      description,
      userId,
    },
  });
}

export async function getNoteByTitle(note: Note) {
  return await prisma.note.findFirst({
    where: {
      title: note.title,
      userId: note.userId,
    },
  });
}

export async function getNoteById(id: number) {
  return await prisma.note.findFirst({ where: { id } });
}

export async function getAllUserNotes(userId: number) {
  return await prisma.note.findMany({ where: { userId } });
}

export async function deleteNote(id:number) {
  return await prisma.note.delete({where: {id}})
}
