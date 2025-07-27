<template>
  <div>
    <!-- Hero Section -->
    <div class="mb-12 text-center">
      <h1 class="mb-4 text-4xl font-bold text-gray-900">
        {{ $t("home.title") }}
      </h1>
      <p class="max-w-2xl mx-auto text-xl text-gray-600">
        {{ $t("home.subtitle") }}
      </p>
    </div>

    <!-- Products Grid -->
    <div
      v-if="filteredProducts.length > 0"
      class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Empty State -->
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
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h3 class="mb-2 text-lg font-medium text-gray-900">No products found</h3>
      <p class="text-gray-500">
        Try selecting a different category or check back later.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from "../composables/useProducts.js";

const { products } = useProducts();
const selectedCategory = ref("All");

// Get unique categories
const categories = computed(() => {
  const cats = [...new Set(products.map((p) => p.category))];
  return ["All", ...cats];
});

// Filter products by selected category
const filteredProducts = computed(() => {
  if (selectedCategory.value === "All") {
    return products;
  }
  return products.filter(
    (product) => product.category === selectedCategory.value
  );
});

// Set page title
useHead({
  title: "E-Commerce Store - Home",
});
</script>
