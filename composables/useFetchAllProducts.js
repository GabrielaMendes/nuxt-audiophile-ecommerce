export default async () => {
	const { data, error } = await useFetch(`/api/prisma/get-all-products`);

	if (error.value) {
		throw createError({
			...error.value,
			statusMessage: "Unable to fetch products",
		});
	}

	return { data };
};
