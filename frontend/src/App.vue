<template>
  <HeaderBar />
  <div class="wrapper"><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBar from "@/components/HeaderBar.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderBar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.wrapper {
  padding: 10px;
  max-width: 600px;
  margin: auto;
  
}
</style>
