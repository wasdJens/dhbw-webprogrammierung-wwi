<template>
  <div class="card">
    <h2>{{post.title}}</h2>
    <div class="card-image">
      <img :src=image width="250" height="250"/>
      <p>{{post.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      image: `http://localhost:8055/assets/${this.post.picture}`
    }
  },
}
</script>



<style>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 3px;
  border-color: aliceblue;
  background-color: wheat;
  max-width: 320px;
}
</style>
