import earphones from "@/data/earphones.json";
import headphones from "@/data/headphones.json";
import speakers from "@/data/speakers.json";

export const useProducts = () => {
	return {
		earphones,
		headphones,
		speakers,
	};
};
