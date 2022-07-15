import { Card } from "@prisma/client";
import { Request, Response } from "express";
import * as cardsService from "../services/cardsService.js"
import throwError from "../utils/throwError.js";

export async function createCard(req: Request, res: Response) {
  const userId: number = res.locals.token.userId
  const cardInfo: Card = {...req.body, userId}

  await cardsService.createCard(cardInfo)

  res.status(201).send("Card created successfully!")
}

export async function getCard(req: Request, res: Response) {
  const id = req.params.id
  const userId: number = res.locals.token.userId
  if(!id || Number(id) === NaN) {
    throwError("Insert a valid id!", 400)
  }

  const card = await cardsService.getCard(Number(id), userId)

  res.status(200).send(card)
}

export async function getAllUserCards(req: Request, res: Response) {
  const userId: number = res.locals.token.userId

  const cards = await cardsService.getAllUserCards(userId)

  res.status(200).send(cards)
}

export async function deleteCard(req: Request, res: Response) {
  const id = req.params.id
  const userId: number = res.locals.token.userId
  if(!id || Number(id) === NaN) {
    throwError("Insert a valid id!", 400)
  }

  await cardsService.deleteCard(Number(id), userId)

  res.status(200).send("Card deleted successfully!")
}