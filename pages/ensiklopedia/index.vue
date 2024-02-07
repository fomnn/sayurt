<template>
  <div class="flex border-t border-lime-500">

    <div class="py-[2rem] pl-[5rem] pr-[2rem] w-[80%] flex flex-col gap-4">
      <div class="">
        <h1 class="text-5xl font-semibold">Ensiklopedia Sayur</h1>
        <p>Pilih sayur untuk melihat ensiklopedianya</p>
      </div>
      <div class="grid grid-cols-5 gap-x-4 gap-y-3">
        <div class="bg-white w-fit rounded-md border border-slate-500 overflow-hidden" v-for="i in 26">
          <NuxtImg src="https://th.bing.com/th/id/OIP.jU_J5EZtsq7pzF-kgveovwHaEK?rs=1&pid=ImgDetMain" />
          <div class="px-4 py-2">
            <h3 class="text-xl font-semibold">Bayam</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar w-[20%] border-l border-lime-500">
      <div class="flex flex-col gap-4 sticky top-0 px-6 py-4">
        <div class="">
          <span>Cari sayur</span>
          <input type="text" class="w-full border border-slate-500 rounded-md p-2" />
        </div>
        <div class="">
          <span>Nutrisi yang terkandung</span>
          <select name="" id="" class="w-full px-2 py-2 rounded-md border border-slate-500">
            <option value="" selected class="px-2 py-2">Semua nutrisi</option>
            <option value="" class="px-2 py-2">Semua nutrisi</option>
          </select>
        </div>
        <div class="">
          <span>Bagus untuk bagian badan</span>
          <select name="" id="" class="w-full px-2 py-2 rounded-md border border-slate-500">
            <option value="" selected class="px-2 py-2">Semua bagian</option>
            <option value="" class="px-2 py-2">Semua nutrisi</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>