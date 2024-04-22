<template>
  <nav class="flex flex-row font-mono p2 items-center gap-x-2 shadow-sm box-border">
    <div class="i-carbon-list-boxes p1"></div>
    <p class="text-sm">Nuxt3-UnoCSS-todoapp</p>
    <div
      class="flex flex-row items-center p1 rounded grid place-content-center bg-red:70 cursor-pointer duration-300"
      @click="handleLogout"
    >
      <div class="i-carbon-logout"></div>
    </div>
    <div class="flex-auto"></div>

    <p class="text-sm hidden md:block">Check the Github repo !</p>
    <div
      class="i-carbon-arrow-right animate-swing animate-count-infinite hidden md:block"
    ></div>
    <nuxt-link to="https://github.com/mueenou/n3-todo-app.git">
      <div
        class="rounded text-black grid dark:text-white place-content-center bg-hover-base cursor-pointer p1 duration-300"
      >
        <div class="i-carbon-logo-github p[0.4em] cursor-pointer"></div>
      </div>
    </nuxt-link>
    <div
      class="p1 rounded grid place-content-center bg-hover-base cursor-pointer duration-300"
    >
      <button
        @click="toggleColorMode"
        class="i-carbon-sun dark:i-carbon-moon p3 cursor-pointer"
      />
    </div>
  </nav>
</template>

<script setup>
const color = useColorMode();

const { data, signOut } = useAuth();

function toggleColorMode() {
  color.value = color.value === "dark" ? "light" : "dark";
}

async function handleLogout() {
  await signOut();
}
</script>
