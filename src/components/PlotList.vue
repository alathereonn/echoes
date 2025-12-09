<script setup>
import plots from '@/plots.json'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showLockedModal = ref(false)
const lockedTitle = ref('')

function openPlot(plot) {
  if (plot.available === false) {
    lockedTitle.value = plot.title
    showLockedModal.value = true
    return
  }

  router.push({
    name: 'PlotDetail',
    params: { id: plot.id },
  })
}

function closeModal() {
  showLockedModal.value = false
}
</script>

<template>
  <main class="max-w-6xl mx-auto pt-32 pb-24 px-4 -mt-28">
        <nav class="text-xs text-slate-500 mb-6">
          <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
          <span class="mx-1">&gt;</span>
          <span class="text-pink-500 font-semibold">Plots</span>
        </nav>

    <div class="grid gap-8 md:grid-cols-3">
      <div
        v-for="plot in plots"
        :key="plot.id"
        @click="openPlot(plot)"
        class="block cursor-pointer rounded-[28px] bg-pink-500 text-white
               px-8 py-10 md:py-12 shadow-md shadow-pink-300/60
               transform transition hover:-translate-y-1 hover:shadow-xl hover:bg-gray-900
               min-h-[190px] md:min-h-[210px] flex items-center"
      >
        <div class="flex items-center gap-4">
          <span
            class="inline-flex h-10 w-10 items-center justify-center
                   rounded-full bg-pink-600 text-xl"
          >
            <span v-if="plot.type === 'chapter'">▶</span>
            <span v-else>📍</span>
          </span>

          <div>
            <p class="text-xs font-semibold uppercase tracking-wide">
              {{ plot.label }}
            </p>
            <h3 class="text-sm md:text-base font-bold leading-snug">
              {{ plot.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL LOCKED CHAPTER -->
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
          The following chapter is not available yet.
        </p>
        <p class="text-sm text-gray-700 mb-4">
          This chapter will be playable when the game is updated.
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
</template>
