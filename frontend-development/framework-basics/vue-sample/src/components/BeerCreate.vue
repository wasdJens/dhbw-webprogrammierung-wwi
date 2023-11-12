<script setup>
import { reactive } from "vue";

const emit = defineEmits(["createBeer"]);

const beer = reactive({
  name: "",
  taste: "",
});

async function handleCreate() {
  const request = await fetch("http://localhost:8080/api/v1/beers", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name: beer.name,
      taste: beer.taste,
    }),
  });

  if (request.ok) {
    beer.name = "";
    beer.taste = "";
    const response = await request.json();
    emit("createBeer", {
      name: response.createdItem.name,
      taste: response.createdItem.taste,
    });
  }
}
</script>

<template>
  <div>
    <h2>Create new Beer</h2>
    <div class="beer-create-inputs">
      <label>
        Beer Name:
        <input type="text" v-model="beer.name" />
      </label>
      <label>
        Beer Taste:
        <input type="text" v-model="beer.taste" />
      </label>
      <button @click="handleCreate">Create</button>
    </div>
  </div>
</template>

<style scoped>
.beer-create-inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
