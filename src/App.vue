<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
import { ref, onMounted } from 'vue'

const audioPlayer = ref<HTMLAudioElement | null>(null)

const playAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play()
  }
}

onMounted(() => {
  setInterval(() => playAudio(), 3000);
})

</script>

<template>
  <div class="w-full h-screen">
    <NavMenu></NavMenu>
    <div class="w-full flex justify-center">
      <div class="px-4 py-8 max-w-4xl w-full">
        <RouterView></RouterView>
      </div>
    </div>
    <div class="w-full flex justify-center items-center mb-8 pb-8">
      <audio ref="audioPlayer" controls autoplay loop>
        <source src="./assets/background-sound.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<style scoped>
</style>
