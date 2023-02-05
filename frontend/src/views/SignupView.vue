<template>
  <form class="signup">
    <div class="tagline"><h2>New to Flitter?</h2></div>
    <div class="inputUsername">
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="JohnnyJuanito" />
    </div>
    <div class="inputEmail">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder="john@mail.com" />
    </div>
    <div class="inputPassword">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="******************" />
    </div>
    <button>Sign up</button>
    <div class="validate">
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Check your inbox and click on the link to validate your account.</a>
    </div>
  </form>
    <img alt="Signup Rocket" src="../assets/signuprocket.png" width="25%" />
</template>

<style scoped>
.signup {
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
</style>