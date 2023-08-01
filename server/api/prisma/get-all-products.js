import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return await prisma.products.findMany({
		select: {
      id: true,
      new: true,
			name: true,
      category: true,
			description: true,
			images: true,
		},
	});
});
