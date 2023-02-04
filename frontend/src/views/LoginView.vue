<template>
  <div class="login">
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
      <a href="">I can't remember my password</a>
    </div>
  </div>
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

label {
  font-size: 20px;
  color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  display: block;
  margin-bottom: 10px;
}

.inputEmail,
.inputPassword {
  width: 100%;
  margin-bottom: 20px;
}

input {
  border-style: solid;
  border-width: 2px;
  border-color: rgb(181, 31, 181);
  border-radius: 5px;
  padding: 5px;
  transition: 0.25s;
  width: 100%;
}

input:focus {
  outline: none;
  box-shadow: inset 0 -2px 5px rgb(226, 192, 226);
}

button {
  background-color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  border: none;
  color: white;
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin-bottom: 20px;
}

button:hover {
  background-color: rgb(181, 31, 181);
}

a {
  text-decoration: none;
}

a:hover {
  color: rgb(181, 31, 181);
}
</style>