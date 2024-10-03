<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { fetchBeer } from "../../api/api";
import Beer2 from "../beer/Beer2.vue";

const route = useRoute();
const beerId = ref(route.params.beerId);
const beer = ref(null);

onMounted(async () => {
  beer.value = await fetchBeer(beerId.value);
});
</script>

<template>
  <Beer2 v-if="beer" :beer="beer"></Beer2>
</template>

<style scoped></style>
