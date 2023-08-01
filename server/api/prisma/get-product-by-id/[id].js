import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { id } = event.context.params;
  
  const product = await prisma.products.findUnique({
		where: {
			id: parseInt(id),
		},
	});

  if (!product) {
		throw createError({
			statusCode: 404,
			statusMessage: `Product with ID of ${id} does not exist`,
		});
	}

  return product
});
