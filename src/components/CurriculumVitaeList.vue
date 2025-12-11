<script setup>
const highlight = "Fisika Dasar 1, Fisika Dasar 2, Sistem Digital, Interaksi Manusia dan Komputer.";

const aboutCardClass =
  "block cursor-pointer rounded-[24px] bg-pink-500 text-white " +
  "px-5 py-4 shadow-md shadow-pink-200/70 flex flex-col justify-between " +
  "transform transition hover:-translate-y-1 hover:shadow-xl hover:bg-gray-900";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <main class="flex-1 pt-24 pb-16">
      <section class="max-w-6xl mx-auto px-4 -mt-20">
        <!-- breadcrumb -->
        <nav class="text-xs text-slate-500 mb-6">
          <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
          <span class="mx-1">&gt;</span>
          <span class="text-pink-500 font-semibold">CurriculumVitae</span>
        </nav>

        <!-- CARD UTAMA -->
        <div class="bg-slate-50 rounded-[32px] shadow p-6 md:p-10 lg:p-12">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <!-- TEKS KIRI -->
            <div class="text-left flex-1">
              <h1 class="text-2xl md:text-3xl font-bold text-slate-900">
                Zakaria Fattawari
              </h1>
              <h2 class="mt-1 text-l md:text-l font-bold text-pink-600">
                11231092 - Computer Science - Kalimantan Institute of Technology.
              </h2>

              <div class="mt-2 h-px w-full bg-slate-300"></div>

              <div
                class="mt-4 space-y-3 text-sm md:text-[15px] leading-relaxed text-slate-700"
              >
                <p>
                  Mahasiswa Informatika semester 5 yang senang sekali dalam mempelajari
                  hal baru. Selama perkuliahan ini, dia sudah menjadi asisten dalam beberapa 
                  mata kuliah yang diantaranya adalah, 
                  <span class="font-semibold">
                    {{ " " + highlight }}
                  </span>.
                  Dimata kuliah Desain Web, sang Author disuruh untuk membuat web:
                  <span class="font-semibold">ECHOES: The Undying Follower WIKI</span>
                  sebagai tugas besarnya.
                </p>
                <p>
                  Author memiliki hobi untuk mempelajari hal baru, dia suka belajar, menggambar,
                  memasak, dan olahraga seperti jogging dan gym (dulu sih, sekarang ga sempat karena
                  sibuk kuliah dan kerja hweqwhwhhwh)
                </p>
                <p>
                  Secara singkat, sang Author mendapatkan tugas untuk melakukan Coding on the Spot
                  yang dimana adalah akibat dari adanya page ini, yaitu Curriculum Vitae Page. Sang Author juga
                  terampil dalam beberapa hal, yang dimana adalah menggambar, Docker, Python, dan juga 
                  memasak. 
                </p>
              </div>
            </div>

            <!-- FOTO KANAN -->
            <div class="flex w-full md:w-auto md:justify-end">
              <div class="w-48 h-80 md:w-56 md:h-[19rem] flex-shrink-0 md:ml-auto">
                <img
                  src="/images/characters/zeke.jpg"
                  alt="Zakaria Fattawari"
                  class="w-full h-full object-cover rounded-[32px]"
                />
              </div>
            </div>
          </div>

          <!-- BAWAH: CARD PINK -->
          <div
            class="mt-8 grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]"
          >
            <!-- 3 card pink kiri -->
            <div class="grid gap-4 sm:grid-cols-3">
              <!-- Skill: Drawing -->
              <a
                target="_blank"
                rel="noopener noreferrer"
                :class="aboutCardClass"
              >
                <h3 class="text-lg font-semibold">
                  Skill: Drawing
                </h3>
                <p class="mt-2 text-xs">
                  Bisa menggambar anime stuff, dulu pernah buka commission di Facebook.
                </p>
              </a>

              <!-- Skill: Python -->
              <a    
                target="_blank"
                rel="noopener noreferrer"
                :class="aboutCardClass"
              >
                <h3 class="text-lg font-semibold">
                  Skill: Python
                </h3>
                <p class="mt-2 text-xs">
                  Alhamdulillah bisa python meskipun aku membenci Python itu sendiri.
                </p>
              </a>

              <!-- Skill: Cooking -->
              <a      
                target="_blank"
                rel="noopener noreferrer"
                :class="aboutCardClass"
              >
                <h3 class="text-lg font-semibold">
                  Skiil: Cooking
                </h3>
                <p class="mt-2 text-xs">
                  Suka untuk memasak kue seperti bolu, brownies, dll dikala memiliki waktu senggang dan punya ovennya.
                </p>
              </a>
            </div>

            <!-- slot kanan bisa kamu isi card kontak nanti -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
