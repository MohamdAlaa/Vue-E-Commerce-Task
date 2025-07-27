<template>
  <div class="max-w-md mx-auto">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ $t("login.title") }}
      </h1>
      <p class="mt-2 text-gray-600">{{ $t("login.signIn") }}</p>
    </div>

    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Email Field -->
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-700"
          >
            {{ $t("login.email") }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :class="[
              'input',
              errors.email ? 'border-red-500 focus:ring-red-500' : '',
            ]"
            :placeholder="$t('login.email')"
            @focus="validateField('email')"
            @input="clearError('email')"
          />
          <p v-if="errors.email" class="mt-1 text-sm text-red-600">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password Field -->
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-700"
          >
            {{ $t("login.password") }}
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            :class="[
              'input',
              errors.password ? 'border-red-500 focus:ring-red-500' : '',
            ]"
            :placeholder="$t('login.password')"
            @blur="validateField('password')"
            @input="clearError('password')"
          />
          <p v-if="errors.password" class="mt-1 text-sm text-red-600">
            {{ errors.password }}
          </p>
        </div>

        <!-- Forgot Password Link -->
        <div class="text-right">
          <a href="#" class="text-sm text-primary-600 hover:text-primary-700">
            {{ $t("login.forgotPassword") }}
          </a>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full btn-primary"
        >
          <span v-if="isSubmitting" class="flex items-center justify-center">
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
          <span v-else>{{ $t("login.submit") }}</span>
        </button>

        <!-- Sign Up Link -->
        <div class="text-center">
          <p class="text-sm text-gray-600">
            {{ $t("login.noAccount") }}
            <a
              href="#"
              class="font-medium text-primary-600 hover:text-primary-700"
            >
              {{ $t("login.signUp") }}
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  email: "",
  password: "",
});

const errors = ref({});
const isSubmitting = ref(false);

// Validation functions
const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return null;
};

const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

const validateField = (field) => {
  const value = form.value[field];

  switch (field) {
    case "email":
      const emailError = validateEmail(value);
      if (emailError) {
        errors.value.email = emailError;
      } else {
        delete errors.value.email;
      }
      break;

    case "password":
      const passwordError = validatePassword(value);
      if (passwordError) {
        errors.value.password = passwordError;
      } else {
        delete errors.value.password;
      }
      break;
  }
};

const clearError = (field) => {
  delete errors.value[field];
};

// Set page title
useHead({
  title: "Login - E-Commerce Store",
});
</script>
