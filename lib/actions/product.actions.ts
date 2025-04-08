"use server";
import { prisma } from "@/db/prisma";
import { convertPrismaObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest Products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertPrismaObject(data);
}

export async function getSingleProduct(slug: string) {
  const data = await prisma.product.findUnique({
    where: {
      slug,
    },
  });
  return convertPrismaObject(data);
}
