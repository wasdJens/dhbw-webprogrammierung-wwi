<script setup></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/beers">Beers 1</router-link>
      </li>
      <li>
        <router-link to="/beers2">Beers 2</router-link>
      </li>
      <li>
        <router-link to="/beers3">Beers 3</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 32px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
}

li a {
  padding: 8px 16px;
  text-decoration: none;
  color: black;
}

li a:hover {
  background-color: #555;
  color: white;
}
</style>
