<script setup>
    defineProps({
        headingText: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="flex items-center justify-center bg-light font-bold">
        <div class="">
            <h1 class="text-2xl">{{ headingText }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>