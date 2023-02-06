<template>
  <form class="settings">
    <div class="tagline"><h2>Settings</h2></div>
    <div class="inputEmail">
      <label for="username">Deactivate your account</label>
      <p>
        By clicking the button below you will delete your Fleeter account. Your
        username and profile will be deleted permanently.
      </p>
    </div>
    <button>Deactivate</button>
  </form>
</template>

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