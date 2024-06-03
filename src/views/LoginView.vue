<script setup>
import FormLogin from '../components/page_builder_elements/FormLogin.vue';
</script>

<template>
    
    <div id="LoginView" class="">
    
        <section id="pageContent" class="w-[100vw] flex items-center justify-center flex-col">
            
            <article id="loginArticle" class="flex w-[85vw] md:w-[40vw] mb-[7vh] items-left justify-left flex-col bg-light font-regular">

                <div class="text-left">
                    <FormLogin />   
                </div>

            </article>

        </section>

    </div>  

</template>

<style scoped>

</style>