import { CredentialData } from "../controllers/credencialsController";
import bcrypt from "bcrypt";
import Cryptr from "cryptr";
import * as credentialsRepository from "../repositories/credentialsRepository.js"
import throwError from "../utils/throwError.js";


export async function createCredential(credentialData: CredentialData, userId: number) {
  credentialData.password = encryptPassword(credentialData.password);

  console.log(userId)

  const credentialTitleAlreadyExist =
    await credentialsRepository.getCredentialByTitle(credentialData.title, userId);

    console.log(credentialTitleAlreadyExist)
  if (credentialTitleAlreadyExist)
    throwError("You already have a credential with this title");

  await credentialsRepository.createCredential(credentialData);
}

export async function getCredential(id: number, userId: number) {
  const credential = await credentialsRepository.getCredentialById(id)
  if(!credential) throwError("This credential does not exist!")
  if(credential.userId !== userId) throwError("UserId incorrect!")

  credential.password = decryptPassword(credential.password)

  return credential
}

export async function getAllUserCredentials(userId: number) {
  const credentials = await credentialsRepository.getAllUserCredentials(userId)
  if(!credentials) throwError("No credential was found")

  return credentials
}


function encryptPassword(password: string) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);
  return cryptr.encrypt(password)
}

function decryptPassword(password: string) {
  const cryptr = new Cryptr(process.env.CRYPTR_PASS);
  return cryptr.decrypt(password);
}
