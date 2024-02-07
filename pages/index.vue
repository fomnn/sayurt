<script setup lang="ts">

interface Manfaat {
  id: number,
  namaSayur: string,
  deskripsi: string,
  manfaat: string[],
  nutrisi: string[],
  imagePath: string
}

interface Kegunaan {
  id: number,
  penjelasan: string,
  oleh: string,
  jabatanAtauInstansi?: string,
}

const manfaatList: Manfaat[] = [
  { id: 1, namaSayur: 'Bayam', deskripsi: 'Sayuran hijau yang kaya akan nutrisi dan memiliki efek perlindungan terhadap kesehatan tubuh.', manfaat: ['Mata', 'Jantung', 'Tulang', 'Otot'], nutrisi: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Besi', 'Kalium'], imagePath: '/illustrasi/spinach.svg' },
  { id: 2, namaSayur: 'Brokoli', deskripsi: 'Sayuran hijau yang sangat enak.', manfaat: ['Jantung', 'Tulang', 'Otot'], nutrisi: ['Vitamin A', 'Vitamin C', 'Kalium'], imagePath: '/illustrasi/broccoli.svg' },
]
const curManfaatId = ref(1)
const curManfaat = computed(() => manfaatList[curManfaatId.value - 1])

const kegunaanList: Kegunaan[] = [
  { 
    id: 1, 
    penjelasan: "sayur dapat menurunkan insiden terkena penyakit kronis, seperti kanker, diabetes, jantung, dan stroke. Hal ini karena sayur mengandung karoten, folat, vitamin C, vitamin E, vitamin K, magnesium, dan kalium yang berfungsi sebagai zat pengatur, antibodi, dan antioksidan",
    oleh: "Sophia Denta Prapdika Sari, S.Tr. Gz",
    jabatanAtauInstansi: "Ahli gizi dari RSUP dr. Soeradji Tirtonegoro Klaten"
  },
  {
    id: 3,
    penjelasan: "Sayur dapat meningkatkan performa otak, karena antioksidan dapat memerangi radikal bebas dan mencegah terjadinya oksidasi4",
    oleh: "MyDoctors"
  },
  {
    id: 2,
    penjelasan: "Sayur dapat meningkatkan daya ingat, membuat tubuh lebih bugar, melancarkan buang air besar, membantu mengatasi obesitas, membuat perasaan lebih bahagia, meningkatkan sistem kekebalan tubuh, dan menjaga kesehatan tulang dan gigi",
    oleh: "Tim Promosi Kesehatan",
    jabatanAtauInstansi: "RSUP dr. Soeradji Tirtonegoro Klaten"
  },

]

onMounted(() => {
  setInterval(() => {
    curManfaatId.value == manfaatList.length ? curManfaatId.value = 1 : curManfaatId.value++
  }, 7000)
}
)
</script>

<template>
  <div class="">
    <div class="hero min-h-[calc(100vh-5rem)] bg-lime-400 flex flex-col px-[3rem] justify-evenly relative ">
      <BgHomepage />
      <div class="flex font-bold tracking-[-1rem] leading-none">
        <div class="flex flex-col text-[10rem] items-end -space-y-6">
          <span>Ayo</span>
          <span>Makan</span>
        </div>
        <span class="text-[20.5rem]">Sayur</span>
      </div>
      <div class="w-1/2 text-lg px-6 py-2 my-[2.8rem] bg-lime-50 h-fit rounded-xl border border-slate-500 shadow-[3px_5px_#334155]">
        <p>Sayur kaya akan vitamin, mineral, dan serat yang memberikan nutrisi penting bagi tubuh dan dapat membantu mencegah berbagai penyakit. Dengan mengonsumsi sayur secara teratur, kita dapat menjaga kesehatan tubuh dan meningkatkan daya tahan tubuh.</p>
      </div>
    </div>
    <div class="flex py-[6rem] bg-lime-200/40">
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
    <div class="bg-lime-200/40 py-[4rem] ">
      <h2 class="mx-auto w-fit text-5xl font-semibold">Sayur dan manfaatnya</h2>
      <div class="flex items-center !h-[450px] relative gap-[5%]">
        <div class="w-[10%] h-full flex items-center justify-center" @click="curManfaat.id == 1 ? curManfaatId = manfaatList.length : curManfaatId--">
          <ClientOnly >
            <Icon name="material-symbols:chevron-left-rounded" class="text-[6rem]" />
          </ClientOnly>
        </div>
        <Transition>

          <div class="w-[70%] flex gap-[4rem] bg-lime-50 px-[4rem] py-6 rounded-xl border border-slate-500 shadow-[3px_5px_#334155]">
            <NuxtImg :src="curManfaat.imagePath" class="w-[300px] h-[300px] rounded-full object-center object-cover drop-shadow-[3px_5px_#334155]" />
            <div class="flex flex-col gap-3 w-full">
              <div class="">
                <h3 class="text-3xl font-semibold">{{ curManfaat.namaSayur }}</h3>
                <p>{{ curManfaat.deskripsi }}</p>
              </div>
              <div class="">
                <h3 class="font-semibold">Nutrisi:</h3>
                <ul class="flex gap-2">
                  <li 
                    v-for="manfaat in curManfaat.nutrisi" 
                    :key="manfaat"
                    class=" rounded px-6 py-1 text-xs border border-slate-400"
                    >
                    {{ manfaat }}
                  </li>
                </ul>
              </div>
              <div class="">
                <h3 class="font-semibold">Bagus untuk:</h3>
                <ul class="flex gap-2">
                  <li 
                    v-for="manfaat in curManfaat.manfaat" 
                    :key="manfaat"
                    class=" rounded px-6 py-1 text-xs border border-slate-400"
                    >
                    {{ manfaat }}
                  </li>
                </ul>
              </div>
              <a href="" class="bg-lime-400 w-fit px-6 rounded-md border border-slate-500">Lihat ensiklopedia <Icon name="material-symbols:chevron-right-rounded" /></a>
            </div>
          </div>
        </Transition>
        <div class="w-[10%] h-full flex items-center justify-center" @click="curManfaatId == manfaatList.length ? curManfaatId = 1 : curManfaatId++">
          <ClientOnly >
            <Icon name="material-symbols:chevron-right-rounded" class="text-[6rem]" />
          </ClientOnly>
        </div>
      </div>
    </div>
    <div class="px-[6rem] py-[4rem] space-y-8 bg-lime-200/15">
      <h2 class="mx-auto w-fit text-5xl font-semibold">Kegunaan sayur menurut ahli</h2>
      <div class="grid grid-cols-3 gap-[3rem]">
        <div 
          class="bg-lime-50 border border-slate-600 shadow-[3px_5px_#334155] px-4 py-2 space-y-3 text-center rounded-xl self-start divide-y divide-lime-400" 
          v-for="{ id, penjelasan, oleh, jabatanAtauInstansi } in kegunaanList"
          :key="id"
          >
          <p class="text-lg">{{ penjelasan }}</p>
          <div class="">
            <h4 class="font-semibold">{{ oleh }}</h4>
            <span class="text-sm" v-if="jabatanAtauInstansi">{{ jabatanAtauInstansi }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cta bg-lime-300 py-[6rem] flex items-center justify-center">
      <div class="rounded-xl pb-3 px-8 bg-lime-50 border border-slate-600 shadow-[3px_5px_#334155] w-[60%] text-center flex flex-col gap-3">
        <h2 class="text-5xl mt-[-1.7rem] drop-shadow-[3px_4px_#84cc16] w-fit mx-auto px-2 font-semibold">Siap makan sayur🥦🥬?</h2>
        <p>Anda telah mempelajari betapa pentingnya makan sayur-sayuran untuk kesehatan dan kesejahteraan Anda. Sekaranglah waktunya untuk mengambil tindakan! Mari bersama-sama merubah kebiasaan makan kita dengan memasukkan lebih banyak sayur-sayuran dalam diet kita sehari-hari.</p>
        <p>Jadi, tunggu apa lagi? Mari bersama-sama mengubah hidup kita dengan mengutamakan makan sayur-sayuran dalam setiap hidangan. Jadilah pahlawan kesehatan bagi diri sendiri dan orang-orang di sekitar kita. Bergabunglah dengan gerakan "Makan Sayur" sekarang!</p>
        <NuxtLink to="/belanja" class="text-3xl bg-lime-200 px-6 rounded-lg border-2 border-lime-800 w-fit mx-auto mb-[-2rem]">Beli sayur sekarang</NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped></style>