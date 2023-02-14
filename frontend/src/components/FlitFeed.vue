<template>
  <h1>Latest Flits</h1>
  <div v-for="post in posts" :key="post._id">
    <FlitPost :post="post" 
    @visitProfile="$emit('visitProfile', post)"/>
  </div>
  
  <!-- Si estás logeado, salen botones de página -->
  <div class="pages" v-if="loggedIn">
    <div class="previous-page" @click="$emit('previousPage')">
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
    </div>
    <img alt="Load Rocket" src="../assets/loadrocket.png" />
    <div class="next-page" @click="$emit('nextPage')">
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg>
    </div>
  </div>

  <!-- Si no, sale un mensaje de login -->
  <div class="loadMore" v-else>
    <img alt="Load Rocket" src="../assets/loadrocket.png" />
      <p>
        <a href="#/login">Log in</a> or <a href="#/signup">sign up</a> for more
        flits!
      </p>  
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import FlitPost from "@/components/FlitPost.vue";
import { Post } from "@/models/post";
import posts from "@/store/posts";

export default defineComponent({
  components: {
    FlitPost,
  },
  props: {
    posts: {
      type: Object as PropType<Post[]>,
      required: true
    }
  },
  setup() {
        let loggedIn = ref<boolean>(false) 
        const token = localStorage.getItem('accessToken')
        if(token) {
            loggedIn = ref<boolean>(true)
        }

        return {
            loggedIn,
        }
    },
});
</script>

<style scoped>
h1 {
  color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  margin-bottom: 40px;
}

p {
  font-size: 20px;
  color: #2c3e50;
  text-align: center;
}

img {
  width: 100px;
}

.loadMore {
  text-align: center;
}

a{
  text-decoration: underline;
}

.pages {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}

.previous-page, .next-page {
  align-self: flex-end;
  cursor: pointer;
}

svg {
  width: 20px;
  fill: purple;
}
</style>
