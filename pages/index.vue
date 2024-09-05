<script setup lang="ts">
const router = useRouter()
const vegetableBenefits: { id: number, title: string, description: string }[] = [
  {
    id: 1,
    title: 'Meningkatkan Kekebalan Tubuh',
    description: 'Mengandung vitamin dan mineral yang mendukung kekebalan tubuh.',
  },
  {
    id: 2,
    title: 'Mendukung Pencernaan Sehat',
    description: 'Kaya serat untuk memperlancar pencernaan dan mencegah sembelit.',
  },
  {
    id: 3,
    title: 'Menurunkan Risiko Penyakit Jantung',
    description: 'Kaya antioksidan dan serat untuk menjaga kesehatan jantung.',
  },
  {
    id: 4,
    title: 'Mendukung Kesehatan Mata',
    description: 'Mengandung vitamin A dan antioksidan untuk penglihatan sehat.',
  },
  {
    id: 5,
    title: 'Mengontrol Berat Badan',
    description: 'Rendah kalori dan tinggi serat, bantu mengontrol berat badan.',
  },
  {
    id: 6,
    title: 'Mengurangi Risiko Kanker',
    description: 'Mengandung fitokimia dan antioksidan yang melawan sel kanker.',
  },
]
</script>

<template>
  <div class="">
    <div class="hero sm:min-h-[calc(100vh-5rem)] overflow-hidden flex flex-col-reverse sm:flex-row px-6 sm:px-28 items-center relative">
      <div class="sm:-mt-28 sm:w-6/12 sm:pr-2">
        <h1 class="text-3xl sm:text-6xl font-bold text-pretty">Kebaikan <span class="text-primary">Sayur Segar, Nutrisi Alami</span> untuk <span class="text-flax-300">Kesehatan Anda</span>.</h1>
        <p class="text-lg sm:text-2xl mt-2">
          Ayo makan sayur setiap hari, hidup sehat dan bugar sepanjang waktu!
        </p>
        <div class="mt-4">
          <UButton
            size="lg"
            :ui="{ rounded: 'rounded-full' }"
            class="px-10 bg-zomp-500 text-sm font-semibold"
            @click="router.push('/ensiklopedia')"
          >
            Lihat Manfaatnya
          </UButton>
        </div>
      </div>
      <div class="sm:w-6/12 py-6 w-full relative">
        <img src="/illustrasi/sayur.svg" class="mx-auto sm:mx-o sm:translate-x-6 sm:w-full w-3/4">
        <div id="bg-illustration-1" class="absolute top-0 sm:top-1/2 left-1/2 sm:-translate-y-2/4 -translate-x-1/4 w-full h-full sm:scale-125 -z-10" />
        <div id="bg-illustration-2" class="absolute top-0 sm:top-1/2 left-1/2 sm:-translate-y-3/4 -translate-x-2/4 w-full h-full sm:scale-110 -z-10" />
      </div>
    </div>
    <div class="py-[6rem]">
      <div class="flex flex-col items-center text-center px-6 sm:px-[20%] py-8">
        <h2 class="w-fit text-3xl sm:text-5xl font-semibold">
          Manfaat Sayur
        </h2>
        <p class="text-sm sm:text-base">Nikmati manfaat kesehatan yang luar biasa dengan mengintegrasikan sayur ke dalam pola makan Anda. Sayur merupakan sumber nutrisi yang kaya akan vitamin, mineral, serat, dan senyawa antioksidan yang penting bagi kesehatan tubuh.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 px-6 sm:px-28 gap-6">
        <div
          v-for="benefit in vegetableBenefits"
          :key="benefit.id"
          class="bg-zomp-50 border border-zomp-300 rounded-md px-4 py-3 flex flex-col gap-1"
        >
          <!-- <div class="py-1 px-2 rounded-sm bg-zomp-200/50 w-fit flex items-center justify-center mb-1">
            <Icon name="streamline-emojis:woman-health-worker-1" class="text-2xl" />
          </div> -->
          <h3 class="text-xl font-semibold">{{ benefit.title }}</h3>
          <p class="text-slate-600">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#bg-illustration-1{
  background: radial-gradient(#58a995 0%, transparent 65%);
}

#bg-illustration-2{
  background: radial-gradient(#e9d985 0%, transparent 65%);
}
</style>
