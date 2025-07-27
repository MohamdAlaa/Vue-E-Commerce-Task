<template>
  <div v-if="product" class="max-w-4xl mx-auto">
    <!-- Breadcrumb -->

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Product Image -->
      <div class="space-y-4">
        <div class="relative overflow-hidden bg-gray-200 rounded-lg">
          <img
            :src="product.image"
            :alt="product.name"
            class="object-cover w-full h-96"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <div>
          <h1 class="mb-2 text-3xl font-bold text-gray-900">
            {{ product.name }}
          </h1>
          <p class="text-lg text-gray-600">
            {{ product.description }}
          </p>
        </div>

        <div class="flex items-center justify-between gap-4">
          <div class="text-3xl font-bold text-primary-600">
            ${{ (product.price * quantity).toFixed(2) }}
          </div>
          <div class="flex items-center gap-2">
            <button
              class="px-2 py-1 text-lg font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              @click="decreaseQuantity"
              :disabled="quantity <= 1"
            >
              -
            </button>
            <span class="w-8 text-center">{{ quantity }}</span>
            <button
              class="px-2 py-1 text-lg font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              @click="increaseQuantity"
            >
              +
            </button>
          </div>
          <button
            class="px-4 py-2 font-medium text-white rounded btn-primary bg-primary-600 hover:bg-primary-700 disabled:opacity-50"
            :disabled="isAdding"
            @click="addToCart"
          >
            <span>Add to Cart</span>
          </button>
        </div>

        <!-- Add to Cart Section -->

        <!-- Back to Products -->
        <div class="pt-4 border-t border-gray-200">
          <NuxtLink
            to="/"
            class="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {{ $t("product.backToProducts") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else-if="loading" class="flex items-center justify-center py-12">
    <div
      class="w-12 h-12 border-b-2 rounded-full animate-spin border-primary-600"
    ></div>
  </div>

  <!-- Not Found State -->
  <div v-else class="py-12 text-center">
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
          d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
        />
      </svg>
    </div>
    <h3 class="mb-2 text-lg font-medium text-gray-900">Product not found</h3>
    <p class="mb-4 text-gray-500">
      The product you're looking for doesn't exist or has been removed.
    </p>
    <NuxtLink to="/" class="btn-primary">
      {{ $t("product.backToProducts") }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { useProducts } from "../../composables/useProducts.js";

const route = useRoute();
const { getProductById } = useProducts();
const cartStore = useCartStore();

const product = ref(null);
const loading = ref(true);
const quantity = ref(1);
const isAdding = ref(false);

// const addToCart = async () => {
//   isAdding.value = true;
//   // Simulate API call delay
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   cartStore.addToCart(props.product);
//   isAdding.value = false;
//   // Show success feedback (you could add a toast notification here)
// };

// Get product ID from route
const productId = computed(() => parseInt(route.params.id));

// Load product data
onMounted(() => {
  const foundProduct = getProductById(productId.value);
  if (foundProduct) {
    product.value = foundProduct;
  }
  loading.value = false;
});

// Quantity controls
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Add to cart

const addToCart = () => {
  if (!product.value) return;
  isAdding.value = true;
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product.value);
  }
  isAdding.value = false;
};

const handleImageError = (event) => {
  const target = event.target;
  target.src =
    "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=No+Image";
};

// Set page title
useHead({
  title: computed(() =>
    product.value
      ? `${product.value.name} - E-Commerce Store`
      : "Product - E-Commerce Store"
  ),
});
</script>
