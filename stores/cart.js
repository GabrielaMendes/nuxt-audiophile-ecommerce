export const useCartStore = defineStore(
	"cart",
	() => {
		const cartItems = ref([]);

		const totalItems = computed(() => {
			return cartItems.value.reduce((acc, item) => acc + item.qty, 0);
		});

		const totalPrice = computed(() => {
			return cartItems.value.reduce(
				(acc, item) => acc + item.qty * item.price,
				0
			);
		});

		const addItem = (product, qty) => {
			const itemIdx = cartItems.value.findIndex(
				(item) => item.id === product.id
			);

			if (itemIdx < 0) {
        cartItems.value.push({
          ...product,
          qty,
        });
        return true;
      }
      
      if (cartItems.value[itemIdx].qty + qty > 10) {
        return false;
      }

      cartItems.value[itemIdx].qty += qty;
      return true;
		};

		const removeItem = (id) => {
			const itemIdx = cartItems.value.findIndex((item) => item.id === id);
			cartItems.value[itemIdx].qty -= 1;

			if (cartItems.value[itemIdx].qty === 0) {
				cartItems.value.splice(itemIdx, 1);
			}
		};

		const removeAll = () => {
			cartItems.value = [];
		};

		return {
			cartItems,
			totalItems,
			totalPrice,
			addItem,
			removeItem,
			removeAll,
		};
	},
	{
		persist: true,
	}
);

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
