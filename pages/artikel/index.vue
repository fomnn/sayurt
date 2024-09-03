<script lang="ts" setup>

</script>

<template>
  <div class="px-[6rem] flex flex-col gap-3 border-lime-500 py-[2rem]">
    <div class="">
      <h1 class="text-5xl font-semibold">
        Artikel Tentang Sayur
      </h1>
      <p>Baca artikel-artikel yang bermanfaat tentang sayur</p>
    </div>
    <div class="">
      <h1 class="text-2xl font-semibold">
        Dapatkan Info Terkait Artikel-artikel Terbaru
      </h1>
      <div class="bg-lime-100 px-4 py-1 w-fit rounded-md mt-1">
        <input
          id=""
          type="text"
          name=""
          placeholder="kamu@domain.com"
          class="bg-inherit focus:outline-0"
        >
        <button class="bg-lime-500 text-white px-4 rounded">
          Ikuti
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5 mt-5">
      <div v-for="i in 7" :key="i" class="rounded-md overflow-hidden border border-lime-600 bg-lime-200 hover:bg-lime-400">
        <img src="https://nuxt.com/_vercel/image?url=/assets/blog/v3.10.png&w=768&q=100" alt="" class="w-full aspect-video">
        <div class="px-4 py-2">
          <h3 class="text-lg font-semibold">
            Manfaat memakan bayam untuk jantung
          </h3>
          <p class="line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex justify-between items-center mt-3">
            <span>7 Februari 2024</span>
            <NuxtImg src="https://nuxt.com/_vercel/image?url=/assets/blog/v3.10.png&w=768&q=100" class="size-7 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
