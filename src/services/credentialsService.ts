import { Credential } from "@prisma/client";
import Cryptr from "cryptr";
import * as credentialsRepository from "../repositories/credentialsRepository.js";
import {
  decryptValue,
  encryptValue,
} from "../utils/encryptDecryptsUtils.js";
import throwError from "../utils/throwError.js";

export async function createCredential(credentialData: Credential) {
  const { password, title, userId } = credentialData;
  credentialData.password = encryptValue(password);

  const credentialTitleAlreadyExist =
    await credentialsRepository.getCredentialByTitle(title, userId);

  if (credentialTitleAlreadyExist) {
    throwError("You already have a credential with this title", 409);
  }

  await credentialsRepository.createCredential(credentialData);
}

export async function getCredential(id: number, userId: number) {
  const credential = await credentialsRepository.getCredentialById(id);
  if (!credential) throwError("This credential does not exist!", 404);
  if (credential.userId !== userId) throwError("This is not your credential!", 403);

  credential.password = decryptValue(credential.password);

  return credential;
}

export async function getAllUserCredentials(userId: number) {
  const credentials = await credentialsRepository.getAllUserCredentials(userId);
  if (!credentials) throwError("No credential was found", 404);

  const decryptedCredentials: Credential[] = decryptMultipleValues(credentials);

  return decryptedCredentials;
}

export async function deleteCredential(id: number, userId: number) {
  const credential = await credentialsRepository.getCredentialById(id);
  if (!credential) throwError("This credential does not exist!", 404);
  if (credential.userId !== userId) throwError("This is not your credential!", 403);

  await credentialsRepository.deleteCredential(id);
}




//utils
function decryptMultipleValues(credentials: Credential[]) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);

  credentials.map(e => {
    e.password = cryptr.decrypt(e.password);
  })

  return credentials;
}
