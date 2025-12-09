<!-- src/components/CharactersDetail.vue -->
<script setup>
import Navbar from './Navbar.vue';
import CharactersHeader from './CharactersHeader.vue';
import Footer from './Footer.vue';

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import characters from '@/characters.json'

const route = useRoute()

const character = computed(() => {
  const id = route.params.id
  return characters.find(c => c.id === id)
})
</script>

<template>
  <!-- wrapper full page, kasih background & layout kolom -->
 <div class="min-h-screen flex flex-col">
    <!-- NAVBAR -->
    <Navbar/>
    <CharactersHeader/>

    <!-- CONTENT -->
    <main class="flex-1 max-w-4xl mx-auto pt-28 pb-16 px-4 -mt-25">
      <!-- breadcrumb kecil -->
        <nav class="text-xs text-slate-500 mb-6">
          <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
          <span class="mx-1">&gt;</span>
          <RouterLink to="/characters" class="hover:text-pink-500">Characters</RouterLink>
          <span class="mx-1">&gt;</span>
          <span class="text-pink-500 font-semibold">
            {{ character.name }}
          </span>
        </nav>

      <section
        v-if="character"
        class="bg-[#050816] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-lg"
      >
        <img
          :src="character.image"
          :alt="character.name"
          class="w-full md:w-72 aspect-[4/5] object-cover rounded-xl"
        />

        <div class="flex-1">
          <h1 class="text-3xl font-bold text-pink-500 mb-1">
            {{ character.name }}
          </h1>

          <p class="text-pink-400 font-medium mb-4" v-if="character.title">
            {{ character.title }}
          </p>

          <div class="text-sm text-slate-300 space-y-1 mb-4">
            <p>
              <span class="font-semibold text-slate-100">Age:</span>
              {{ character.age }}
            </p>
            <p>
              <span class="font-semibold text-slate-100">Role:</span>
              {{ character.role }}
            </p>
            <p>
              <span class="font-semibold text-slate-100">Status:</span>
              {{ character.status }}
            </p>
          </div>

          <p class="text-sm text-slate-200 leading-relaxed whitespace-pre-line">
            {{ character.description }}
          </p>
        </div>
      </section>

      <p v-else class="text-center text-slate-500">
        Character not found.
      </p>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>
