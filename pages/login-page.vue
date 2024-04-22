<template>
  <div>
    <div class="w-80 block m-auto">
      <h2 class="font-extrabold text-center">Login</h2>
      <form action="post" @submit="handleLogin" class="w-full flex flex-col gap-y-5">
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
            value="Login"
            class="w-full h-10 bg-red rounded-full grid place-content-center cursor-pointer border-none block mx-auto text-black font-bold"
          />
        </div>
      </form>
      <nuxt-link to="/register-page">
        <p class="text-xs underline text-red text-center">Create an account</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "guest",
});
const form = ref<object>({
  username: "",
  password: "",
});

const router = useRouter();

const { signIn } = useAuth();
async function handleLogin(e: Event) {
  e.preventDefault();
  try {
    const res = await signIn("credentials", form.value);
    router.push({ name: "index" });
  } catch (error) {}
}
</script>
