import { Document } from "@prisma/client";
import { documentsRepository } from "../repositories/documentsRepository.js";
import throwError from "../utils/throwError.js";

async function createDocument(documentData: Document) {
  const documentTitleAlreadyExist = await documentsRepository.getDocumentByType(
    documentData.type,
    documentData.userId
  );
  documentData.issueDate = new Date(documentData.issueDate)
  documentData.expirationDate = new Date(documentData.expirationDate)

  if (documentTitleAlreadyExist)
    throwError("You already have a document of this type");

    try {
      await documentsRepository.createDocument(documentData);
    } catch (error) {
      console.log(error)
    }
}

async function getDocument(documentId: number, userId: number) {
  const document = await documentsRepository.getDocumentById(documentId)
  if(!document) throwError("This document does not exist!")
  if(document.userId !== userId) throwError("This is not your document!")

  return document
}

async function getAllUserDocuments(userId: number) {
  const notes = await documentsRepository.getAllUserDocuments(userId)
  if(!notes) throwError("No document was found")

  return notes
}

async function deleteDocument(documentId: number, userId: number) {
  const document = await documentsRepository.getDocumentById(documentId)
  if(!document) throwError("This document does not exist!")
  if(document.userId !== userId) throwError("This is not your document!")

  await documentsRepository.deleteDocument(documentId)
}

export const documentsService = {
  createDocument,
  getDocument,
  getAllUserDocuments,
  deleteDocument,
};
