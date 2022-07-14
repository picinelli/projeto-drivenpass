import { Card, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCardByTitle(title: string, userId: number) {
  return await prisma.card.findFirst({ where: { title, userId } });
}

export async function createCard(cardInfo: Card) {
  return await prisma.card.create({ data: cardInfo });
}

export async function getcardById(id: number) {
  return await prisma.card.findFirst({ where: { id } });
}

export async function getAllUsercards(userId: number) {
  return await prisma.card.findMany({ where: { userId } });
}

export async function deletecard(id:number) {
  return await prisma.card.delete({where: {id}})
}