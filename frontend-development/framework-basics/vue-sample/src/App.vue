<script setup>
import Beer from './components/beer/Beer.vue';
import BeerList from './components/lists/BeerList.vue';
import BeerList2 from './components/lists/BeerList2.vue';
import BeerList3 from './components/lists/BeerList3.vue';

</script>

<template>
  <h1 class="title">Hello Vue!</h1>
  <Beer></Beer>
  <!-- <BeerList></BeerList> -->
  <!-- <BeerList2></BeerList2> -->
  <!-- <BeerList3></BeerList3> -->
</template>

<style scoped>
.title {
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
}
</style>
