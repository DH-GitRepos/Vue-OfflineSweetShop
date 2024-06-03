<script setup>
import HeroImage from '../components/page_builder_elements/HeroImage.vue';
import CallToAction from '../components/page_builder_elements/CallToAction.vue';
import Heading1 from '../components/page_builder_elements/HeadingPageMain.vue';
import SubHeading from '../components/page_builder_elements/SubHeading.vue';
import SubHeading2 from '../components/page_builder_elements/SubHeading2.vue';
import TextBlock from '../components/page_builder_elements/TextBlock.vue';
import GetEvents from '../components/utils/GetEvents.vue';

</script>

<template>
    
    <div id="EventsMainView" class="w-[100vw] flex items-center justify-center flex-col">

        <section id="pageHeader" class="w-[100vw] flex items-center flex-col">
            <!-- 
                HERO IMAGE SOURCE:
                https://unsplash.com/photos/selective-focus-photography-of-assorted-color-balloons-Hli3R6LKibo
            -->
            <div class="w-[100vw] order-2 md:order-1">
                <HeroImage altText="Our Events" headerImage="party" />
            </div>
            <div class="w-[100vw] order-1 md:order-2">
                <Heading1 headingText="Our Events" />
            </div>
        </section>

        <section id="pageContent" class="w-[100vw] flex items-center justify-center flex-col">
    
            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <SubHeading headingText="Welcome" />
                <TextBlock textContent="Welcome to Sally Sweets, where the magic of sweets meets the charm of our versatile events room. This dedicated space serves as the canvas for an array of delightful events, from nostalgic adult nights to vibrant children's parties. Whether you're planning a corporate function, a birthday celebration, or a baby shower, our side room offers the perfect backdrop for your sweet gatherings." />
            </article>
    
            <RouterLink to="/contact">
                <article class="w-[100vw]">
                    <CallToAction textContent="Get in touch today to book your event!" ctaImage="bg-ctaImage3" />                
                </article>
            </RouterLink>
    
            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <SubHeading headingText="Our events" />
                <TextBlock textContent="Private bookings are available, allowing you to tailor the space to your specific needs and preferences. Immerse yourself in the world of confectionery delights as you create memories in an environment designed for sweetness and celebration." />
                
                <SubHeading2 headingText="Adults only events" />
                <TextBlock textContent="At Sally Sweets, we believe adults deserve their sweet moments too. Join us for Retro Night, a journey back in time with classic sweets and tunes. For the sophisticated palate, indulge in our Chocolate Extravaganza or experience the perfect pairing of wine and sweets." />
                
                <SubHeading2 headingText="Childrens Parties" />
                <TextBlock textContent="Make your child's special day unforgettable with Candyland Adventure, filled with exciting games and sweet treats. Engage their creativity with our DIY Cupcake Decoration event, or let them meet their favorite characters in our Character Themed Party. Each event is curated for joy and excitement, ensuring a sweet celebration for the little ones." />
                
                <SubHeading2 headingText="Private Functions" />
                <TextBlock textContent="Sally Sweets transforms corporate events into delightful experiences with tailored sweet packages. Our side room is also the ideal venue for birthday celebrations, offering customizable options suitable for all ages. Welcoming a new member of the family? Celebrate the upcoming arrival with sweet treats and a warm atmosphere at our baby showers. Whatever the occasion, Sally Sweets is here to make your private functions as sweet as can be." />
            </article>    

            <RouterLink to="/contact">
                <article class="w-[100vw]">
                    <CallToAction textContent="Call us now to find out more!" ctaImage="bg-ctaImage4" />                
                </article>
            </RouterLink>

            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <SubHeading headingText="Event sweet packages" />
                <TextBlock textContent="Choose from a variety of sweet packages to elevate your event experience. The Sweet Sampler is perfect for a small gathering, offering a mix of popular candies. Dive into a world of chocolate with the Chocoholic's Delight, an exclusive package for chocolate enthusiasts. For a self-serve delight, the Candy Buffet provides a colorful array of sweets for guests to enjoy at their leisure. Our event packages are designed to cater to different preferences and themes, ensuring a sweet touch to every occasion." />
                
                <ul class="flex flex-col md:flex-col items-center md:items-start">
                    <li>Sweet and Savory Mix</li>
                    <li>Movie Night Special</li>
                    <li>Retro Candy Explosion</li>
                    <li>Chocolate Fondue Feast</li>
                    <li>Carnival-themed Delights</li>
                    <li>International Candy Adventure</li>
                    <li>Sugar-Free Sweet Treats</li>
                    <li>Dessert Tasting Extravaganza</li>
                    <li>DIY Candy Apple Station</li>
                    <li>Gourmet Marshmallow Roasting</li>
                    <li>S'mores and More Package</li>
                    <li>Sweetheart Package (for couples)</li>
                    <li>Colorful Rainbow Candy Buffet</li>
                    <li>Muffins and Mimosas Brunch</li>
                    <li>Ice Cream Sundae Bar</li>
                    <li>Whimsical Unicorn Party</li>
                    <li>Decades Flashback (70s, 80s, 90s)</li>
                    <li>Cookie Decorating Party</li>
                    <li>Coffee and Confections Gathering</li>
                    <li>Holiday-themed Sweet Celebrations</li>
                </ul>

                <SubHeading headingText="Booking information" />
                <TextBlock textContent="Ready to book your sweet event at Sally Sweets? The process is simple. <a href='/contact' class='hover:underline'>Contact us</a> to check our availability, review our pricing details, and reach out to our friendly team for any inquiries. We're here to assist you in creating the perfect sweet celebration. Whether you're planning a small get-together or a larger event, our side room is ready to host your memorable moments. Contact us today and let the sweetness begin!" />
                
            </article>

            <article class="md:px-[20vw] px-[25px] w-[100vw] flex flex-col md:flex-col items-center md:items-start">
                <SubHeading headingText="Upcoming events" />
                <ul class="mb-[5em]">   
                    <!--<EventItem class="container" v-for="(eventItem, index) in eventsData.events" :key="index" :eventItem="eventItem" />-->
                    <GetEvents myFile="https://dh-gitrepos.github.io/events.json" />
                </ul>
            </article>

        </section>  

    </div>

</template>

<style scoped>

</style>