<script setup>
    defineProps({
        headingText: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="flex flex-row md:items-left md:justify-left pt-[2em] font-bold">
        <div class="w-[100%]">
            <h1 class="customHeading text-4xl text-primary">{{ headingText }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>