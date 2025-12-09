<script setup>
const highlight = "Software Implementation and Testing";

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
          <span class="text-pink-500 font-semibold">About</span>
        </nav>

        <!-- CARD UTAMA -->
        <div class="bg-slate-50 rounded-[32px] shadow p-6 md:p-10 lg:p-12">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <!-- foto kiri -->
            <div class="w-48 h-80 md:w-56 md:h-[26rem] flex-shrink-0">
              <img
                src="/images/characters/zeke.jpg"
                alt="Zakaria Fattawari"
                class="w-full h-full object-cover rounded-[32px]"
              />
            </div>

            <!-- teks kanan -->
            <div class="text-left flex-1">
              <h1 class="text-2xl md:text-3xl font-bold text-slate-900">
                Zakaria Fattawari - 11231092
              </h1>
              <h2 class="mt-1 text-xl md:text-2xl font-bold text-pink-600">
                The Creator, and the Developer.
              </h2>

              <div class="mt-2 h-px w-full bg-slate-300"></div>

              <div
                class="mt-4 space-y-3 text-sm md:text-[15px] leading-relaxed text-slate-700"
              >
                <p>
                  A third-year Informatics college student at the Kalimantan
                  Institute of Technology in Indonesia, currently taking one of
                  the most challenging courses in the program, which is
                  <span class="font-semibold">
                    {{ " " + highlight }}
                  </span>.
                  For this course, he was tasked with creating an original
                  project that showcases both creativity and technical ability.
                  His idea gave birth to the game you are reading about now:
                  <span class="font-semibold">ECHOES: The Undying Follower</span>.
                </p>

                <p>
                  The game was inspired by his favorite title, FAITH: The
                  Unholy Trinity, particularly for its haunting atmosphere,
                  minimalist pixel-art style, and psychologically intense
                  storytelling. Drawing from these inspirations, he developed
                  ECHOES as both a test of imagination and a reflection of his
                  passion for narrative-driven horror, truly a project that
                  blends programming skill, design, and storytelling to bring a
                  deeply personal vision of fear and faith to life.
                </p>

                <p>
                  However, this website also came to life as part of another
                  course taken in the same semester:
                  <span class="font-semibold">
                    Software Implementation and Testing — Web Design
                  </span>.
                  Faced once again with the challenge of channeling his
                  creativity before it drove him insane, he decided to build
                  this website: ECHOES: The Undying Follower WIKI. Its purpose
                  is twofold — to serve as a digital archive where future
                  players can delve deeper into the lore, characters, and
                  mysteries surrounding the game, and, of course, to fulfill his
                  coursework requirements and graduate successfully.
                </p>
              </div>
            </div>
          </div>

        <!-- BAWAH: CARD PINK -->
        <div
          class="mt-8 grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]"
        >
          <!-- 2 card pink kiri -->
          <div class="grid gap-4 sm:grid-cols-2">
            <!-- Almamater → ke web ITK -->
            <a
              href="https://itk.ac.id"           
              target="_blank"
              rel="noopener noreferrer"
              :class="aboutCardClass"
            >
              <h3 class="text-lg font-semibold">
                Kalimantan Institute of Technology
              </h3>
              <p class="mt-2 text-xs">
                About his beloved almamater.
              </p>
            </a>

            <!-- Major → ke web Prodi Informatika -->
            <a
              href="https://if.itk.ac.id"        
              target="_blank"
              rel="noopener noreferrer"
              :class="aboutCardClass"
            >
              <h3 class="text-lg font-semibold">
                Informatics Major
              </h3>
              <p class="mt-2 text-xs">
                About his beloved major.
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