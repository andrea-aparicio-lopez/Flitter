<template>
  <h1>Flit Feed</h1>
  <div v-for="post in posts" :key="post.id">
    <FlitPost :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlitPost from "@/components/FlitPost.vue";
import { Post } from "@/models/post";

export default defineComponent({
  components: {
    FlitPost,
  },
  setup() {
    const fakePosts: Post[] = [
      {
        id: 1,
        user: {
          id: 1,
          username: "Agapita21",
        },
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
        image: null,
        publishDate: "3/feb/23",
        kudos: [5, 6, 4, 3],
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "Florencio14",
        },
        message: "Hello World!",
        image: null,
        publishDate: "4/feb/23",
        kudos: [1, 4, 8, 9, 10, 7],
      },
      {
        id: 3,
        user: {
          id: 3,
          username: "Luciana33",
        },
        message: "Hello World!!!",
        image: null,
        publishDate: "5/feb/23",
        kudos: [2],
      },
    ];

    return {
      posts: fakePosts,
    };
  },
});
</script>

<style scoped>
</style>
