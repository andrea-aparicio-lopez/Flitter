Here is an updated code example:

<template>
  <div class="headerPictureName">
    <h1>{{ user.username }}</h1>
    <img
      class="headerRocket"
      alt="Header Rocket"
      src="../assets/headerrocket.png"
    />
  </div>
  <div class="wrapper">
    <div class="avatar">
      <img class="profilePic" :src="user.avatar" :alt="user.username" />
    </div>
    <div class="follow">
      <div class="followers">
        <div class="number">{{ user.followers.length }}</div>
        Followers
      </div>
      <div class="following">
        <div class="number">{{ user.following.length }}</div>
        Following
      </div>
    </div>
    <div class="buttons">
      <router-link to="/profile/me/settings">
        <button>
          <i class="fas fa-cog fa-2x" style="color: white; font-size: 22px"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/models/user";

export default defineComponent({
  name: "UserProfile",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup(props) {
    console.log(props.user)
  }
});
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-areas:
    "a b"
    "c d";
  grid-template-columns: minmax(100px, max-content) 1fr;
  column-gap: 20px;
  position: relative;
  z-index: 3;
  background: transparent;
  margin-top: -50px;
  padding: 10px;
}

.avatar {
  grid-area: a;
  width: max-content;
  background-color: transparent;
}

.headerPictureName {
  position: relative;
  z-index: 2;
}

.headerRocket {
  width: calc(100% + 20px);
  height: 30%;
  background-size: cover;
  background-image: "../assets/headerrocket.png";
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

h1 {
  background-color: transparent;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
  letter-spacing: 1px;
}

.profilePic {
  width: 100px;
  width: 100px;
  border-radius: 50%;
}

.username {
  grid-area: c;
  font-weight: bold;
  font-size: larger;
  color: purple;
  padding-top: 5px;
}

.follow {
  grid-area: b;
  display: flex;
  align-items: center;
  column-gap: 5px;
  background-color: transparent;
  display: flex;
  justify-content: right;
}
.followers,
.following {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  margin-top: 40px;
}
.number {
  font-weight: bold;
  background-color: transparent;
}

.buttons {
  grid-area: b;
  display: flex;
  justify-content: right;
  margin: -10px 0;
  column-gap: 5px;
}

button {
  padding: 10px;
  background-color: transparent;
}
</style>