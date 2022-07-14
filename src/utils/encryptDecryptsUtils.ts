import { Credential } from "@prisma/client";
import Cryptr from "cryptr";

export function encryptValue(password: string) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);
  return cryptr.encrypt(password)
}

export function decryptValue(password: string) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);
  return cryptr.decrypt(password);
}