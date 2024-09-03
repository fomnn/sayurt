<script lang="ts" setup>
const vegetablesBenefit = [
  {
    name: 'Bayam',
    benefit: 'Lutein dan zeaxanthin dalam bayam adalah antioksidan yang penting untuk kesehatan mata, membantu melindungi retina dari kerusakan akibat sinar UV dan mengurangi risiko degenerasi makula terkait usia.',
    by: 'Dr. Jeffrey Anshel',
    imgUrl: 'https://images.unsplash.com/photo-1634731201932-9bd92839bea2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photoBy: 'Rens D',
    imgSource: 'Unsplash.com',
    alt: 'Manfaat Bayam',
  },
  {
    name: 'Wortel',
    benefit: 'Wortel kaya akan beta-karoten, yang diubah tubuh menjadi vitamin A. Vitamin ini sangat penting untuk penglihatan yang baik, terutama dalam mencegah rabun senja.',
    by: 'Dr. Elizabeth Johnson',
    imgUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photoBy: 'Harshal S. Hirve',
    imgSource: 'Unsplash.com',
    alt: 'Manfaat Wortel',
  },
  {
    name: 'Brokoli',
    benefit: 'Brokoli mengandung vitamin K dan kalsium, yang penting untuk menjaga kesehatan tulang dan mencegah osteoporosis.',
    by: 'Dr. Susan Brown',
    imgUrl: 'https://images.unsplash.com/photo-1518164147695-36c13dd568f5?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photoBy: 'Reinaldo Kevin',
    imgSource: 'Unsplash.com',
    alt: 'Manfaat Brokoli',
  },
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 15000)

})
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :ui="{ item: 'basis-full h-screen' }"
    class="overflow-hidden"
    :items="vegetablesBenefit"
    ref="carouselRef"
  >
    <div class="w-full h-full relative">
      <img
        class="w-full h-full object-cover"
        :src="item.imgUrl"
        :alt="item.alt"
      >
      <div class="w-full h-full absolute top-0 left-0 bg-black/40" />
      <div class="absolute w-2/3 bottom-10 left-12 text-white drop-shadow-md">
        <h1 class="text-lg text-white mb-3">Manfaat {{ item.name }}</h1>
        <h2 class="text-3xl text-pretty font-semibold mb-3">
          {{ item.benefit }}
        </h2>
        <p>{{ item.by }}</p>
      </div>
      <p class="absolute top-4 right-6 text-xs text-white">
        Foto oleh <span class="font-bold">{{ item.photoBy }}</span> dari <span class="font-semibold">{{ item.imgSource }}</span>.
      </p>
    </div>
  </UCarousel>
</template>

<style scoped>

</style>
