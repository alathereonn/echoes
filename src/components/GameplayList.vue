<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// data untuk 2 kartu gameplay
const sections = [
  {
    id: 'controls',
    title: 'Game Controls',
    description: 'How to play the game correctly.',
    icon: '🎮',
    available: false,          // nanti kalau sudah ada halaman detail, ganti ke true
    routeName: 'GameControls', // optional, buat future route
  },
  {
    id: 'weapons',
    title: 'Game Weapons',
    description: 'Defend yourself from the unholy beings!',
    icon: '🗡️',
    available: false,
    routeName: 'GameWeapons',
  },
]

// state modal
const showLockedModal = ref(false)
const lockedTitle = ref('')

// klik kartu
function openSection(section) {
  // kalau belum available → munculin warning
  if (!section.available) {
    lockedTitle.value = section.title
    showLockedModal.value = true
    return
  }

  // kalau nanti sudah ada halaman detail, logicnya sudah siap:
  router.push({
    name: section.routeName,
    params: { id: section.id },
  })
}

function closeModal() {
  showLockedModal.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- biar konten nggak ketutup navbar fixed -->
    <main class="flex-1 pt-24 pb-16">
      <!-- KONTEN UTAMA -->
      <section class="max-w-5xl mx-auto px-4 -mt-20">
        <!-- breadcrumb -->
        <nav class="text-xs text-slate-500 mb-6">
          <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
          <span class="mx-1">&gt;</span>
          <span class="text-pink-500 font-semibold">Gameplay</span>
        </nav>

        <!-- card putih besar -->
        <div class="bg-slate-50 rounded-xl shadow p-8 text-center">
          <h2 class="text-3xl text-pink-500 font-bold mb-4">
            Game’s Objective
          </h2>
          <p
            class="text-lg text-gray-500 text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            The main objective of ECHOES: The Undying Follower is to survive
            the relentless pursuit of the supernatural entities haunting the
            player while uncovering the mystery behind a small town erased from
            all maps. Players must explore various eerie locations filled with
            paranormal phenomena to discover clues, artifacts, and documents
            that reveal the origins of the town’s curse and the connection
            between the demonic entity and its followers. By piecing together
            these mysteries, players determine how the cursed cycle will end,
            either by freeing the trapped souls and restoring the town or by
            becoming lost within the darkness forever.
          </p>

          <!-- 2 kartu pink -->
          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="section in sections"
              :key="section.id"
              @click="openSection(section)"
              class="block cursor-pointer rounded-[28px] bg-pink-500 text-white
                     px-8 py-10 md:py-12 shadow-md shadow-pink-300/60
                     transform transition hover:-translate-y-1 hover:shadow-xl hover:bg-gray-900
                     min-h-[190px] md:min-h-[210px] flex flex-col text-left"
            >
              <div class="flex items-center gap-3 mb-6">
                <span class="text-3xl">{{ section.icon }}</span>
                <h4 class="font-semibold text-2xl">
                  {{ section.title }}
                </h4>
              </div>
              <p class="text-sm md:text-base font-bold leading-snug">
                {{ section.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- MODAL WARNING -->
      <div
        v-if="showLockedModal"
        class="fixed inset-0 z-[60] flex items-center justify-center bg-black/50"
      >
        <div
          class="bg-white rounded-[32px] max-w-lg w-[90%] px-10 py-10 text-center shadow-2xl"
        >
          <h2 class="text-3xl font-extrabold text-pink-600 mb-4">
            Oops!
          </h2>

          <p class="text-sm text-gray-700 mb-2">
            This gameplay section is not available yet.
          </p>
          <p class="text-sm text-gray-700 mb-4">
            It will be added in a future update of the game.
          </p>

          <p class="text-sm text-gray-500 mb-6">
            Stay tuned for the next update of the game!
          </p>

          <p class="text-xs text-gray-400 italic mb-4">
            ( {{ lockedTitle }} )
          </p>

          <button
            type="button"
            class="mt-2 inline-flex items-center justify-center rounded-full
                   px-8 py-2 text-sm font-semibold border border-pink-500
                   text-pink-500 hover:bg-pink-500 hover:text-white transition"
            @click="closeModal"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
