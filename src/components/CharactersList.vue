<template>
  <main class="max-w-5xl mx-auto pt-32 pb-64 px-4 -mt-28">
    <!-- Breadcrumb + Filter -->
    <div
      class="flex flex-wrap items-center justify-between gap-4 mb-6"
    >
      <!-- breadcrumb kecil -->
        <nav class="text-xs text-slate-500 mb-6">
          <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
          <span class="mx-1">&gt;</span>
          <span class="text-pink-500 font-semibold">Characters</span>
        </nav>

      <!-- filter buttons -->
      <div class="flex gap-3">
        <!-- ALL -->
        <button
          @click="activeFilter = 'all'"
          :class="[
            'px-6 py-2 rounded-full text-sm font-semibold shadow-md transition',
            activeFilter === 'all'
              ? 'bg-pink-500 text-white shadow-pink-300/60'
              : 'bg-white text-pink-500 border border-pink-400 hover:bg-gray-900 hover:text-pink-500'
          ]"
        >
          All
        </button>

        <!-- HUMAN -->
        <button
          @click="activeFilter = 'human'"
          :class="[
            'px-6 py-2 rounded-full text-sm font-semibold shadow-md transition',
            activeFilter === 'human'
              ? 'bg-pink-500 text-white shadow-pink-300/60'
              : 'bg-white text-pink-500 border border-pink-400 hover:bg-gray-900 hover:text-pink-500'
          ]"
        >
          Human
        </button>

        <!-- DEMON -->
        <button
          @click="activeFilter = 'demon'"
          :class="[
            'px-6 py-2 rounded-full text-sm font-semibold shadow-md transition',
            activeFilter === 'demon'
              ? 'bg-pink-500 text-white shadow-pink-300/60'
              : 'bg-white text-pink-500 border border-pink-400 hover:bg-gray-900 hover:text-pink-500'
          ]"
        >
          Demon
        </button>
      </div>
    </div>

    <!-- LIST KARTU -->
    <div class="grid gap-6 md:grid-cols-3">
      <article
        v-for="char in filteredCharacters"
        :key="char.id"
        class="bg-slate-900 rounded-xl p-4 shadow"
      >
        <img
          :src="char.image"
          :alt="char.name"
          class="w-full aspect-[4/5] object-cover rounded-lg mb-3"
        />

        <h2 class="text-xl font-semibold text-white">
          {{ char.name }}
        </h2>
        <p class="text-sm text-pink-400 mb-2">
          {{ char.title }}
        </p>
        <p class="text-xs text-slate-300 line-clamp-2 mb-3">
          {{ char.shortDescription }}
        </p>

        <router-link
          :to="{ name: 'CharacterDetail', params: { id: char.id } }"
          class="inline-block text-xs px-3 py-1 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-gray-900 transition"
        >
          View Details
        </router-link>
      </article>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import characters from '@/characters.json'

const activeFilter = ref('all')

// hasil filter yang akan dipakai di v-for
const filteredCharacters = computed(() => {
  const filter = activeFilter.value

  if (filter === 'all') return characters

  return characters.filter((c) => {
    const status = (c.status || '').toLowerCase()
    if (filter === 'human') return status === 'human'
    if (filter === 'demon') return status === 'demon'
    return true
  })
})
</script>
