<template>
  <h1>Latest Flits</h1>
  <div v-for="post in posts" :key="post.id">
    <FlitPost :post="post" />
  </div>
  
  <div class="loadMore">
    <img alt="Load Rocket" src="../assets/loadrocket.png" />
    <p>
      <a href="#/login">Log in</a> or <a href="#/signup">sign up</a> for more
      flits!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
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
  }
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
</style>
