<script lang="ts" setup>
const route = useRoute()
const { navPageFromPath } = useContentHelpers()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const page = navPageFromPath(route.path, navigation.value!)
</script>

<template>
  <div class="py-[2rem] px-6 sm:px-24">
    <div class="mb-4">
      <h1 class="text-3xl sm:text-5xl font-semibold">
        Ensiklopedia Sayur
      </h1>
      <p class="text-sm sm:text-base">Pilih sayur untuk melihat ensiklopedianya</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-3" v-if="page">
      <NuxtLink
        v-for="item in page.children"
        :key="item._id"
        :to="item._path"
        class="bg-white w-fit rounded-md border border-slate-500 overflow-hidden"
      >
        <NuxtImg src="https://th.bing.com/th/id/OIP.jU_J5EZtsq7pzF-kgveovwHaEK?rs=1&pid=ImgDetMain" />
        <div class="px-4 py-2">
          <h3 class="text-lg sm:text-xl font-semibold">
            Bayam
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>

</style>
