export const useImages = () => {
  const config = useRuntimeConfig();

	return `${config.public.supabase.url}/storage/v1/object/public/products-images$`;
};