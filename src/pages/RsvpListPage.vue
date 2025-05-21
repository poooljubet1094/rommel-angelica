<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCollection } from 'vuefire'
import { query, orderBy, getAggregateFromServer, sum, where } from 'firebase/firestore'
import { rsvpRef } from '../firebase'
import { RsvpModel } from '../models/RsvpModel'

let todos = ref([])
let total = ref(0)
let totalSlots = ref(200)
let totalAvailable = ref(0)

onMounted(async () => {
    const qr = query(rsvpRef, orderBy('created', 'desc'))
    todos = useCollection<RsvpModel>(qr).data
    todos.value = await todos.value

    const qrTotal = query(rsvpRef, where('accept', '==', true))

    const snapshot = await getAggregateFromServer(qrTotal, {
        total: sum('count')
    });

    total.value = snapshot.data().total
    totalAvailable.value = totalSlots.value - total.value
})

</script>

<template>
    <div class="font-josefin-san px-4">
        <h1 class="text-xl font-bold">Total Visitors: {{ total }}</h1>
        <h1 class="text-lg mt-2">Total Slots: {{ totalSlots }}</h1>
        <h1 class="text-lg">Total Available Slots: {{ totalAvailable }}</h1>
        <div class="flex flex-col gap-y-6 mt-4">
            <div v-for="todo in todos" :key="todo.id" class="flex shadow-md p-4 flex-wrap rounded-2xl text-gray-50" :class="{ 'bg-red-800' : !todo.accept, 'bg-green-800' : todo.accept }">
                <div class="w-full lg:w-1/2 xl:w-1/2"><b>Name:</b> {{ todo.name }}</div>
                <div class="w-full lg:w-1/2 xl:w-1/2"><b>Count:</b> {{ todo.count }}</div>
                <div class="w-full lg:w-1/2 xl:w-1/2"><b>Accepted:</b> {{ (todo.accept) ? 'Accepts with pleasure' : 'Declines with regret' }}</div>
                <div class="w-full lg:w-1/2 xl:w-1/2"><b>Responded At:</b> {{ todo.created.toDate().toDateString() }}</div>
                <div class="w-full"><b>Notes:</b> {{ todo.notes }}</div>
            </div>
        </div>
    </div>
</template>