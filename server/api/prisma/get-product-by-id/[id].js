import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	return await prisma.products.findFirst({
		where: {
			id: parseInt(event.context.params.id),
		},
	});
});
