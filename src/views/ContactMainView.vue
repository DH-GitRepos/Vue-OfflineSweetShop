<script setup>
import HeroImage from '../components/page_builder_elements/HeroImage.vue';
import Heading1 from '../components/page_builder_elements/HeadingPageMain.vue';
import TextBlock from '../components/page_builder_elements/TextBlock.vue';
</script>

<template>

    <div id="ContactMainView">

        <section id="pageHeader" class="w-[100vw] flex items-center flex-col">
            <!-- 
                HERO IMAGE SOURCE:
                https://unsplash.com/photos/black-and-brown-rotary-phone-near-gray-wall--0xCCPIbl3M
            -->
            <div class="w-[100vw] order-2 md:order-1 hidden md:block">
                <HeroImage altText="Contact Us" headerImage="contact" />
            </div>
            <div class="w-[100vw] order-1 md:order-2">
                <Heading1 headingText="Contact Us" />
            </div>
        </section>

        <div id="ProfileView" class="w-[100vw] pb-[3rem] flex items-center justify-center flex-col">
        
            <section id="pageContent" class="w-[95vw] md:w-[60vw] flex items-top justify-center flex-col md:flex-row">
    
                <article class="p-[1rem] w-[100%] md:w-1/3 md:border-r-[1px] md:border-dark">   
                    <picture class="">
                        <source media="(max-width: 75em)" srcset="/images/logos/sally-sweets-logo-50pc.webp" type="image/webp">
                        <img class="w-[95%] md:w-[80%] pt-[2rem] pl-[2rem]" src="/images/logos/sally-sweets-logo-50pc.png" alt="Sally Sweets">
                        <!-- image captured from google maps-->
                    </picture> 
                    <TextBlock textContent="<p class='font-bold text-xl text-center'>52a Derby St, Leek,<br />Staffordshire, ST13 5AJ.<br />01538 567123</p><p class='text-lg text-center mt-[20px]'>Get in touch to inquire about our products or find out more about our events</p>" />
                </article> 
    
                <article class="md:pl-[1rem] md:py-[2rem] w-[100%] md:w-2/3">
                    <picture class="w-[100%]">
                        <source media="(max-width: 75em)" srcset="/images/sally-sweets-map.webp" type="image/webp">
                        <img class="border-[5px] border-primary rounded-xl shadow-md w-[100%]" src="/images/sally-sweets-map.jpg" alt="Our location">
                        <!-- image captured from google maps-->
                    </picture> 
                </article>
    
            </section>
        
        </div>
       
    </div>
    
</template>

<style scoped>

</style>