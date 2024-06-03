<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { navVisible } from '@/state/navState';

let loggedIn = ref(false);
let auth = getAuth();
const route = useRoute();
// let navVisible = ref(true);  // Property for nav visibility

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedIn.value = true;
        } else {
            loggedIn.value = false;
        }
    });    

});
    
let authenticated = computed(() => {
    return loggedIn.value;
});

// Computed properties for determining the current page
const isCurrentRoute = (name) => computed(() => route.name === name);
const isHome = isCurrentRoute('home');
const isSweets = isCurrentRoute('sweets');
const isEvents = isCurrentRoute('events');
const isContact = isCurrentRoute('contact');
const isLogin = isCurrentRoute('login');
const isProfile = isCurrentRoute('profile');

// Function to toggle navigation visibility
const toggleNav = () => {
    navVisible.value = !navVisible.value;
};

</script>

<template>

    <nav id="HeaderPageTopNavigationBarMobile" :class="['md:hidden', navVisible ? 'mobileNavHide' : '']">
        
        <section class="bg-secondary flex flex-row w-[100vw] h-[100vh] absolute z-999 top-0 left-0">

            <div id="navControl" class="absolute top-5 right-5 text-center w-[70px] h-[70px]" @click="toggleNav">
                <p class="text-6xl font-bold block border-[3px] border-solid border-light rounded px-[8px] text-light hover:bg-primary">X</p>
            </div>
                    
            <ul class="text-4xl flex flex-col w-[100vw] h-[100vh] justify-center">
                <li :id="isHome ? 'activeNav' : null" class="text-textContrast hover:bg-primary h-[10vh] flex justify-center items-center" @click="toggleNav">
                    <RouterLink to="/" :aria-current="isHome ? 'page' : null"><p class="text-center font-bold tracking-wide">Home</p></RouterLink>
                </li>
                <li :id="isSweets ? 'activeNav' : null" class="text-textContrast hover:bg-primary h-[10vh] flex justify-center items-center" @click="toggleNav">
                    <RouterLink to="/sweets" :aria-current="isSweets ? 'page' : null"><p class="text-center font-bold tracking-wide">Sweets</p></RouterLink>
                </li>
                <li :id="isEvents ? 'activeNav' : null" class="text-textContrast hover:bg-primary h-[10vh] flex justify-center items-center" @click="toggleNav">
                    <RouterLink to="/events" :aria-current="isEvents ? 'page' : null"><p class="text-center font-bold tracking-wide">Events</p></RouterLink>
                </li>
                <li :id="isContact ? 'activeNav' : null" class="text-textContrast hover:bg-primary h-[10vh] flex justify-center items-center" @click="toggleNav">
                    <RouterLink to="/contact" :aria-current="isContact ? 'page' : null"><p class="text-center font-bold tracking-wide">Contact</p></RouterLink>
                </li>
                <li v-if="!authenticated" :id="isLogin ? 'activeNav' : null" class="text-textContrast hover:bg-primary h-[10vh] flex justify-center items-center" @click="toggleNav">
                    <RouterLink to="/login" :aria-current="isLogin ? 'page' : null"><p class="text-center font-bold tracking-wide">Login</p></RouterLink>
                </li>
                <li v-if="authenticated" :id="isProfile ? 'activeNav' : null" class="text-textContrast hover:bg-primary h-[10vh] flex justify-center items-center" @click="toggleNav">
                    <RouterLink to="/profile" :aria-current="isProfile ? 'page' : null"><p class="text-center font-bold tracking-wide">My Profile</p></RouterLink>
                </li>
            </ul>

        </section>

    </nav>

    <nav id="HeaderPageTopNavigationBar" class="hidden md:block bg-secondary border-y-2 border-dashed border-y-primary">
        <ul class="text-sm flex flex-row flex-wrap items-center justify-center h-[40px]">
            <li :id="isHome ? 'activeNav' : null" class="grow block py-2.5 w-1/6 h-[40px] no-underline hover:text-textContrast hover:bg-primary">
                <RouterLink to="/" :aria-current="isHome ? 'page' : null"><p class="text-center font-bold tracking-wide">Home</p></RouterLink>
            </li>
            <li :id="isSweets ? 'activeNav' : null" class="grow block py-2.5 w-1/6 h-[40px] no-underline hover:text-textContrast hover:bg-primary">
                <RouterLink to="/sweets" :aria-current="isSweets ? 'page' : null"><p class="text-center font-bold tracking-wide">Sweets</p></RouterLink>
            </li>
            <li :id="isEvents ? 'activeNav' : null" class="grow block py-2.5 w-1/6 h-[40px] no-underline hover:text-textContrast hover:bg-primary">
                <RouterLink to="/events" :aria-current="isEvents ? 'page' : null"><p class="text-center font-bold tracking-wide">Events</p></RouterLink>
            </li>
            <li :id="isContact ? 'activeNav' : null" class="grow block py-2.5 w-1/6 h-[40px] no-underline hover:text-textContrast hover:bg-primary">
                <RouterLink to="/contact" :aria-current="isContact ? 'page' : null"><p class="text-center font-bold tracking-wide">Contact</p></RouterLink>
            </li>
            <li v-if="!authenticated" :id="isLogin ? 'activeNav' : null" class="grow block py-2.5 w-1/6 h-[40px] no-underline hover:text-textContrast hover:bg-primary">
                <RouterLink to="/login" :aria-current="isLogin ? 'page' : null"><p class="text-center font-bold tracking-wide">Login</p></RouterLink>
            </li>
            <li v-if="authenticated" :id="isProfile ? 'activeNav' : null" class="grow block py-2.5 w-1/6 h-[40px] no-underline hover:text-textContrast hover:bg-primary">
                <RouterLink to="/profile" :aria-current="isProfile ? 'page' : null"><p class="text-center font-bold tracking-wide">My Profile</p></RouterLink>
            </li>
        </ul>
    </nav>
    
</template>


<style scoped>
#activeNav {
    color: rgba(255,255,255,1);
    background-color: rgba(211,28,92,1);
}

.mobileNavHide {
    display: none;
}
</style>