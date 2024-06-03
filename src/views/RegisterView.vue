<script setup>
import FormRegister from '../components/page_builder_elements/FormRegister.vue';
</script>

<template>

    <div id="RegisterView" class="">

        <section class="register w-[100vw] flex items-center justify-center flex-col">
            
            <article id="registerSection" class="flex w-[85vw] md:w-[40vw] mb-[7vh] items-left justify-left flex-col bg-light font-regular">

                <div class="text-left">
                    <FormRegister />   
                </div>

            </article>

        </section>

    </div>

</template>

<style scoped>

</style>