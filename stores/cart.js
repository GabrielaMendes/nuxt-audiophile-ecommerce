export const useCartStore = defineStore(
	"cart",
	() => {
		const cartItems = ref([]);

		const totalItems = computed(() => {
			return cartItems.value.reduce((acc, item) => acc + item.number, 0);
		});

		const addItem = (id, number) => {
			const itemIdx = cartItems.value.findIndex((item) => item.id === id);
			if (itemIdx >= 0) {
				cartItems.value[itemIdx].number += number;
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

		return { cartItems, totalItems, addItem, removeItem, removeAll };
	},
	{
		persist: true,
	}
);

if(import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
