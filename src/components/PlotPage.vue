<script setup>
import Navbar from './Navbar.vue'
import PlotHeader from './PlotHeader.vue'
import PlotList from './PlotList.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Navbar />
    <PlotHeader />

    <!-- BIKIN AREA KONTEN FLEX-1 -->
    <PlotList class="flex-1" />

    <Footer />
  </div>
</template>
