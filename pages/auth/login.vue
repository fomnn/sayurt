<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const email = ref('')
</script>

<template>
  <div class="w-4/12 gap-5 bg-white px-16 relative flex flex-col justify-center">
    <div class="flex items-center gap-1 absolute top-4 left-6 text-lime-700">
      <Icon name="iconoir:vegan" class="text-4xl" />
      <span class="text-2xl font-semibold">Sayurt</span>
    </div>
    <h1 class="text-2xl font-semibold">
      Login
    </h1>
    <UButton
      icon="logos:google-icon"
      size="sm"
      color="white"
      variant="solid"
      label="Login dengan Google"
      block
      :trailing="false"
    />
    <UDivider label="OR" />
    <form class="flex flex-col gap-3" @submit.prevent="">
      <UFormGroup label="Email" required>
        <UInput v-model="email" placeholder="email anda" />
      </UFormGroup>
      <UFormGroup label="Password" required>
        <UInput placeholder="password anda" />
      </UFormGroup>
      <UButton
        type="submit"
        block
        color="black"
      >
        Login
      </UButton>
    </form>
    <p>
      Belum punya akun? <NuxtLink to="/auth/signup" class="text-lime-500">
        Daftar
      </NuxtLink>
    </p>
  </div>
</template>
