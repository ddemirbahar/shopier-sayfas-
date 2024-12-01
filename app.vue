<template>
  <div>
    <Navbar />
    <div class="main-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
.main-content {
  margin-left: 220px;
  padding: 20px;
}
</style>
