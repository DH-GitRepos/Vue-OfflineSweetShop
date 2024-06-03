<script setup>
    defineProps({
        headingText: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="flex box-border items-left justify-left pt-[1em] font-bold">
        <div class="text-left">
            <h2 class="customHeading text-2xl text-primary">{{ headingText }}</h2>
        </div>
    </div>
</template>

<style scoped>

</style>