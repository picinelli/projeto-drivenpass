import { Router } from "express";
import {
  createCard,
  deleteCard,
  getAllUserCards,
  getCard,
} from "../controllers/cardsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import { createCardSchema } from "../schemas/cardsSchemas.js";

const cardsRouter = Router();

cardsRouter.post(
  "/create-card",
  validateSchema(createCardSchema),
  validateToken,
  createCard
);
cardsRouter.get("/card/:id", validateToken, getCard);
cardsRouter.get("/cards", validateToken, getAllUserCards);
cardsRouter.delete("/card/:id", validateToken, deleteCard);

export default cardsRouter;
