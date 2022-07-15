import { Wifi } from "@prisma/client";
import { Request, Response } from "express";
import * as wifisService from "../services/wifisService.js";
import throwError from "../utils/throwError.js";

export async function createWifi(req: Request, res: Response) {
  const userId: number = res.locals.token.userId;
  const wifiData: Wifi = { ...req.body, userId: userId };

  await wifisService.createWifi(wifiData);

  res.status(201).send("Wifi created successfully!");
}

export async function getWifi(req: Request, res: Response) {
  const id = req.params.id;
  const userId: number = res.locals.token.userId;
  if (!id || Number(id) === NaN) {
    throwError("Insert a valid id!");
  }

  const wifi = await wifisService.getWifi(Number(id), userId);

  res.status(200).send(wifi);
}

export async function getAllUserWifis(req: Request, res: Response) {
  const userId: number = res.locals.token.userId

  const wifis = await wifisService.getAllUserWifis(userId)

  res.status(200).send(wifis)
}

export async function deleteWifi(req: Request, res: Response) {
  const id = req.params.id
  const userId: number = res.locals.token.userId
  if(!id || Number(id) === NaN) {
    throwError("Insert a valid id!")
  }

  await wifisService.deleteWifi(Number(id), userId)

  res.status(200).send("Wifi deleted successfully!")
}
