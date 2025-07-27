<template>
  <div
    class="overflow-hidden transition-shadow duration-300 card hover:shadow-lg"
  >
    <!-- Product Image -->
    <div class="relative h-48 bg-gray-200">
      <img
        :src="product.image"
        :alt="product.name"
        class="object-cover w-full h-full"
        @error="handleImageError"
      />
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <h3 class="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">
        {{ product.name }}
      </h3>

      <p class="mb-3 text-sm text-gray-600 line-clamp-3">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-4">
        <span class="text-2xl font-bold text-primary-600">
          ${{ product.price.toFixed(2) }}
        </span>
        <span class="text-sm text-gray-500">
          {{ product.category }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex space-x-2">
        <NuxtLink :to="`/product/${product.id}`" class="px-4 btn-secondary">
          {{ $t("home.viewDetails") }}
        </NuxtLink>
        <button
          class="px-4 py-2 font-medium text-white rounded btn-primary bg-primary-600 hover:bg-primary-700 disabled:opacity-50"
          :disabled="isAdding"
          @click="addToCart"
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart.js";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
const isAdding = ref(false);

const addToCart = () => {
  isAdding.value = true;
  // Simulate API call delay
  cartStore.addToCart(props.product);
  isAdding.value = false;
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
