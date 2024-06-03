<script setup>
import AddressBar from '../page_builder_elements/HeaderPageTopAddressBar.vue';
import LogoBar from '../page_builder_elements/HeaderPageTopLogoBar.vue';
import NavigationBar from '../page_builder_elements/HeaderPageTopNavigationBar.vue';
</script>


<template>

    <section id="HeaderPageTop" class="w-[100vw] flex flex-col items-center shadow-lg">

        <article id="headerAddressBar" class="w-[100vw] bg-primary">
            <AddressBar />
        </article>

        <article id="headerLogoBar" class="w-[100vw] bg-light">
            <LogoBar />
        </article>

        <article id="headerNavigation" class="w-[100vw]">
            <NavigationBar />
        </article>

    </section>

</template>


<style scoped>

</style>