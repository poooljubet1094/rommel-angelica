<script setup lang="ts">

</script>

<template>
    <div class="w-full flex justify-center bg-[#506582] p-4 text-white shadow-xl">
        <div class="w-full max-w-4xl flex flex-wrap justify-center lg:justify-between items-center">
            <div class="text-4xl lg:text-5xl xl:text-5xl font-stella">Rommel & Angelica</div>
            <div class="flex flex-wrap gap-x-8 lg:space-y-0 justify-between my-auto px-6 lg:px-0 xl:px-0 underline mt-4 lg:mt-0 xl:mt-0 font-semibold">
                <router-link to="/" class="py-2">Home</router-link>
                <router-link to="/venue" class="py-2">Venue</router-link>
                <router-link to="/entourage" class="py-2">Entourage</router-link>
                <router-link to="/programme" class="py-2">Programme</router-link>
                <router-link to="/photos" class="py-2">Photos</router-link>
                <router-link to="/rsvp" class="px-4 bg-[#e4a4ac] rounded-2xl py-2">Rsvp</router-link>
            </div>
        </div>
    </div>
</template>