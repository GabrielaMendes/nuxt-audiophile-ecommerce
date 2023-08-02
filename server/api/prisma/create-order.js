import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
	name: Joi.string()
		.regex(/^[a-zA-Z ]*$/)
		.required()
		.min(3)
		.max(100),
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		})
		.required()
		.min(3)
		.max(100),
	phone: Joi.string()
		.required()
		.regex(/^\(\d{3}\) \d{3}-\d{4}$/),
	address: Joi.string().required().min(2).max(100),
	zipcode: Joi.string()
		.required()
		.regex(/^\d{5}$/),
	city: Joi.string()
		.regex(/^[a-zA-Z \-]*$/)
		.required()
		.min(2)
		.max(100),
	country: Joi.string()
		.regex(/^[a-zA-Z ]*$/)
		.required()
		.min(2)
		.max(50),
	payment: Joi.string().required(),
	items: Joi.array().items(
		Joi.object()
			.keys({
				id: Joi.number().required(),
				qty: Joi.number().required().min(1),
				price: Joi.number().required().min(0),
			})
			.options({ allowUnknown: true })
	),
	shipping: Joi.number().required().min(0),
	vat: Joi.number().required().min(0),
});

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const { error, value } = await schema.validate(body);

	if (error) {
		throw createError({
			statusCode: 412,
			statusMessage: error.message,
		});
	}

	const {
		name,
		email,
		phone,
		address,
		zipcode,
		city,
		country,
    payment,
		items,
		shipping,
		vat,
	} = body;

	const order = await prisma.orders.create({
		data: {
			name,
			email,
			phone,
			address,
			zipcode,
			city,
			country,
			payment,
			shipping,
			vat,
		},
	});

	items.forEach(async (item) => {
	  await prisma.orderItem.create({
	    data: {
	      orderId: order.id,
	      productId: item.id,
	      price: item.price,
	      qty: item.qty,
	    }
	  })
	});

	return order;
});
