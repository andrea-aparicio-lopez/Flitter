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
      <div class="username" @click="$emit('visitProfile', post)">
        {{ post.author.username }}
      </div>
      <!-- </router-link> -->

      <div class="message">{{ post.message }}</div>
      <div class="meta">
        <!-- v-if="loggedIn && post.author.username === user.username" -->
        <i class="delete fas fa-trash" v-if="loggedIn" @click="deleteFlit"></i>
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
        <div class="publishDate">{{ date }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Post } from "@/models/post";
import { format } from "date-fns";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup(props) {
    let loggedIn = ref<boolean>(false);
    const token = localStorage.getItem("accessToken");
    if (token) {
      loggedIn = ref<boolean>(true);
    }

    const date = format(
      new Date(props.post.publishedDate),
      "HH':'mm' · 'd'/'MMM'/'yy"
    );

    return {
      loggedIn,
      date,
    };
  },
  data() {
    return {
      kudosGiven: false,
    };
  },
  methods: {
    giveKudos() {
      // TODO - Make API call to give kudos
      this.kudosGiven = true;
    },
    removeKudos() {
      // TODO - Make API call to remove kudos
      this.kudosGiven = false;
    },
    deleteFlit() {
      //TODO - Make API call to delete flit
      console.log("Delete flit here...");
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

.kudosLoggedOut {
  margin: 0 10px;
  padding: 2px 6px 2px 8px;
}

.message {
  margin: 5px 0;
}

.publishDate {
  color: purple;
  font-style: italic;
  padding: 3px 0 0 0;
}

.profile {
  display: flex;
  align-items: start;
  margin-bottom: 10px;
}

.kudosLoggedIn {
  margin: 0 10px;
  padding: 2px 6px 2px 8px;
  border-radius: 20px;
  cursor: pointer;
}

.kudosLoggedIn:hover {
  background-color: rgb(239, 166, 239);
  color: purple;
}

.kudosLoggedIn.given {
  background-color: purple;
  color: white;
}

.delete {
  padding: 6px 0;
  border-radius: 20px;
  cursor: pointer;
  padding: 7px 8px 6px 8px;
  color: purple;
  font-size: 14px;
}

.delete:hover {
  background-color: red;
  color: white;
}
</style>