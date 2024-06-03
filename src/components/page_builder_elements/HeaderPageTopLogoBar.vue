<script setup>
import { navVisible } from '@/state/navState';

// Function to toggle navigation visibility
const toggleNav = () => {
    navVisible.value = !navVisible.value;
};

</script>


<template>

    <section class="hidden md:flex py-[15px] justify-center items-center">
        <img src="/images/logos/sally-sweets-logo-25pc.png" alt="Sally Sweets" class="w-[100px] text-center" />
    </section>

    <section class="md:hidden py-[15px] flex flex-row justify-between items-center">

        <aside class="px-[1em]">
            <img src="/images/logos/sally-sweets-logo-25pc.png" alt="Sally Sweets" class="w-[100px] text-center" />
        </aside>
    
        <aside class="px-[2em] cursor-pointer" @click="toggleNav">
            <p class="block h-[100%] font-bold border-2 px-3 py-2 rounded border-secondary border-dashed bg-primary text-light shadow-lg">Menu</p>
        </aside>

    </section>
</template>


<style scoped>

</style>