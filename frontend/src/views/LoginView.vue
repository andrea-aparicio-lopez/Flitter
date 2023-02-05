<template>
  <form class="login">
    <div class="tagline"><h2>Already have an account?</h2></div>
    <div class="inputEmail">
      <label for="username">Username/email</label>
      <input id="username" type="text" placeholder="john@mail.com" />
    </div>
    <div class="inputPassword">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="******************" />
    </div>
    <button>Log in</button>
    <div class="forgotPassword">
      <a href="#/password">I can't remember my password</a>
    </div>
    <img alt="Login Rocket" src="../assets/loginrocket.png" width="50%" />
  </form>
</template>

<style scoped>
.login {
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

img {
  margin: 20px;
}
</style>