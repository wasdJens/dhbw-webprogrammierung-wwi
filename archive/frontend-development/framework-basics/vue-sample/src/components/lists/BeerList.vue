<script setup>
import Beer from "../beer/Beer.vue";

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
      <Beer v-for="({beer}, index ) in beers" :key="index"></Beer>
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
