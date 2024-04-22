<template>
  <div>
    <div class="w-80 block m-auto">
      <h2 class="font-extrabold text-center">Register</h2>
      <form action="post" class="w-full flex flex-col gap-y-5" @submit="handleFormSubmit">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          v-model="form.email"
          class="w-full h-10 rounded-full border-none px-4 bg-base text-sm font-900 placeholder-gray-400 box-border"
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          v-model="form.username"
          class="w-full h-10 rounded-full border-none px-4 bg-base text-sm font-900 placeholder-gray-400 box-border"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          v-model="form.password"
          class="w-full h-10 rounded-full border-none px-4 bg-base text-sm font-900 placeholder-gray-400 box-border"
        />
        <div class="w-full">
          <input
            type="submit"
            :disabled="isLoading"
            class="w-full h-10 bg-red rounded-full grid place-content-center cursor-pointer border-none block mx-auto text-black font-bold"
            :class="{ 'bg-gray-400': isLoading }"
          />
        </div>
      </form>
      <nuxt-link to="/login-page">
        <p class="text-xs underline text-red text-center">Already have an account?</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref<object>({
  email: "",
  username: "",
  password: "",
});

const router = useRouter();
const isLoading = ref<boolean>(false);
const handleFormSubmit = async (e: Event) => {
  e.preventDefault();

  try {
    isLoading.value = true;
    const data = await $fetch("/api/auth/register", {
      method: "POST",
      body: form.value,
    });
    router.push({
      name: "login-page",
    });
  } catch (error: any) {
    alert(error);
  } finally {
    isLoading.value = false;
  }
};
</script>
