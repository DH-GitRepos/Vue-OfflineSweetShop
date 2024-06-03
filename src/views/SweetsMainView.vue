<script setup>
import HeroImage from '../components/page_builder_elements/HeroImage.vue';
import Heading1 from '../components/page_builder_elements/HeadingPageMain.vue';
import SubHeading from '../components/page_builder_elements/SubHeading.vue';
import TextBlock from '../components/page_builder_elements/TextBlock.vue';
import FilterSweets from '../components/page_builder_elements/FilterSweets.vue';
import SweetsItem from '../components/page_builder_elements/SweetItem.vue';
import sweetsData from '../assets/data/sweets.json';
</script>


<template>

    <div id="SweetsMainView" class="">

        <section id="pageHeader" class="w-[100vw] flex items-center flex-col">
            <!-- 
                HERO IMAGE SOURCE:
                https://www.wallpaperflare.com/food-sugar-candies-cakes-sweets-high-resolution-pictures-wallpaper-tgcdn/download/1920x1080
            -->
            <div class="w-[100vw] order-2 md:order-1">
                <HeroImage altText="Our sweets" headerImage="sweets" />
            </div>
            <div class="w-[100vw] order-1 md:order-2">
                <Heading1 headingText="Our Sweet Treats" />
            </div>
        </section>

        <section id="pageContent" class="w-[100vw] flex items-center justify-center flex-col">
            
            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <SubHeading headingText="Hello there!" />
                <TextBlock textContent="Welcome to our delightful world of sweets, where we've curated a spectacular array of confections to tantalize your taste buds! Dive into our extensive selection, conveniently categorised to enhance your shopping experience. Choose from the vibrant variety of American Candy, full of bold flavours and colourful treats that promise a taste of the States. For those who love variety, our Pick-n-Mix section offers a playful assortment, allowing you to mix and match to your heart's content. Relive the nostalgia with our Retro Sweets category, featuring timeless classics that will transport you back in time. And for the chocolate aficionados, indulge in our Chocolate section, showcasing a luxurious range from creamy milk to rich dark varieties. Simply use the dropdown box to select your desired category and embark on a sweet journey through our delectable collection. Each category is a gateway to a unique world of flavours and memories, waiting to be explored and enjoyed!" />
            </article>
            
            <article class="w-[100vw]">
                <FilterSweets />
                <div id="spacer" class="flex flex-col md:flex-row flex-wrap gap-[1em] mt-[3rem] justify-center items-stretch">
                    <SweetsItem class="container" v-for="(sweetItem, index) in sweetsData.products" :key="index" :sweetItem="sweetItem"></SweetsItem>
                </div>
            </article>
            
        </section>

    </div>

</template>


<style scoped>

</style>