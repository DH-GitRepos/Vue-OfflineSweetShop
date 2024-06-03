<script setup>
import HeroImage from '../components/page_builder_elements/HeroImage.vue';
import CallToAction from '../components/page_builder_elements/CallToAction.vue';
import Heading1 from '../components/page_builder_elements/HeadingPageMain.vue';
import SubHeading from '../components/page_builder_elements/SubHeading.vue';
import TextBlock from '../components/page_builder_elements/TextBlock.vue';
import { RouterLink } from "vue-router";

import { ref, onMounted, computed } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let loggedIn = ref(false);
let auth = getAuth();

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
</script>

<template>

    <div id="HomeView" class="w-[100vw] flex items-center justify-center flex-col">

        <section id="pageHeader" class="w-[100vw] flex items-center flex-col">
            <!-- 
                HERO IMAGE SOURCE:
                https://unsplash.com/photos/ornaments-on-wooden-container-LEuojpCCbOA
            -->
            <div class="w-[100vw] order-2 md:order-1">
                <HeroImage altText="Shop interior" headerImage="sweet-shop" />
            </div>
            <div class="w-[100vw] order-1 md:order-2">
                <Heading1 headingText="Welcome to Sally Sweets" />
            </div>
        </section>

        <section id="pageContent" class="flex items-center justify-center flex-col">
            
            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <SubHeading headingText="Hello there!" />
                <TextBlock textContent="Welcome to Sally Sweets, your go-to destination for a delightful array of confections located in the quaint town of Leek, Staffordshire. Our shop is a vibrant paradise for sweet lovers, featuring an exquisite selection that ranges from American candies to classic pick-n-mix, nostalgic retro sweets, and decadent chocolates. At Sally Sweets, we are committed to providing an unparalleled variety of high-quality treats that cater to all preferences. Our physical store, steeped in charm and warmth, invites you to embark on a sensory journey, encouraging you to explore and handpick your favourites. We take pride in maintaining the classic joy of a traditional sweet shop, ensuring a personal and memorable shopping experience for every customer." />
            </article>
            
            <RouterLink to="/contact">
                <article class="w-[100vw]">
                    <CallToAction textContent="CALL IN TO THE STORE OR CALL US ON <br /> (01782) 569874 TO ORDER" ctaImage="bg-ctaImage2" />
                </article>
            </RouterLink>
            
            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <TextBlock textContent="Sally Sweets isn't just about satisfying your sugar cravings; it's also home to a popular function room that serves as a versatile venue for events all year round. Whether you're planning a whimsical birthday party, an intimate family celebration, or a unique corporate gathering, our function room is the perfect setting. It offers a blend of comfort and elegance, adaptable to any event theme. Our dedicated staff are always available to help you plan and ensure your event is as delightful and special as our range of sweets." />
            </article>
            
            <div v-if="!authenticated">
                <RouterLink to="/login">
                    <article class="w-[100vw]">
                        <CallToAction textContent="LOGIN OR REGISTER TO GET YOUR VOUCHER CODE!" ctaImage="bg-ctaImage1" />
                    </article>
                </RouterLink>
            </div>

            <div v-if="authenticated">
                <RouterLink to="/profile">
                    <article class="w-[100vw]">
                        <CallToAction textContent="HEAD TO YOUR PROFILE TO GET YOUR VOUCHER CODE!" ctaImage="bg-ctaImage1" />
                    </article>
                </RouterLink>
            </div>

            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <TextBlock textContent="For our devoted patrons, Sally Sweets offers an exciting opportunity: sign up on our website and log in to receive exclusive discount vouchers. These special treats are our way of showing appreciation to our loyal community. While our delightful array of sweets is exclusively available to purchase in-store, our website keeps you in the loop about new arrivals, special events, and exclusive offers. So, join us at Sally Sweets in Leek, Staffordshire, for an enchanting experience where every visit brings a new sweet surprise!" />
            </article>

        </section>

    </div>

</template>

<style scoped>

</style>