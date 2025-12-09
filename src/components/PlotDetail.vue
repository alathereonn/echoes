<script setup>
import Navbar from './Navbar.vue';
import PlotHeader from './PlotHeader.vue';
import Footer from './Footer.vue';

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import plots from '@/plots.json'

const route = useRoute()

const plot = computed(() =>
  plots.find(p => p.id === route.params.id)
)

const isAvailable = computed(() => plot.value?.available)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Navbar/>
    <PlotHeader/>
    <main class="flex-1 max-w-5xl mx-auto pt-28 pb-16 px-4 -mt-23">
      <!-- breadcrumb kecil -->
        <nav class="text-xs text-slate-500 mb-6">
          <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
          <span class="mx-1">&gt;</span>
          <RouterLink to="/plots" class="hover:text-pink-500">Plots</RouterLink>
          <span class="mx-1">&gt;</span>
          <span class="text-pink-500 font-semibold">
            {{ plot.title }}
          </span>
        </nav>

      <!-- kalau plot tidak ditemukan sama sekali -->
      <p v-if="!plot" class="text-center text-gray-500 mt-10">
        Plot not found.
      </p>

      <!-- kalau plot ada tapi belum available -->
      <section
        v-else-if="!isAvailable"
        class="max-w-md mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center"
      >
        <h2 class="text-3xl font-bold text-pink-500 mb-3">
          Oops!
        </h2>
        <p class="text-sm text-gray-600 mb-4">
          The following chapter is not available yet.<br />
          This chapter will be playable when the game is updated.
        </p>
        <p class="text-xs text-gray-500 mb-6">
          Stay tuned for the next update of the game!
        </p>
        <router-link
          :to="{ name: 'PlotPage' }"
          class="inline-block text-xs px-5 py-2 rounded-full border border-pink-500
                 text-pink-500 hover:bg-pink-500 hover:text-gray-900 transition"
        >
          Back
        </router-link>
      </section>

      <!-- kalau plot tersedia -->
      <section
        v-else
        class="bg-[#050816] rounded-2xl p-6 md:p-8 text-white shadow-lg"
      >
        <!-- breadcrumb -->
        <p class="text-xs text-gray-400 mb-2">
          Home &gt; Plots &gt; <span class="text-pink-400">{{ plot.label }}</span>
        </p>

        <h1 class="text-2xl md:text-3xl font-bold mb-1">
          {{ plot.title }}
        </h1>

        <p class="text-xs text-gray-400 mb-6">
          {{ plot.type === 'chapter' ? 'Chapter' : 'Locations' }}
        </p>

        <article class="text-sm leading-relaxed text-slate-100 whitespace-pre-line">
          {{ plot.content }}
        </article>
      </section>
    </main>
    <Footer/>
  </div>
</template>
