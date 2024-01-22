<template>
  <div class="dark:bg-gray-950 bg-gray-200 fixed w-full">
    <nav class="p-4 flex flex-row items-center justify-between">
      <NuxtLink to="/">
        <div class="flex flex-row items-center justify-start">
          <IconsIcon>
            <IconsAdaptiveNetworkLogo />
          </IconsIcon>
          <div>
            <h1
              class="pl-8 text-2xl font-sans font-bold text-gray-600 dark:text-white"
            >
              Process
            </h1>
          </div>
        </div>
      </NuxtLink>
      <!-- <div>
        <ButtonsColorButton />
      </div> -->
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { IconsAdaptiveNetworkLogo } from "#build/components";
</script>
