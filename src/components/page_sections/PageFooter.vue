<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

const routeFooter = useRoute();

// Computed properties for determining the current page
const isCurrentRoute = (name) => computed(() => routeFooter.name === name);
const isHomeFooter = isCurrentRoute('home');
const isSweetsFooter = isCurrentRoute('sweets');
const isEventsFooter = isCurrentRoute('events');
const isContactFooter = isCurrentRoute('contact');
const isLoginFooter = isCurrentRoute('login');
const isProfileFooter = isCurrentRoute('profile');
</script>


<template>

    <section id="pageFooter" class="bg-primary text-white text-xl md:text-sm pt-[5em] md:pb-[10em] pb-[35em] items-top flex flex-row flex-wrap justify-evenly">

        <article class="w-[100vw] md:w-[60vw] h-[50vh] flex md:flex-row flex-col items-center md:items-start">
            
            <!-- 1st column-->
            <aside class="w-[100%] md:w-1/3 pt-5 md:pt-[0px] text-center flex flex-col items-center">
                <p class="pb-2 text-textNormal font-bold ">Find us</p>
                <hr class="w-[50%] pb-2" />
                <ul class="text-xl md:text-xs flex flex-col flex-wrap items-center justify-center w-[100%]">
                    <li class="w-[100%] no-underline text-textContrast">
                        <p class="text-center font-bold tracking-wide block py-[10px]">52a Derby Street<br />Leek<br />Staffordshire<br />ST13 5AJ.</p>
                    </li>
                    <li class="w-[100%] no-underline text-textContrast">
                        <p class="text-center font-bold tracking-wide block py-[10px]">(01538) 567123</p>
                    </li>
                </ul>
            </aside>
            
            <!-- 2nd column-->
            <aside class="w-[100%] md:w-1/3 pt-5 md:pt-[0px] text-center flex flex-col items-center">
                <p class="pb-2 text-textNormal font-bold">Social</p>
                <hr class="w-[50%] pb-2" />
                <ul class="text-xl md:text-xs flex flex-col flex-wrap items-center justify-center w-[100%]">
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <a href="#" class="block h-[50px]">
                            <p class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Facebook</p>
                        </a>
                    </li>
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <a href="#" class="block h-[50px]">
                            <p class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Twitter</p>
                        </a>
                    </li>
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <a href="#" class="block h-[50px]">
                            <p class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Instagram</p>
                        </a>
                    </li>
                </ul>
            </aside>
            
            <!-- 3rd column-->
            <aside class="w-[100%] md:w-1/3 pt-5 md:pt-[0px] text-center flex flex-col items-center">
                <p class="pb-2 text-textNormal font-bold">Navigation</p>
                <hr class="w-[50%] pb-2" />
                <ul class="text-xl md:text-xs flex flex-col flex-wrap items-center justify-center w-[100%]">
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <RouterLink to="/" class="block h-[50px]">
                            <p :id="isHomeFooter ? 'activeFooterNav' : null"
                                class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Home</p>
                        </RouterLink>
                    </li>
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <RouterLink to="/sweets" class="block h-[50px]">
                            <p :id="isSweetsFooter ? 'activeFooterNav' : null" 
                                class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Sweets</p>
                        </RouterLink>
                    </li>
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <RouterLink to="/events" class="block h-[50px]">
                            <p :id="isEventsFooter ? 'activeFooterNav' : null" 
                                class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Events</p>
                        </RouterLink>
                    </li>
                    <li class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <RouterLink to="/contact" class="block h-[50px]">
                            <p :id="isContactFooter ? 'activeFooterNav' : null" 
                                class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Contact</p>
                        </RouterLink>
                    </li>
                    <li v-if="!authenticated" class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <RouterLink to="/login" class="block h-[50px]">
                            <p :id="isLoginFooter ? 'activeFooterNav' : null" 
                                class="text-center font-bold tracking-wide block h-[50px] py-[15px]">Login</p>
                        </RouterLink>
                    </li>
                    <li v-if="authenticated" class="w-[100%] no-underline text-textContrast hover:text-textNormal">
                        <RouterLink to="/profile" class="block h-[50px]">
                            <p :id="isProfileFooter ? 'activeFooterNav' : null" 
                                class="text-center font-bold tracking-wide block h-[50px] py-[15px]">My Profile</p>
                        </RouterLink>
                    </li>
                </ul>
            </aside>

        </article>

    </section>

</template>


<style scoped>
#activeFooterNav {
    color: rgba(0,0,0,1);
    font-weight: bold;
}
</style>