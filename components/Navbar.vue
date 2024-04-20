<template>
  <nav class="flex flex-row font-mono p2 items-center gap-x-2 shadow-sm">
    <div class="i-carbon-list-boxes p1"></div>
    <p class="text-sm">Nuxt3-UnoCSS-todoapp</p>
    <div class="flex-auto"></div>

    <div class="p-1 rounded grid place-content-center bg-hover-base cursor-pointer">
      <button class="i-carbon-logo-github p2 cursor-pointer"></button>
    </div>
    <div class="p-1 rounded grid place-content-center bg-hover-base cursor-pointer">
      <button
        @click="toggleColorMode"
        class="i-carbon-sun dark:i-carbon-moon p2 cursor-pointer"
      />
    </div>
  </nav>
</template>

<script setup>
const color = useColorMode();

function toggleColorMode() {
  color.value = color.value === "dark" ? "light" : "dark";
}
</script>
