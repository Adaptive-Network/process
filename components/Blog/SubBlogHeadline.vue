<template>
  <NuxtLink to="/" class="w-full p-4">
    <div
      class="p-2 hover:border-gray-200 hover:dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-800 border border-transparent rounded hover:text-gray-950 hover:dark:text-gray-400"
    >
      <div
        class="p-2 m border-t border-b w-max border-gray-200 dark:border-gray-700 dark:text-white text-black"
        @click="handleClick"
      >
        <h1 class="text-xl font-bold font-serif mb-2">Sub Blog Post</h1>
        <span></span>
        <p class="text-sm font-serif mb-6">
          Some content is written here for testing
        </p>
        <p class="text-xs font-sans">10 Min Read Time</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { NuxtPicture } from "#build/components";

interface SubBlogHeadline {
  header: string;
  headline: string;
  image?: NuxtPicture;
  readTime: Number;
}

const props: SubBlogHeadline = defineProps([
  "header",
  "headline",
  "image",
  "readTime",
  "url",
]);
</script>

<style></style>
