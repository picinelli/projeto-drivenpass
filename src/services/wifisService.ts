import throwError from "../utils/throwError.js";
import * as wifisRepository from "../repositories/wifisRepository.js";
import { Wifi } from "@prisma/client";
import { decryptValue, encryptValue } from "../utils/encryptDecryptsUtils.js";
import Cryptr from "cryptr";

export async function createWifi(wifiData: Wifi) {
  wifiData.password = encryptValue(wifiData.password)
  await wifisRepository.createWifi(wifiData);
}

export async function getWifi(id: number, userId: number) {
  const wifi = await wifisRepository.getWifiById(id)
  if(!wifi) throwError("This wifi does not exist!")
  if(wifi.userId !== userId) throwError("This is not your wifi!")

  wifi.password = decryptValue(wifi.password)

  return wifi
}

export async function getAllUserWifis(userId: number) {
  const wifis = await wifisRepository.getAllUserWifis(userId)
  if(!wifis) throwError("No wifi was found")

  const wifisDecrypted = decryptMultipleValues(wifis)

  return wifisDecrypted
}

export async function deleteWifi(id: number, userId: number) {
  const wifi = await wifisRepository.getWifiById(id)
  if(!wifi) throwError("This wifi does not exist!")
  if(wifi.userId !== userId) throwError("This is not your wifi!")

  await wifisRepository.deleteWifi(id)
}




//utils
function decryptMultipleValues(credentials: Wifi[]) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);

  credentials.map(e => {
    e.password = cryptr.decrypt(e.password);
  })

  return credentials;
}