<template>
  <div class="profile">
    <div class="logo">
      <img
        class="roundimg"
        alt="Flitter logo"
        src="../assets/logo.png"
        width="40"
      />
    </div>
    <div class="flit">
      <!-- <router-link :to="`/profile/${post.author.username}`"> -->
        <div class="username" @click="$emit('visitProfile', post)">{{ post.author.username }}</div>
      <!-- </router-link> -->

      <div class="message">{{ post.message }}</div>
      <div class="meta">
        <i class="delete fas fa-trash" @click="deleteFlit"></i>
        <div class="kudosLoggedOut" v-if="!loggedIn">
          {{ post.kudos.length }}✨
        </div>
        <div
          :class="{ kudosLoggedIn: true, given: kudosGiven }"
          v-if="loggedIn"
          @click="kudosGiven ? removeKudos() : giveKudos()"
        >
          {{ post.kudos.length }}✨
        </div>
        
        <div class="publishDate">{{ post.publishedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/models/post";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>

<style scoped>
.flit {
  width: 100%;
  margin-bottom: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: rgba(181, 31, 181, 0.233);
  margin: 0 10px 10px 10px;
  font-size: 18px;
}

.username {
  color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
}

.username:hover {
  cursor: pointer;
}

.meta {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}

.kudos {
  margin: 0 10px;
}

.message {
  margin: 5px 0;
}

.publishDate {
  color: purple;
  font-style: italic;
}

.profile {
  display: flex;
  align-items: start;
  margin-bottom: 10px;
}
</style>