<template>
  <form class="settings">
    <div class="tagline"><h2>Settings</h2></div>
    <div class="inputEmail">
      <label for="username">Deactivate your account</label>
      <p>
        By clicking the button below you will delete your Flitter account. Your
        username and profile will be deleted permanently.
      </p>
    </div>
    <button @click="deleteAccount(loggedUser._id)">Deactivate</button>
  </form>
</template>

<script lang="ts">
import flitterApi from '@/api/flitterApi';
import useUsers from '@/composables/useUsers';
import router from '@/router';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'SettingsView',
  setup() {
    const { loggedUser } = useUsers()

    return {
      loggedUser,

      deleteAccount: (userId: number) => {
        if(confirm('This action is irreversible. Are you sure you want to permanetly delete your account?')) {
          flitterApi.delete(`users/${userId}`)
          localStorage.removeItem("accessToken");
          router.push({name: 'home'})
          setTimeout(() => {
            location.reload();
            }, 100);
        }
      }
    }
  }
})
</script>

<style scoped>
.settings {
  padding: 10px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

h2 {
  margin-bottom: 40px;
}

.inputEmail,
.inputPassword {
  width: 100%;
  margin-bottom: 40px;
}

p {
  font-size: 20px;
  color: #2c3e50;
}

button {
  background-color: red;
}
button:hover {
  background-color: rgb(181, 31, 181);
}

img {
  margin: 20px;
}
</style>