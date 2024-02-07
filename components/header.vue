<template>
  <div class="flex items-center justify-between px-[3rem] rounded-lg text-slate-700 h-[5rem]">
    <div class="flex items-center gap-6">
      <ClientOnly>
        <Icon name="iconoir:vegan" class="text-[2rem] text-lime-800" />
      </ClientOnly>
      <div class="flex gap-8">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/ensiklopedia">Ensiklopedia</NuxtLink>
        <a href="#">Blog</a>
        <a href="#">Belanja</a>
        <a href="#">Tentang kami</a>
      </div>
    </div>
    <div class="flex gap-8">
      <a href="#">Login</a>
      <a href="#">Signup</a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>