<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const email = ref('')
</script>

<template>
  <div class="w-4/12 bg-white px-16 gap-5 relative flex flex-col justify-center">
    <div class="flex items-center gap-1 absolute top-4 left-6 text-lime-700">
      <Icon name="iconoir:vegan" class="text-4xl" />
      <span class="text-2xl font-semibold">Sayurt</span>
    </div>
    <h1 class="text-2xl font-semibold">
      Buat Akun
    </h1>
    <UButton
      icon="logos:google-icon"
      size="sm"
      color="white"
      variant="solid"
      label="Daftar dengan Google"
      block
      :trailing="false"
    />
    <UDivider label="OR" />
    <form class="flex flex-col gap-3" @submit.prevent="">
      <UFormGroup label="Nama Depan" required>
        <UInput placeholder="nama anda" />
      </UFormGroup>
      <UFormGroup label="Email" required>
        <UInput v-model="email" placeholder="email anda" />
      </UFormGroup>
      <UFormGroup label="Password" required help="Minimal 8 huruf">
        <UInput placeholder="password anda" />
      </UFormGroup>
      <UButton type="submit" block color="black">
        Buat Akun
      </UButton>
    </form>
    <p>
      Sudah punya akun? <NuxtLink to="/auth/login" class="text-lime-500">
        Masuk
      </NuxtLink>
    </p>
  </div>
</template>
