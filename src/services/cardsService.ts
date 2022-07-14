import Cryptr from "cryptr";

import { Card } from "@prisma/client";
import * as cardsRepository from "../repositories/cardsRepository.js";
import { decryptValue, encryptValue } from "../utils/encryptDecryptsUtils.js";
import throwError from "../utils/throwError.js";

export async function createCard(cardInfo: Card) {
  const cardTitleAlreadyExist = await cardsRepository.getCardByTitle(
    cardInfo.title,
    cardInfo.userId
  );
  if (cardTitleAlreadyExist) {
    throwError("You already have a card with this title!");
  }

  cardInfo.password = encryptValue(cardInfo.password);
  cardInfo.securityCode = encryptValue(cardInfo.securityCode);

  await cardsRepository.createCard(cardInfo)
}

export async function getCard(id: number, userId: number) {
  const card = await cardsRepository.getcardById(id)
  if(!card) throwError("This card does not exist!")
  if(card.userId !== userId) throwError("This card is not yours!")

  card.password = decryptValue(card.password)
  card.securityCode = decryptValue(card.securityCode)

  return card
}

export async function getAllUserCards(userId: number) {
  const cards = await cardsRepository.getAllUsercards(userId)
  if(!cards) throwError("You do not have any cards!")

  const decryptedCards = decryptMultipleValues(cards)
  
  return decryptedCards
}

export async function deleteCard(id: number, userId: number) {
  const card = await cardsRepository.getcardById(id)
  if(!card) throwError("This card does not exist!")
  if(card.userId !== userId) throwError("This card is not yours!")

  await cardsRepository.deletecard(id)

  return card
}




//utils
function decryptMultipleValues(cards: Card[]) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);

  cards.map(e => {
    e.password = cryptr.decrypt(e.password);
    e.securityCode = cryptr.decrypt(e.securityCode)
  })

  return cards;
}
