<script setup>

defineProps({
    textContent: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="textBlock flex items-center justify-left font-regular">
        <p class="text-lg p-0 py-[1em] leading-9 tracking-wide md:text-left text-center" v-dompurify-html="textContent"></p>
    </div>
</template>

<style scoped>

</style>