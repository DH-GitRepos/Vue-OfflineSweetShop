<script setup>
import { ref, onMounted } from "vue";
import EventItem from "../page_builder_elements/EventItem.vue";

const props = defineProps({
    myFile: {
        type: String,
        required: true
    }
})

let myJson = ref([]);
onMounted(() => {
    fetchData();
})

function fetchData() {
    fetch(props.myFile)
        .then((stream) => stream.json())
        .then((data) => (myJson.value = data))
        .catch((error) => console.error(error));
}
</script>

<template>
    <EventItem 
        class="" 
        v-for="(eventItem, index) in myJson.events" 
        :key="index" 
        :eventItem="eventItem">
    </EventItem>
</template>

<style scoped>

</style>