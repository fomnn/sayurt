<script lang="ts" setup>

</script>

<template>
  <div class="flex border-lime-500">
    <div class="py-[2rem] pl-[5rem] pr-[2rem] w-[75%] flex flex-col gap-4">
      <div class="">
        <h1 class="text-5xl font-semibold">
          Belanja Sayur
        </h1>
        <p>Pilih sayur yang akan dibeli</p>
      </div>
      <div class="grid grid-cols-4 gap-x-4 gap-y-3">
        <div v-for="i in 26" :key="i" class="bg-white w-fit rounded-md border border-slate-500 overflow-hidden">
          <NuxtImg src="https://th.bing.com/th/id/OIP.jU_J5EZtsq7pzF-kgveovwHaEK?rs=1&pid=ImgDetMain" />
          <div class="px-4 py-2 flex items-end justify-between">
            <div class="">
              <h3 class="text-xl font-semibold">
                Bayam
              </h3>
              <p class="text-sm">
                Rp 10.000 / Kg
              </p>
            </div>
            <div class="bg-lime-500 size-[2rem] flex items-center justify-center overflow-hidden rounded-md text-white border border-lime-600 shadow-sm">
              <Icon name="material-symbols:add-rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar flex flex-col w-[25%] border-l border-lime-500">
      <div class="sticky top-0 h-[calc(100dvh-5rem)]">
        <div class=" px-6 py-4">
          <h2 class="text-xl font-semibold">
            Filter
          </h2>
          <div class="flex flex-col gap-4 sticky top-0">
            <div class="">
              <span>Cari sayur</span>
              <input type="text" class="w-full border border-slate-500 rounded-md p-2">
            </div>
            <div class="">
              <span>Nutrisi yang terkandung</span>
              <select id="" name="" class="w-full px-2 py-2 rounded-md border border-slate-500">
                <option value="" selected class="px-2 py-2">
                  Semua nutrisi
                </option>
                <option value="" class="px-2 py-2">
                  Semua nutrisi
                </option>
              </select>
            </div>
            <div class="">
              <span>Bagus untuk bagian badan</span>
              <select id="" name="" class="w-full px-2 py-2 rounded-md border border-slate-500">
                <option value="" selected class="px-2 py-2">
                  Semua bagian
                </option>
                <option value="" class="px-2 py-2">
                  Semua nutrisi
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="px-6 py-4">
          <h2 class="text-2xl">
            Keranjang belanja
          </h2>
          <div class="border border-slate-500 bg-white flex flex-col px-2 rounded-md divide-y">
            <div v-for="i in 3" :key="i" class="flex flex-col justify-between py-2">
              <div class="flex gap-2 items-center">
                <h3 class="text-lg font-semibold">
                  Bayam
                </h3>
                <div class="relative">
                  <Icon name="iconamoon:attention-circle-thin" class="text-sm text-lime-500 peer" />
                  <span class="text-xs font-thin absolute w-fit text-nowrap bg-lime-50 px-3 py-1 rounded-md border  top-[-1rem] hidden peer-hover:block left-0 border-lime-500">Harga satuan Rp 10.000 per Kg</span>
                </div>
              </div>
              <div class="flex items-end justify-between">
                <div class="flex items-center gap-2">
                  <NuxtImg src="https://th.bing.com/th/id/OIP.jU_J5EZtsq7pzF-kgveovwHaEK?rs=1&pid=ImgDetMain" class="size-[3rem] object-cover rounded-md" />
                  <div class="flex flex-col items-end">
                    <p class="text-sm">
                      Jumlah: 1
                    </p>
                    <div class="flex items-center gap-1">
                      <button class="bg-lime-500 size-[1.5rem] flex items-center justify-center rounded-md text-white border border-lime-600 shadow-sm">
                        <Icon name="material-symbols:remove-rounded" />
                      </button>
                      <button class="bg-lime-500 size-[1.5rem] flex items-center justify-center rounded-md text-white border border-lime-600 shadow-sm">
                        <Icon name="material-symbols:add-rounded" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <p class="text-sm">
                    Subtotal:
                  </p>
                  <p class="text-sm font-semibold">
                    Rp 10.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6">
          <button class="bg-lime-400 text-slate-800 font-semibold w-full py-2 rounded-md border border-slate-500">
            Check out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
