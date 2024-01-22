<template>
  <div class="p-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/2 flex flex-row">
    <div class="border-gray-100 dark:border-gray-700 border-t min-w-full">
      <!--Blog Header-->
      <h1
        class="pl-4 pt-4 text-2xl font-bold font-serif text-nowrap dark:text-white text-black"
      >
        Blog Header
      </h1>
      <!--Blog Content-->
      <div class="flex flex-row flex-grow items-start flex-auto justify-around">
        <div class="flex flex-col items-stretch w-1/2 justify-stretch p-2">
          <BlogSubBlogHeadline />
          <BlogSubBlogHeadline />
          <BlogSubBlogHeadline />
        </div>
        <div class="w-1/2">
          <BlogFeaturedBlogPost />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["header", "content"]);
</script>

<style></style>
