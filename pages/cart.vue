<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ $t("cart.title") }}
      </h1>
      <button
        v-if="cartStore.items.length > 0"
        class="btn-danger"
        @click="clearCart"
      >
        Clear Cart
      </button>
    </div>

    <!-- Empty Cart State -->
    <div v-if="cartStore.items.length === 0" class="py-12 text-center">
      <div class="mb-4 text-gray-400">
        <svg
          class="w-12 h-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
          />
        </svg>
      </div>
      <h3 class="mb-2 text-lg font-medium text-gray-900">
        {{ $t("cart.empty") }}
      </h3>
      <p class="mb-6 text-gray-500">
        Looks like you haven't added any items to your cart yet.
      </p>
      <NuxtLink to="/" class="btn-primary">
        {{ $t("cart.continueShopping") }}
      </NuxtLink>
    </div>

    <!-- Cart Items -->
    <div v-else class="space-y-6">
      <div
        class="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm"
      >
        <div class="p-6">
          <div class="space-y-4">
            <div
              v-for="item in cartStore.items"
              :key="item.product.id"
              class="flex items-center py-4 space-x-4 border-b border-gray-100 last:border-b-0"
            >
              <!-- Product Image -->
              <div class="flex-shrink-0">
                <img
                  :src="item.product.image"
                  :alt="item.product.name"
                  class="object-cover w-16 h-16 rounded-lg"
                  @error="handleImageError"
                />
              </div>

              <!-- Product Info -->
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-medium text-gray-900 truncate">
                  {{ item.product.name }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ item.product.category }}
                </p>
                <p class="text-lg font-semibold text-primary-600">
                  ${{ item.product.price.toFixed(2) }}
                </p>
              </div>

              <!-- Quantity Controls -->
              <div class="flex items-center space-x-2">
                <button
                  @click="updateQuantity(item.product.id, item.quantity - 1)"
                  :disabled="item.quantity <= 1"
                  class="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-full hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span class="w-12 font-medium text-center">
                  {{ item.quantity }}
                </span>
                <button
                  @click="updateQuantity(item.product.id, item.quantity + 1)"
                  class="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-full hover:text-gray-900"
                >
                  +
                </button>
              </div>

              <!-- Item Total -->
              <div class="text-right">
                <p class="text-lg font-semibold text-gray-900">
                  ${{ (item.product.price * item.quantity).toFixed(2) }}
                </p>
              </div>

              <!-- Remove Button -->
              <button
                @click="removeItem(item.product.id)"
                class="p-2 text-red-500 hover:text-red-700"
                title="Remove item"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div class="space-y-4">
          <div class="flex justify-between text-sm text-gray-600">
            <span>{{ "Total Items" }}</span>
            <span>{{ cartStore.totalItems }}</span>
          </div>

          <div class="pt-4 border-t border-gray-200">
            <div
              class="flex justify-between text-lg font-semibold text-gray-900"
            >
              <span>{{ $t("cart.total") }}</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
          </div>

          <div class="flex pt-4 space-x-4">
            <NuxtLink to="/" class="flex-1 text-center btn-secondary">
              {{ $t("cart.continueShopping") }}
            </NuxtLink>

            <button
              @click="checkout"
              :disabled="isCheckingOut"
              class="flex-1 btn-primary"
            >
              <span
                v-if="isCheckingOut"
                class="flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 mr-2 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ $t("common.loading") }}
              </span>
              <span v-else>{{ $t("cart.checkout") }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const isCheckingOut = ref(false);

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity);
};

const removeItem = (productId) => {
  cartStore.removeFromCart(productId);
};

const checkout = async () => {
  isCheckingOut.value = true;

  // Simulate checkout process
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Clear cart after successful checkout
  cartStore.clearCart();
  isCheckingOut.value = false;

  // You could redirect to a success page or show a success message
  alert("Order placed successfully!");
};

const handleImageError = (event) => {
  const target = event.target;
  target.src =
    "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=No+Image";
};

const clearCart = () => {
  cartStore.clearCart();
};

// Set page title
useHead({
  title: "Cart - E-Commerce Store",
});
</script>
