<template>
  <nav class="bar">
      <div class="logo">
        <router-link to="/">
          <img alt="Flitter logo" src="../assets/logo.png" width="50" />
        </router-link>
      </div>
      <div class="title">
        <h1>Flitter</h1>
      </div>
    <div class="links">
      <router-link to="/login">Log in</router-link> |
      <router-link to="/singup">Sign up</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.bar {
  /* display: flex;
  justify-content: space-between; */
  display: 	grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
}

.logo {
  justify-self: left;
}

.title {
  justify-self: center;
}

h1 {
  color: purple;
  font-family: "Righteous", cursive;
}

.links {
  justify-self: right;
}

a {
  text-decoration: none;
}
</style>
