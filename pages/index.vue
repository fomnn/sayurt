<script setup lang="ts">

interface Manfaat {
  id: number,
  namaSayur: string,
  deskripsi: string,
  manfaat: string[],
  nutrisi: string[],
  imagePath: string
}

const manfaatList: Manfaat[]= [
  {id: 1, namaSayur: 'Bayam', deskripsi: 'Sayuran hijau yang kaya akan nutrisi dan memiliki efek perlindungan terhadap kesehatan tubuh.', manfaat: ['Mata', 'Jantung', 'Tulang', 'Otot'], nutrisi: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Besi', 'Kalium'], imagePath: '/illustrasi/spinach.svg'},
  {id: 2, namaSayur: 'Brokoli', deskripsi: 'Sayuran hijau yang sangat enak.', manfaat: ['Jantung', 'Tulang', 'Otot'], nutrisi: ['Vitamin A', 'Vitamin C', 'Kalium'], imagePath: '/illustrasi/broccoli.svg'},
]
const curManfaatIndex = ref(0)

const curManfaat = computed(() => manfaatList[curManfaatIndex.value])

</script>

<template>
  <div class="">
    <div class="hero min-h-[calc(100vh-5rem)] flex flex-col px-[3rem] justify-evenly relative ">
      <BgHomepage />
      <div class="flex font-bold tracking-[-1rem] leading-none">
        <div class="flex flex-col text-[10rem] items-end -space-y-6">
          <span>Ayo</span>
          <span>Makan</span>
        </div>
        <span class="text-[20.5rem]">Sayur</span>
      </div>
      <div class="w-1/2 text-lg py-[3rem]">
        <p>Sayur kaya akan vitamin, mineral, dan serat yang memberikan nutrisi penting bagi tubuh dan dapat membantu mencegah berbagai penyakit. Dengan mengonsumsi sayur secara teratur, kita dapat menjaga kesehatan tubuh dan meningkatkan daya tahan tubuh.</p>
      </div>
    </div>
    <div class="flex py-[6rem] bg-lime-200">
      <div class="">
        <div class="flex flex-col items-center text-center px-[20%] py-8">
          <h2 class="w-fit text-5xl font-semibold">Manfaat Sayur</h2>
          <p>Nikmati manfaat kesehatan yang luar biasa dengan mengintegrasikan sayur ke dalam pola makan Anda. Sayur merupakan sumber nutrisi yang kaya akan vitamin, mineral, serat, dan senyawa antioksidan yang penting bagi kesehatan tubuh.</p>
        </div>
        <div class="flex">
          <div class="w-full flex flex-col items-center justify-center px-10">
            <div class="bg-lime-50 border border-slate-500 overflow-hidden divide-y *:border-slate-500 rounded-2xl shadow-[3px_5px_#334155]">
              <div class=" px-4 py-3 hover:bg-white/50">
                <h1 class="text-lg font-semibold">Nutrisi yang Kaya</h1>
                <p class="text-sm">Sayur mengandung berbagai vitamin dan mineral esensial, seperti vitamin C, vitamin A, vitamin K, kalium, dan zat besi. Nutrisi ini penting untuk menjaga fungsi tubuh yang optimal, meningkatkan sistem kekebalan tubuh, dan menjaga kesehatan tulang.</p>
              </div>
              <div class=" px-4 py-3 hover:bg-white/50">
                <h1 class="text-lg font-semibold">Nutrisi yang Kaya</h1>
                <p class="text-sm">Sayur mengandung berbagai vitamin dan mineral esensial, seperti vitamin C, vitamin A, vitamin K, kalium, dan zat besi. Nutrisi ini penting untuk menjaga fungsi tubuh yang optimal, meningkatkan sistem kekebalan tubuh, dan menjaga kesehatan tulang.</p>
              </div>
              <div class=" px-4 py-3 hover:bg-white/50">
                <h1 class="text-lg font-semibold">Nutrisi yang Kaya</h1>
                <p class="text-sm">Sayur mengandung berbagai vitamin dan mineral esensial, seperti vitamin C, vitamin A, vitamin K, kalium, dan zat besi. Nutrisi ini penting untuk menjaga fungsi tubuh yang optimal, meningkatkan sistem kekebalan tubuh, dan menjaga kesehatan tulang.</p>
              </div>
            </div>
          </div>
          <div class="w-[100%] flex items-center justify-center">
            <NuxtImg src="/illustrasi/manfaat.svg" class="w-full drop-shadow-[4px_6px_#334155]" />
          </div>
          <div class="w-full flex flex-col items-center justify-center px-10">
            <div class="bg-lime-50 border border-slate-500 overflow-hidden divide-y *:border-slate-500 rounded-2xl shadow-[3px_5px_#334155]">
              <div class=" px-4 py-3 hover:bg-white/50">
                <h1 class="text-lg font-semibold">Nutrisi yang Kaya</h1>
                <p class="text-sm">Sayur mengandung berbagai vitamin dan mineral esensial, seperti vitamin C, vitamin A, vitamin K, kalium, dan zat besi. Nutrisi ini penting untuk menjaga fungsi tubuh yang optimal, meningkatkan sistem kekebalan tubuh, dan menjaga kesehatan tulang.</p>
              </div>
              <div class=" px-4 py-3 hover:bg-white/50">
                <h1 class="text-lg font-semibold">Nutrisi yang Kaya</h1>
                <p class="text-sm">Sayur mengandung berbagai vitamin dan mineral esensial, seperti vitamin C, vitamin A, vitamin K, kalium, dan zat besi. Nutrisi ini penting untuk menjaga fungsi tubuh yang optimal, meningkatkan sistem kekebalan tubuh, dan menjaga kesehatan tulang.</p>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
    <div class="bg-lime-200 py-[4rem]">
      <div class="flex !h-[450px]">
        <div class="flex items-center gap-[3rem] px-[15%] !h-[450px]" >
          <div class="">
            <NuxtImg :src="curManfaat.imagePath" class="w-[32rem] aspect-square object-center object-contain drop-shadow-[8px_8px_#334155]" />
          </div>
          <div class="w-full flex flex-col gap-1.5">
            <div class="">
              <h2 class="text-4xl font-semibold " >{{ curManfaat.namaSayur }}</h2>
              <p class="font-semibold line-clamp-2">{{ curManfaat.deskripsi }}</p>
            </div>
            <div class="flex flex-col">
              <span>Bagus untuk:</span>
              <div class="flex items-center gap-2">
                <span 
                  class="border border-emerald-600 text-xs px-4 py-0.5 rounded-lg font-semibold"
                  v-for="(manfaat, index) in curManfaat.manfaat"
                  :key="index"
                  >
                  {{ manfaat }}
                </span>
              </div>
            </div>
            <div class="flex flex-col">
              <span>Nutrisi yang terkandung:</span>
              <div class="flex items-center gap-2">
                <span 
                  class="border border-emerald-600 text-xs px-4 py-0.5 rounded-lg font-semibold"
                  v-for="(nutrisi, index) in curManfaat.nutrisi" 
                  :key="index"
                  >
                  {{ nutrisi }}
                </span>
              </div>
            </div>
            <button @click="curManfaatIndex++">ganti</button>
            <a href="" class="bg-lime-400 border border-slate-500 px-4 py-0.5 mt-2 rounded-lg w-fit">Lihat Ensiklopedia <Icon name="material-symbols:arrow-right-alt-rounded" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,h2,h3,h4,h5,h6,p,span,div,li,ul {
  @apply text-slate-800
}
</style>