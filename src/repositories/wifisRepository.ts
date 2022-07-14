import { PrismaClient, Wifi } from "@prisma/client";

const prisma = new PrismaClient();

export async function createWifi(wifi: Wifi) {
  const { title, name, password, userId } = wifi;
  return await prisma.wifi.create({
    data: {
      title,
      name,
      password,
      userId
    },
  });
}

export async function getWifiByTitle(wifi: Wifi) {
  return await prisma.wifi.findFirst({
    where: {
      title: wifi.title,
      userId: wifi.userId,
    },
  });
}

export async function getWifiById(id: number) {
  return await prisma.wifi.findFirst({ where: { id } });
}

export async function getAllUserWifis(userId: number) {
  return await prisma.wifi.findMany({ where: { userId } });
}

export async function deleteWifi(id:number) {
  return await prisma.wifi.delete({where: {id}})
}