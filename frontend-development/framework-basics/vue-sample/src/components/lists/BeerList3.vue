<script setup>
import Beer2 from "../beer/Beer2.vue";
import BeerVote from "../BeerVote.vue";
import BeerCreate from "../BeerCreate.vue";
import { onMounted, ref } from "vue";
import { fetchBeers } from "../../api/api";

const isLoading = ref(true);
const beers = ref(null);

onMounted(async () => {
  const data = await fetchBeers();
  beers.value = data;
  isLoading.value = false;
  console.log(beers.value)
})
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <h2>Beer List</h2>
    <BeerCreate @createBeer="beers.push($event)"></BeerCreate>
    <div class="beer-list">
      <router-link
        :to="`/beers/${beer.id}`"
        v-for="(beer, index) in beers"
        :key="index"
      >
        <Beer2 :beer="beer">
          <BeerVote></BeerVote>
        </Beer2>
      </router-link>
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

.beer-list a {
  text-decoration: none;
  color: black;
}
</style>
