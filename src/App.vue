<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <div class="w-full h-screen">
    <NavMenu></NavMenu>
    <div class="w-full flex justify-center">
      <div class="p-4 max-w-4xl w-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
