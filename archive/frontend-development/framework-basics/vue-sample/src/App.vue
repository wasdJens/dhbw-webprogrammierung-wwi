<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="app-container">
    <h1 class="title">Hello Vue!</h1>
    <div class="app-content-container">
      <Navigation></Navigation>
      <div class="app-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
}

.app-container {
  display: flex;
  flex-direction: column;
}

.app-content-container {
  display: flex;
  flex-direction: column;
}

.app-content {
  flex-grow: 1;
}
</style>
