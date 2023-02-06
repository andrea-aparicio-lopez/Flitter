<template>
  <form class="recovery">
    <div class="tagline"><h2>Can't remember your password?</h2></div>
    <div class="inputEmail">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder="john@mail.com" />
    </div>
    <button>Recover password</button>
    <div class="validate">
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"
        >Check your inbox and click on the link to reset your account.</a
      >
    </div>
    <img alt="Login Rocket" src="../assets/passwordrocket.png" width="50%" />
  </form>
</template>

<style scoped>
.recovery {
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

.inputEmail {
  width: 100%;
  margin-bottom: 40px;
}

img {
  margin: 20px;
}
</style>
