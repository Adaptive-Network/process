<template>
  <button
    class="p-4 rounded-full flex flex-row items-start justify-start bg-gray-200 h-12 w-12 dark:bg-gray-700 dark:border-gray-900 dark:text-white hover:dark:bg-gray-600"
    @click="updateColorMode"
  >
    <span class="dark:i-lucide-moon-star i-lucide-sun w-12"></span>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function updateColorMode() {
  if (colorMode.preference == "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
}
</script>
