<script lang="ts" setup>

</script>

<template>
  <div class="flex items-center justify-between px-[3rem] bg-lime-400 rounded-lg text-slate-700 h-[5rem]">
    <div class="flex items-center gap-6">
      <ClientOnly>
        <Icon name="iconoir:vegan" class="text-[2rem] text-lime-800" />
      </ClientOnly>
      <div class="flex gap-8">
        <NuxtLink to="/" class="hover:underline">
          Home
        </NuxtLink>
        <NuxtLink to="/ensiklopedia" class="hover:underline">
          Ensiklopedia
        </NuxtLink>
        <NuxtLink to="/artikel" class="hover:underline">
          Artikel
        </NuxtLink>
        <NuxtLink to="/belanja" class="hover:underline">
          Belanja
        </NuxtLink>
        <!-- <a href="#" class="hover:underline">Tentang kami</a> -->
      </div>
    </div>
    <div class="flex gap-8">
      <NuxtLink
        to="/auth/login"
        class="hover:underline"
      >
        Login
      </NuxtLink>
      <NuxtLink to="/auth/signup" class="hover:underline">Signup</NuxtLink>
    </div>
  </div>
</template>

<style>

</style>
