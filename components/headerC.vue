<script lang="ts" setup>

</script>

<template>
  <div class="flex items-center justify-between px-6 sm:px-[3rem] rounded-lg text-slate-700 h-16 sm:h-[5rem]">
    <div class="flex w-full items-center justify-between sm:justify-start gap-6">
      <ClientOnly>
        <Icon name="iconoir:vegan" class="text-[2rem] text-lime-800" />
      </ClientOnly>
      <div class="flex gap-8">
        <NuxtLink to="/" class="hover:underline text-sm sm:text-base">
          Home
        </NuxtLink>
        <NuxtLink to="/ensiklopedia" class="hover:underline text-sm sm:text-base">
          Ensiklopedia
        </NuxtLink>
        <!-- <a href="#" class="hover:underline">Tentang kami</a> -->
      </div>
    </div>
    <!-- <div class="flex gap-8">
      <NuxtLink
        to="/auth/login"
        class="hover:underline"
      >
        Login
      </NuxtLink>
      <NuxtLink to="/auth/signup" class="hover:underline">Signup</NuxtLink>
    </div> -->
  </div>
</template>

<style>

</style>
