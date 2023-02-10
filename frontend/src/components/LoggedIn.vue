<template>
    <div class="links">
      <router-link to="/profile/me">Profile</router-link> |
      <router-link to="/home"   @click="logOut">Log out</router-link>
    </div> 
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: 'LoggedIn',
    setup() {
        const logOut = () => {
                localStorage.removeItem('accessToken')
                router.push({ name: 'home' })
            }

        return {
            logOut
        }
    }
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