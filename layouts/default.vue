<template>
  <div>
    <header>
      <FullHeader />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import FullHeader from "~/components/Headers/FullHeader.vue";
</script>
