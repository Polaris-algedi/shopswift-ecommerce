"use server";
import { PrismaClient } from "@prisma/client";
import { convertPrismaObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest Products
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertPrismaObject(data);
}
