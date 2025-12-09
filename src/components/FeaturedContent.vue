<script setup>
import { RouterLink } from 'vue-router'

// class dasar untuk semua card featured
const baseCardClass =
  'block cursor-pointer rounded-3xl bg-pink-500 text-white ' +
  'shadow-md shadow-pink-300/60 px-6 py-8 ' +
  'transform transition hover:-translate-y-1 hover:shadow-xl hover:bg-gray-900'
</script>

<template>
  <div class="bg-white py-32">
    <div class="mx-auto max-w-5xl px-6">
      <h2 class="text-center text-5xl font-bold text-gray-900">
        Featured Content
      </h2>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <!-- CARD 1: Character Database -->
        <RouterLink :to="{ name: 'CharactersPage' }" :class="baseCardClass">
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-lg"
            >
              👤
            </span>
            <div>
              <h3 class="text-3xl font-semibold">
                Character Database
              </h3>
              <p class="mt-1 text-xs text-pink-50">
                Comprehensive information about all game characters.
              </p>
            </div>
          </div>
        </RouterLink>

        <!-- CARD 2: Plot and Stories → /plots -->
        <RouterLink :to="{ name: 'PlotPage' }" :class="baseCardClass">
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-lg"
            >
              📖
            </span>
            <div>
              <h3 class="text-3xl font-semibold">
                Plot and Stories
              </h3>
              <p class="mt-1 text-xs text-pink-50">
                Deep dive into the game world and backstories.
              </p>
            </div>
          </div>
        </RouterLink>

        <!-- CARD 3: Gameplay (sementara belum ada route, boleh '#' dulu) -->
        <RouterLink :to="{ name: 'GameplayPage' }" :class="baseCardClass">
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-lg"
            >
              ▶
            </span>
            <div>
              <h3 class="text-3xl font-semibold">
                Gameplay
              </h3>
              <p class="mt-1 text-xs text-pink-50">
                Learn about abilities, and gameplay systems.
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
