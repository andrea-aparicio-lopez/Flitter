<template>
  <nav class="bar">
    <div class="logo">
      <router-link to="/">
        <img class="roundimg" alt="Flitter logo" src="../assets/logo.png" width="60" />
      </router-link>
    </div>
    <div class="title">
      <router-link to="/">
        <h1>Flitter</h1>
      </router-link>
    </div>
    <div v-if="loggedIn">
    <LoggedIn/>
    </div>

    <div v-else>
    <LoggedOut />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoggedOut from "./LoggedOut.vue";
import LoggedIn from "./LoggedIn.vue";
import router from "@/router";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeaderBar",
  components: {
    LoggedOut,
    LoggedIn
  },
  setup() {
        let loggedIn = ref<boolean>(false) 
        const token = localStorage.getItem('accessToken')
        if(token) {
            loggedIn = ref<boolean>(true)
        }

        return {
            loggedIn,
        }
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
  margin: 10px 0;
}

.logo {
  justify-self: left;
}

.title {
  flex-grow: 1;
  justify-self: center;
  font-size: 26px;
  line-height: 0px;
  letter-spacing: 1px;
}

h1 {
  color: purple;
  font-family: "Righteous", cursive;
}

a {
  text-decoration: none;
}
</style>
