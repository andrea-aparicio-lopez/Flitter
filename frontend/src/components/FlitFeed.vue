<template>
  <h1>Latest Flits</h1>
  <div v-for="post in posts" :key="post.id">
    <FlitPost :post="post" />
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
}
</style>
