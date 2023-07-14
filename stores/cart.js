export const useCartStore = defineStore(
	"cart",
	() => {
		const cartItems = ref([]);

		const addItem = (id, number) => {
			const addedItem = cartItems.value.find((item) => item.id === id);
			if (addedItem) {
				addItem.number += number;
				return;
			}

			cartItems.value.push({ id, number });
		};

		const removeItem = (id) => {
			const itemIdx = cartItems.value.findIndex((item) => item.id == id);
			cartItems.value[itemIdx].number -= 1;

			if (cartItems[itemIdx].number === 0) {
				cartItems.value.splice(itemIdx, 1);
			}
		};

		const removeAll = () => {
			cartItems.value = [];
		};

		return { cartItems, addItem, removeItem, removeAll };
	},
	{
		persist: {
			storage: persistedState.localStorage,
		},
	}
);
