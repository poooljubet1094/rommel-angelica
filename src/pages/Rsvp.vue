<script setup lang="ts">
import { ref } from 'vue'
import { db, collectionName } from '../firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

let name = '';
let count = 1;
let accept = ref(true);
let notes = '';
let submitted = ref(false);
let submitting = ref(false);
const errors = ref({
    name: [] as string[],
})

async function submitForm() {
    errors.value.name = [];
    if (name === '' || name == undefined) {
        errors.value.name.push("The name field is required.")
        return
    }

    submitting.value = true
    
    await setDoc(doc(db, collectionName, generateId(6, name)), {
        name: name,
        count: count,
        accept: getAcceptedValue(),
        notes: notes,
        created: Timestamp.now()
    });

    submitted.value = true
}

function getAcceptedValue() {
    let accepted = false;

    if (accept.value === true) {
        accepted = true;
    }
    return accepted;

}

function generateId(length: number, name: string) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = name.substring(0, 3).toUpperCase() + '-';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

</script>

<template>
    <div class="flex justify-center flex-col w-full px-4">
        <div class="text-center uppercase max-w-2xl mx-auto">
            <div class="text-4xl font-pinyon capitalize">Attire</div>
            <div class="">We would like to see you in your</div>
            <div class="font-bold">Semi formal attire</div>
            <div class="mt-2">We encourage you to dress according to our wedding color</div>
            <div class="flex gap-2 w-full justify-center mt-2">
                <div class="h-12 w-12 bg-[#e5e8ed] rounded-full shadow-2xl border border-gray-300"></div>
                <div class="h-12 w-12 bg-[#ead1cc] rounded-full shadow-2xl border border-gray-300"></div>
                <div class="h-12 w-12 bg-[#d39193] rounded-full shadow-2xl border border-gray-300"></div>
                <div class="h-12 w-12 bg-[#233661] rounded-full shadow-2xl border border-gray-300"></div>
                <div class="h-12 w-12 bg-[#2c2930] rounded-full shadow-2xl border border-gray-300"></div>
            </div>
        </div>
    </div>
    
    <div class="bg-[#e4a4ac] p-2 rounded-2xl mt-4">
        <div class="p-6 font-josefin-san w-full max-w-4xl rounded-2xl shadow-2xl bg-[#feebed]">
            <div class="text-4xl tracking-widest">RSVP</div>
            <div class="text-sm upper">We've reserved a seat(s) for you. The favor of your reply is requested until <strong>June 5, 2025</strong></div>
            <div v-if="submitted">
                <div class="p-6 mt-2 text-gray-50 rounded-lg" v-bind:class="{ 'bg-red-800' : !getAcceptedValue(), 'bg-green-600': getAcceptedValue() }">
                    <span v-if="!getAcceptedValue()">We are sad to know that you have decline your attendance to our event. But we really appreciate it! Have a good day to you!</span>
                    <span v-if="getAcceptedValue()">We are happy that you have confirmed your attendance to our event. We really appreciate it! We look forward to seeing you soon!</span> 
                </div>
            </div>
            <div v-if="!submitted">
                <div class="mt-4 flex flex-wrap">
                    <div class="my-auto w-full lg:w-1/3 xl:w-1/3">Name:</div>
                    <div class="w-full lg:w-2/3 xl:w-2/3">
                        <input type="text" v-model="name" class="border rounded-lg p-2 w-full shadow" style="border-color: #a74d0f;" v-bind:class="{ 'border-red-800' : errors.name.length > 0}" />
                        <div v-for="error in errors.name" v-bind:key="error" class="text-sm text-red-800 w-full">{{ error }}</div>
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap">
                    <div class="my-auto w-full lg:w-1/3 xl:w-1/3">Number of Guests atteding:</div>
                    <div class="w-full lg:w-2/3 xl:w-2/3">
                        <input type="number" v-model="count" class="border rounded-lg p-2 w-full shadow" style="border-color: #a74d0f;" />
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap">
                    <div class="my-auto w-2/3 lg:w-1/3 xl:w-1/3">Accepts with pleasure</div>
                    <div class="w-1/3 lg:w-2/3 xl:w-2/3">
                        <input type="radio" v-model="accept" value="true" name="bordered-checkbox" class="w-6 h-6 mr-4 text-primary text-start bg-tertiary border-tertiary rounded" style="background-color: #dcb89f; border-color: #a74d0f;" />
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap">
                    <div class="my-auto w-2/3 lg:w-1/3 xl:w-1/3">Declines with regret</div>
                    <div class="w-1/3 lg:w-2/3 xl:w-2/3">
                        <input type="radio" v-model="accept" value="false" name="bordered-checkbox" class="w-6 h-6 mr-4 text-primary text-start bg-tertiary border-tertiary rounded" style="background-color: #dcb89f; border-color: #a74d0f;" />
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap">
                    <div class="my-auto w-full lg:w-1/3 xl:w-1/3">Notes:</div>
                    <div class="w-full lg:w-2/3 xl:w-2/3">
                        <textarea v-model="notes" class="border rounded-lg p-2 w-full shadow" style="border-color: #a74d0f;" rows="4"></textarea>   
                    </div>
                </div>
                <div class="mt-4 flex flex-wrap">
                    <div class="my-auto w-full lg:w-1/3 xl:w-1/3">&nbsp;</div>
                        <div class="w-full lg:w-2/3 xl:w-2/3">
                        <button type="button" class="w-full rounded-lg py-2 text-white bg-[#506582]" @click="submitForm()" :disabled="submitting">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center flex-col w-full mt-4 p-4">
        <div class="text-center uppercase mt-4 max-w-2xl mx-auto">
            <div class="text-4xl font-pinyon capitalize">Gift</div>
            <div class="mt-2">With all that we have, we are trully blessed. Your presence and prayers are all that we request. But if you desire to give nonetheless a monetary gift is one we suggest.</div>
        </div>
        <div class="text-center uppercase mt-4 max-w-2xl mx-auto">
            <div class="text-4xl font-pinyon capitalize">Unplugged Ceremony</div>
            <div class="mt-2">We invite you to be fully present during our ceremony. Kindly put your cameras and phones off. We hire professional photographers and videographers to capture the event.</div>
        </div>
    </div>
</template>