import { Router } from "express";
import {
  createWifi,
  deleteWifi,
  getAllUserWifis,
  getWifi,
} from "../controllers/wifisController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import { createWifiSchema } from "../schemas/wifisSchemas.js";

const wifisRouter = Router();

wifisRouter.post(
  "/create-wifi",
  validateSchema(createWifiSchema),
  validateToken,
  createWifi
);
wifisRouter.get("/wifi/:id", validateToken, getWifi);
wifisRouter.get("/wifis", validateToken, getAllUserWifis);
wifisRouter.delete("/wifi/:id", validateToken, deleteWifi);

export default wifisRouter;
