<script setup>
    defineProps({
        sweetItem: {
            type: Object,
            required: true
        }
    });  

    // Add optional functions
    const handleOpenDialog = (itemId) => {
        const dialogRef = `dialog-${itemId}`;
        const dialogElementRef = document.getElementById(dialogRef);
        dialogElementRef.showModal();
    }

    const handleCloseDialog = (itemId) => {
        const dialogRef = `dialog-${itemId}`;
        const dialogElementRef = document.getElementById(dialogRef);
        dialogElementRef.close();
    }    
 
</script>

<template>
    <article :id="`${sweetItem.id}`" :class="`${sweetItem.cat} sweetsDisplayItem post p-5 my-2 md:my-5 mx-auto w-[90%] md:w-[20%] rounded border-2 border-dashed border-secondary bg-primarySoft`">

        <!-- Product image -->
        <div class="h-[8em] flex flex-col flex-wrap justify-center overflow-hidden rounded border-2 border-solid border-primary shadow-md">
            <img :src="`../images/products/${sweetItem.id}.jpg`" :alt="sweetItem.name" class="w-full object-fit" />
        </div>

        <!-- Short product info -->
        <div class="h-[9em] flex flex-col flex-wrap justify-top">
            <p class="font-bold text-rg text-primary mt-2">{{ sweetItem.name }}</p>
            <p class="mt-1 text-sm">Price: £{{ sweetItem.priceGBP }}</p>
            <p class="mt-1 text-sm">Category: {{ sweetItem.cat }}</p> 
        </div>
                
        <button :id="`openButton-${sweetItem.id}`" @click="handleOpenDialog(sweetItem.id)" class="openButton h-[40px] p-[8px] border-solid border-2 rounded border-buttonBorder bg-buttonBg text-sm">View product details</button>
        
        <!-- Extended product info (show/hide) -->
        <dialog :id="`dialog-${sweetItem.id}`" closed class="w-[85vw] md:w-[60vw] p-5 m-auto border-solid border-[5px] rounded border-buttonBorder bg-primarySoft shadow-lg">
            
            <h2 id="dialogid">Product details</h2>
            <p class="font-bold text-xl mt-2 text-textNormal">{{ sweetItem.name }}</p>
            <p class="mt-1">Price: £{{ sweetItem.priceGBP }}</p>
            <p class="block h-[40px] py-[10px] font-bold pt-2 text-textNormal">AVAILABLE TO BUY <RouterLink to="/contact"><span class="font-bold text-primary hover:underline">IN-STORE</span></RouterLink></p>
            <p class="font-bold pt-2">Description:</p>
            <p class="text-sm">{{ sweetItem.desc }}</p>
            <p v-if="sweetItem.ingredients!=''" class="font-bold pt-2">Ingredients:</p>
            <p class="text-sm">{{ sweetItem.ingredients }}</p>
            <button :id="`closeButton-${sweetItem.id}`" @click="handleCloseDialog(sweetItem.id)" class="closeButton h-[40px] mt-5 p-[8px] border-solid border-2 rounded border-buttonBorder bg-buttonBg text-sm">Close description</button>
        
        </dialog>

    </article>
</template>

<style scoped>

</style>