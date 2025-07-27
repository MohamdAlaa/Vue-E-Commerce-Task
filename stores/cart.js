import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },

    getItemById: (state) => {
      return (productId) =>
        state.items.find((item) => item.product.id === productId);
    },
  },

  actions: {
    addToCart(product) {
      const existingItem = this.getItemById(product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({
          product,
          quantity: 1,
        });
      }

      this.saveToLocalStorage();
    },

    removeFromCart(productId) {
      const index = this.items.findIndex(
        (item) => item.product.id === productId
      );
      if (index > -1) {
        this.items.splice(index, 1);
        this.saveToLocalStorage();
      }
    },

    updateQuantity(productId, quantity) {
      const item = this.getItemById(productId);
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId);
        } else {
          item.quantity = quantity;
          this.saveToLocalStorage();
        }
      }
    },

    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem("cart", JSON.stringify(this.items));
      }
    },

    loadFromLocalStorage() {
      if (process.client) {
        const saved = localStorage.getItem("cart");
        if (saved) {
          this.items = JSON.parse(saved);
        }
      }
    },
  },
});
