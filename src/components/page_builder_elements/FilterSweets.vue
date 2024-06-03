<script setup>

const filterResults = (category) => {
    const allSweets = document.getElementsByClassName('sweetsDisplayItem');
    for (let i = 0; i < allSweets.length; i++) {
        const currentSweet = allSweets[i];
        if(category == 'All') {
            currentSweet.style.display = 'block';
        } else {
            if (!currentSweet.classList.contains(category)) {
                currentSweet.style.display = 'none';
            } else {
            currentSweet.style.display = 'block';
            }
        }            
    }
}

</script>

<template>

    <section class="flex items-center justify-center flex-row flex-wrap">
        <div class="">
            <p>Currently displaying:
                <select @change="filterResults($event.target.value)" class="mt-5 ml-2 p-1 border-solid border-2 rounded border-primary bg-primarySoft text-sm">
                    <option value="American" selected>American candy</option>
                    <option value="PickNMix">Pick n mix</option>
                    <option value="Retro">Retro sweets</option>
                    <option value="Chocolate">Chocolate</option>
                </select>
            </p>
        </div>
    </section>

</template>


<style scoped>

</style>