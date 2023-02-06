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
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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

button {
  background-color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin-bottom: 40px;
  transition: 0.25ms;
  border-radius: 40px;
  white-space: nowrap;
}

button:hover {
  background-color: rgb(181, 31, 181);
}

input {
  border-style: solid;
  border-width: 2px;
  border-color: rgb(181, 31, 181);
  border-radius: 5px;
  padding: 5px;
  transition: 0.25s;
  width: 100%;
  font-size: 20px;
}

input:focus {
  outline: none;
}


a {
  text-decoration: none;
  transition: 0.25ms;
  font-size: 20px;
  color: #2c3e50;
}

a:hover {
  color: rgb(181, 31, 181);
}

label {
  font-size: 24px;
  color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  display: block;
  margin-bottom: 10px;
}

.roundimg {
  border-radius: 50%;
}
</style>
