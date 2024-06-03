<script setup>
import { ref, onMounted, computed } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import TextBlock from '../components/page_builder_elements/TextBlock.vue';
import Heading1 from '../components/page_builder_elements/HeadingPageMain.vue';
import SubHeading from '../components/page_builder_elements/SubHeading.vue';

let loggedIn = ref(false);
let username = ref(null);
let auth = getAuth();
let router = useRouter();

// Function to create discount code
function createDiscountCode(username) {
    const parts = username.split('@');
    if (parts.length < 2) {
        return null;
    }
    const firstPartCode = parts[0].charAt(0).toUpperCase() + parts[0].charAt(parts[0].length - 1).toUpperCase();
    const secondPartSplit = parts[1].split('.');
    const secondPartCode = secondPartSplit[0].charAt(0).toUpperCase() + secondPartSplit[0].charAt(secondPartSplit[0].length - 1).toUpperCase();
    return `YL45${firstPartCode}-${secondPartCode}3202`;
}

// Computed property for discount code
let discountCode = computed(() => {
    return username.value ? createDiscountCode(username.value) : '';
});

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedIn.value = true;
            username.value = user.displayName || user.email;
        } else {
            loggedIn.value = false;
            username.value = null;
        }
    });
});

let logOut = () => {
    signOut(auth).then(() => {
        loggedIn.value = false;
        router.push("/");
    });
}
</script>

<template>

    <div id="ProfileView" class="w-[95vw] md:w-[60vw] flex items-top justify-center flex-col">
                
        <section id="pageHeader" class="w-[100vw] md:w-[100vw]">
            <Heading1 headingText="Your profile" />
        </section>

        <section id="pageContent" class="flex flex-col md:content-start md:flex-row items-center md:items-start justify-center md:justify-start md:items-top w-[100vw] md:w-[60vw] md:mx-[20vw]  ">

            <article class="flex flex-col md:flex-col items-center md:items-start w-[95%] md:w-1/3 mb-[3em] md:pt-[0.75em]">   

                <TextBlock :textContent="`You are logged in as<br />${username}`" />
                <button @click="logOut" class="myLogout h-[40px] px-3 py-1.5 pointer border-solid border-2 rounded border-buttonBorder bg-buttonBg text-rg">Logout</button>    

            </article> 

            <article class="flex flex-col md:flex-col items-center md:items-start w-[95%] md:w-2/3 mt-[-3em] md:mt-[0em] md:pl-[1em] md:border-l-[1px] md:border-dark">

                <SubHeading headingText="Discount Code" />
                <TextBlock :textContent="`<p>Your discount code is:<br />${discountCode}</p><p class='text-sm mt-[1em]'>Quote this code in store to get 10% off all purchases.</p>`" />
            
            </article>

        </section>

    </div>
    
</template>

<style scoped>

</style>