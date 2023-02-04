<template>
    <div class="links">
      <router-link to="/login">Log in</router-link> |
      <router-link to="/signup">Sign up</router-link>
    </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoggedOut'
})
</script>

<style scoped>
.links {
  justify-self: right;
}

a {
  text-decoration: none;
  color: purple;
  font-family: "Righteous", cursive;
  transition: 0.25ms;
}

a:hover {
    color: rgb(181, 31, 181);
}
</style>