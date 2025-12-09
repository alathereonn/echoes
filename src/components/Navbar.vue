<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const closeNav = () => {
  isOpen.value = false
}
</script>


<template>
  <nav class="bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-default">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center" @click="closeNav">
        <span class="self-center text-2xl font-semibold text-pink-500">
          ECHOES WIKI
        </span>
      </RouterLink>

      <!-- tombol hamburger -->
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-base
               md:hidden hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        :aria-expanded="isOpen"
        @click="toggleNav"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>

      <!-- menu -->
      <div :class="['w-full md:block md:w-auto', isOpen ? 'block' : 'hidden']">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-gray-900
                 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent
                 divide-y divide-gray-800 md:divide-y-0"
        >
          <li>
            <RouterLink
              to="/"
              class="text-sm font-medium text-gray-300 hover:text-pink-500"
              @click="closeNav"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/plots"
              class="text-sm font-medium text-gray-300 hover:text-pink-500"
              @click="closeNav"
            >
              Plots
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/characters"
              class="text-sm font-medium text-gray-300 hover:text-pink-500"
              @click="closeNav"
            >
              Characters
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/gameplay"
              class="text-sm font-medium text-gray-300 hover:text-pink-500"
              @click="closeNav"
            >
              Gameplay
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="text-sm font-medium text-gray-300 hover:text-pink-500"
              @click="closeNav"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="text-sm font-medium text-gray-300 hover:text-pink-500"
              @click="closeNav"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
