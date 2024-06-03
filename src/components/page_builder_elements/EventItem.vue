<script setup>
    const props = defineProps({
        eventItem: {
            type: Object,
            required: true
        }
    });
</script>

<template>
    <li :id="`${eventItem.eventId}`" class="mt-[1.5em] p-[15px] rounded border-2 border-dashed border-secondary bg-primarySoft">
        <p class="font-bold text-rg text-primary">{{ eventItem.eventName }}</p>
        <p class="font-bold text-sm">{{ eventItem.eventDay }} {{ eventItem.eventDate }}</p>
        <p class="font-bold text-sm">{{ eventItem.eventTimeFrom }}-{{ eventItem.eventTimeTo }}</p>
        <p class="text-sm">{{ eventItem.eventDescription }}</p> 
    </li>
</template>

<style scoped>

</style>