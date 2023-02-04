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
      <!-- <div v-if="loggedIn"> -->
        <!-- <LoggedIn/> -->
      <!-- </div> -->
      
      <!-- <div v-else> -->
        <LoggedOut/>
      <!-- </div> -->

  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoggedOut from "./LoggedOut.vue";
import LoggedIn from "./LoggedIn.vue"

export default defineComponent({
    name: "HeaderBar",
    components: { 
      LoggedOut,
      // LoggedIn
     }
});
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

</style>
