<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-primary-600">
              E-Commerce Store
            </NuxtLink>
          </div>

          <!-- Navigation Links -->
          <div class="items-center hidden space-x-8 md:flex">
            <NuxtLink
              to="/"
              class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors rounded-md hover:text-primary-600"
            >
              {{ $t("nav.home") }}
            </NuxtLink>
            <NuxtLink
              to="/cart"
              class="relative px-3 py-2 text-sm font-medium text-gray-700 transition-colors rounded-md hover:text-primary-600"
            >
              {{ $t("nav.cart") }}
              <span
                v-if="cartStore.totalItems > 0"
                class="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1"
              >
                {{ cartStore.totalItems }}
              </span>
            </NuxtLink>
            <NuxtLink
              to="/login"
              class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors rounded-md hover:text-primary-600"
            >
              {{ $t("nav.login") }}
            </NuxtLink>
          </div>

          <!-- Language Switcher -->
          <div class="flex items-center space-x-4">
            <select
              v-model="$i18n.locale"
              class="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[85vh]">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="mt-auto bg-white border-t border-gray-200">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-sm text-center text-gray-500">
          © 2025 E-Commerce Store. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useCartStore } from "./stores/cart.js";
import { useI18n } from "#imports";

const cartStore = useCartStore();
const t = useI18n();

// Load cart from localStorage on app mount
onMounted(() => {
  cartStore.loadFromLocalStorage();
});
</script>

<style>
/* RTL support for Arabic */
[dir="rtl"] {
  text-align: right;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
