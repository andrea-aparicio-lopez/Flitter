<template>
  <form class="login" v-on:submit.prevent="login">
    <div class="tagline"><h2>Already have an account?</h2></div>
    <div class="inputEmail">
      <label for="username">Username/email</label>
      <input
        id="username"
        type="text"
        placeholder="john@mail.com"
        v-model="email"
      />
    </div>
    <div class="inputPassword">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="******************"
        v-model="password"
      />
    </div>
    <button>Log in</button>
    <div v-if="showErrorMessage" class="invalid">
      Sorry, wrong email/username or password! 🚀 Try again.
    </div>
    <div class="forgotPassword">
      <a href="#/password">I can't remember my password</a>
    </div>
    <img alt="Login Rocket" src="../assets/loginrocket.png" width="250" />
  </form>
</template>

<script lang="ts">
import flitterApi from "@/api/flitterApi";
import router from "@/router";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: false,
      error_msg: "",
      showErrorMessage: false,
    };
  },
  methods: {
    async login() {
      const data = {
        email: `${this.email}`,
        password: `${this.password}`,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/login",
          data
        );
        console.log(response);
        localStorage.setItem("accessToken", response.data.token);

        router.push({ name: "home" });
        setTimeout(() => {
          location.reload();
        }, 100);
      } catch (err) {
        console.log(err);
        this.error = true;
        this.error_msg = `${err}`;
        this.showErrorMessage = true;
      }
    },
  },
});
</script>
<style scoped>
.login {
  padding: 10px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

button {
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 40px;
}

.inputEmail,
.inputPassword {
  width: 100%;
  margin-bottom: 40px;
}

img {
  margin: 20px;
}

.invalid {
  font-size: 20px;
  color: red;
  margin-bottom: 30px;
}
</style>