<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="beer-bote">
    <p>Votes: {{ count }}</p>
    <button className="beer-vote-button" @click="count++">👍</button>
    <button className="beer-vote-button" @click="count--">👎</button>
  </div>
</template>

<style scoped>
.beer-vote {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.beer-vote-button {
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}
</style>
