<script setup>
    defineProps({
        headingText: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="customHeadingShadow flex items-center justify-center h-[25vh] bg-primary text-textContrast font-bold shadow-lg">
        <div class="text-center">
            <h1 class="text-5xl md:text-6xl">{{ headingText }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>