<script setup>

defineProps({
    textContent: {
        type: String,
        required: true
    },
    ctaImage: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div :class="`${ctaImage} bg-center bg-cover bg-fixed bg-no-repeat bg-primarySoft flex items-center justify-center h-[250px] shadow-lg`">
        <div class="text-center">
            <h1 class="customHeading lowercase text-4xl text-light bg-primary py-2 px-5 shadow-md" v-dompurify-html="textContent">{{ textContent }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>