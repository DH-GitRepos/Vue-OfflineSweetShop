<script setup>
defineProps({
    headerImage: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="h-[25vh] md:h-[50vh] overflow-hidden">
        <picture>
            <source media="(min-width: 601px)" :srcset="`images/hero/${headerImage}.webp`" type="image/webp" />
            <source media="(min-width: 1px)" :srcset="`images/hero/${headerImage}_small.webp 1x, images/hero/${headerImage}.webp 2x`" type="image/webp" />
            <source media="(min-width: 601px)" :srcset="`images/hero/${headerImage}.jpg`" />
            <img 
                id="mainImg"
                class="w-full h-full object-cover bg-center"
                :src="`images/hero/${headerImage}.jpg`"
                :srcset="`images/hero/${headerImage}_small.jpg 1x, img/${headerImage}.jpg 2x`"
                :alt="altText"
            />
        </picture>
    </div>
</template>

<style scoped>

</style>