<script setup>
defineProps({
  beer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="beer-card">
    <div class="beer-card-header">
      <font-awesome-icon icon="fa-solid fa-beer-mug-empty" />
      <h3>{{ beer.name }}</h3>
    </div>
    <div class="beer-card-body">
      <span>Taste: {{ beer.taste }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.beer-card {
  border: 2px solid black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #f5f5f5;
}

.beer-card-header {
}

.beer-card-body {
}
</style>
