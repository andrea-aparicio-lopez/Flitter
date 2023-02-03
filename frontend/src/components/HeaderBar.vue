<template>
  <nav>
    <img alt="Vue logo" src="../assets/logo.png" width="50" />
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Log in</router-link>
    <router-link to="/singup">Sign up</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
</style>
