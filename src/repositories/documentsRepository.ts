import { Document, DocumentType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createDocument(document: Document) {
  const { type, name, issueDate, expirationDate, number, agency, userId } =
    document;
  return await prisma.document.create({
    data: {
      type,
      name,
      issueDate,
      expirationDate,
      number,
      agency,
      userId,
    },
  });
}

export async function getDocumentByType(type: DocumentType, userId: number) {
  return await prisma.document.findFirst({
    where: {
      type,
      userId
    },
  });
}

export async function getDocumentById(id: number) {
  return await prisma.document.findFirst({ where: { id } });
}

export async function getAllUserDocuments(userId: number) {
  return await prisma.document.findMany({ where: { userId } });
}

export async function deleteDocument(id: number) {
  return await prisma.document.delete({ where: { id } });
}

export const documentsRepository = {
  createDocument,
  getDocumentByType,
  getDocumentById,
  getAllUserDocuments,
  deleteDocument
}
