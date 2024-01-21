<template>
  <button
    class="m-2 p-1 rounded-full flex flex-row items-center justify-center bg-gray-300 h-12 w-12 dark:bg-gray-900 dark:border-black dark:text-white hover:dark:bg-gray-600"
    @click="updateColorMode"
  >
    <span class="dark:i-lucide-moon-star i-lucide-sun w-14"></span>
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
