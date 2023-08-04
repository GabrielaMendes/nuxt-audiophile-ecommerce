export default async (id) => {
	const { data, error } = await useFetch(
		`/api/prisma/get-product-by-id/${id}`
	);

	if (error.value) {
		throw createError({
			...error.value,
		});
	}

	return { data };
};
