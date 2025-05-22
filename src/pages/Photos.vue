<script setup lang="ts">

function engagementLeft() {
    const scrollContainer = document.querySelector('.engagement-scroll');
    scrollToLeft(scrollContainer);
}

function engagementRight() {
    const scrollContainer = document.querySelector('.engagement-scroll');
    scrollToRight(scrollContainer);
}

function taiwanLeft() {
    const scrollContainer = document.querySelector('.taiwan-scroll');
    scrollToLeft(scrollContainer);
}

function taiwanRight() {
    const scrollContainer = document.querySelector('.taiwan-scroll');
    scrollToRight(scrollContainer);
}

function momentsLeft() {
    const scrollContainer = document.querySelector('.moments-scroll');
    scrollToLeft(scrollContainer);
}

function momentsRight() {
    const scrollContainer = document.querySelector('.moments-scroll');
    scrollToRight(scrollContainer);
}

function kimonoLeft() {
    const scrollContainer = document.querySelector('.kimono-scroll');
    scrollToLeft(scrollContainer);
}

function kimonoRight() {
    const scrollContainer = document.querySelector('.kimono-scroll');
    scrollToRight(scrollContainer);
}

function scrollToLeft(scrollContainer: any) {
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    }
}

function scrollToRight(scrollContainer: any) {
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    }
}

</script>

<template>
    <div class="p-4">
        <div class="w-full text-center text-6xl font-stella">Expressive in blue</div>
        <div class="relative w-full">
            <div class="engagement-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/blue/image1.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/blue/image2.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/blue/image3.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/blue/image4.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/blue/image5.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/blue/image6.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                </div>
            </div> 
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="engagementLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="engagementRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div class="w-full text-center text-6xl mt-12 font-stella">Expressive in pink</div>
        <div class="relative w-full">
            <div class="taiwan-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image1.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image2.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image3.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image4.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image5.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image6.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image7.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image8.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/expressive/pink/image9.JPG" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                </div>
            </div>
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="taiwanLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="taiwanRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div class="w-full text-center text-6xl mt-12 font-stella">Japan</div>
        <div class="relative w-full">
            <div class="moments-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image1.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image2.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image3.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image5.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image6.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image7.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image8.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image9.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                </div>
            </div>
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="momentsLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="momentsRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div class="w-full text-center text-6xl mt-12 font-stella">Kimono</div>
        <div class="relative w-full">
            <div class="kimono-scroll overflow-x-scroll overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl">
                <div class="flex flex-nowrap w-full justify-between gap-4 mb-4">
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image1.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image2.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image3.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image4.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image5.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image6.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image7.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image8.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image9.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image10.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image11.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image12.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image13.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image14.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image15.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image16.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image18.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image19.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/kimono/image20.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                    <div class="w-auto h-auto rounded-2xl shadow p-2 bg-[#e4a4ac] shrink-0">
                        <img src="../assets/gallery/japan/image4.jpg" alt="Hero Image" class="w-auto h-96 rounded-2xl object-contain bg-[#e4a4ac]" />
                    </div>
                </div>
            </div>
            <div class="absolute top-40 left-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="kimonoLeft()">
                    <img src="../assets/svgs/chevron_left_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
            <div class="absolute top-40 right-[-20px]">
                <button class="bg-[#506582] text-white rounded-full p-4" @click="kimonoRight()">
                    <img src="../assets/svgs/chevron_right_24dp_E3E3E3.svg" alt="Left Arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
    </div>
</template>