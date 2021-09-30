<template>
  <div class="main-layout">
    <Post v-for="post of posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  components: {
    Post,
  },

  data() {
    return {
      posts: [],
    };
  },

  async created() {
    const response = await fetch("http://localhost:8055/items/posts");
    const posts = await response.json();
    this.posts = posts.data;
  },
};
</script>

<style>
.main-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}
</style>
