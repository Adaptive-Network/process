<template>
  <div>
    <header class="fixed w-screen">
      <HeadersFullHeader />
    </header>
    <main class="bg-gray-50 dark:bg-gray-900 h-screen overflow-y-scroll pt-32">
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script setup lang="ts"></script>
