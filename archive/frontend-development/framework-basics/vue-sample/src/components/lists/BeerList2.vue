<script setup>
import Beer2 from "../beer/Beer2.vue";
import BeerVote from "../BeerVote.vue";

const beers = [
  { name: "Ulmer Goldochsen Kellerbier", id: 1, taste: "good" },
  { name: "Wasseralfinger", id: 2, taste: "bad" },
  { name: "Nattheimer Spezial", id: 3, taste: "okay" },
];
</script>

<template>
  <div>
    <h2>Beer List</h2>
    <div class="beer-list">
      <Beer2 v-for="(beer, index ) in beers" :key="index" :beer="beer">
        <BeerVote></BeerVote>
      </Beer2>
    </div>
  </div>
</template>

<style>
.beer-list {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
