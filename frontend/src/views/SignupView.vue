<template>
  <form class="signup" v-on:submit.prevent="signup">
    <div class="tagline"><h2>New to Flitter?</h2></div>
    <div class="inputUsername">
      <label for="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="JohnnyJuanito"
        pattern="[A-Za-z]{}"
        required
        v-model="username"
      />
    </div>
    <div class="inputEmail">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="john@mail.com"
        required
        v-model="email"
      />
    </div>
    <div class="inputPassword">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="******************"
        required
        v-model="password"
      />
    </div>
    <button type="submit" @click.prevent="signup">Sign up</button>
    <div v-if="showErrorMessage" class="invalid">Sorry, that's taken! 🚀 Try another email or username.</div>
    <div v-if="showValidationMessage" class="validate">
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
      ✅ Account created! 🚀 Check your inbox and click on the link to validate your
        account.
      </a>
    </div>
  </form>
    <img alt="Signup Rocket" src="../assets/signuprocket.png" width="100" />
</template>

<script lang="ts">
import flitterApi from "@/api/flitterApi";
import router from "@/router";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupView",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: false,
      error_msg: "",
      showValidationMessage: false,
      showErrorMessage: false,
    };
  },
  methods: {
    async signup() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/register",
          data
        );
        console.log(response);
        localStorage.setItem("accessToken", response.data.token);
        this.showValidationMessage = true;
      } catch (err) {
        console.log(err);
        this.error = true;
        this.error_msg = `${err}`;
        this.showErrorMessage = true
      }
    },
  },
});
</script>

<style scoped>
.signup {
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

.inputUsername,
.inputEmail,
.inputPassword {
  width: 100%;
  margin-bottom: 40px;
}

img {
  float: right;
  margin: 0 10px 10px 10px;
}

.invalid {
  font-size: 20px;
  color: #2c3e50;
}
</style>