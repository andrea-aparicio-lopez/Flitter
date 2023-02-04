<template>
  <nav class="bar">
    <div class="logo">
      <router-link to="/">
        <img alt="Flitter logo" src="../assets/logo.png" width="50" />
      </router-link>
    </div>
    <div class="title">
      <router-link to="/">
        <h1>Flitter</h1>
      </router-link>
    </div>
    <!-- <div v-if="loggedIn"> -->
    <!-- <LoggedIn/> -->
    <!-- </div> -->

    <!-- <div v-else> -->
    <LoggedOut />
    <!-- </div> -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoggedOut from "./LoggedOut.vue";
import LoggedIn from "./LoggedIn.vue";

export default defineComponent({
  name: "HeaderBar",
  components: {
    LoggedOut,
    // LoggedIn
  },
});
</script>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
}

.logo {
  justify-self: left;
}

.title {
  flex-grow: 1;
  justify-self: center;
  font-size: 24px;
  line-height: 0px;
}

h1 {
  color: purple;
  font-family: "Righteous", cursive;
}

a {
  text-decoration: none;
}
</style>
