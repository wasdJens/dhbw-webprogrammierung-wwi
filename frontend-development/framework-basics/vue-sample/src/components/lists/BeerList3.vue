<script setup>
import Beer2 from "../beer/Beer2.vue";
import BeerVote from "../BeerVote.vue";
import BeerCreate from "../BeerCreate.vue";
import { ref } from "vue";

const isLoading = ref(true);
const beers = ref(null);

fetch("http://localhost:8080/api/v1/beers").then((response) => {
  return response.json();
}).then((data) => {
  beers.value = data.items;
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <h2>Beer List</h2>
    <BeerCreate @createBeer="beers.push($event)"></BeerCreate>
    <div class="beer-list">
      <Beer2 v-for="(beer, index) in beers" :key="index" :beer="beer">
        <BeerVote></BeerVote>
      </Beer2>
    </div>
  </div>
</template>

<style scoped>
.beer-list {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
