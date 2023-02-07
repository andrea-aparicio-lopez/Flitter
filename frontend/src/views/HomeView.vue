<template>
  <div class="home">
    <!-- CreateFlit goes here when logged in -->
    <SearchBar />
    <h2 v-if="loading">Loading...</h2>
    <FlitFeed v-if="!loading" :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlitFeed from "@/components/FlitFeed.vue";
import SearchBar from "@/components/SearchBar.vue";
import { Post } from "@/models/post";
import { get } from "@/api";

interface Data {
  posts: Post[];
  loading: boolean;
}

export default defineComponent({
  name: "HomeView",
  components: {
    FlitFeed,
    SearchBar,
  },
  data(): Data {
    return {
      posts: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.posts = await get<Post[]>("posts");
      this.loading = false;
    },
  },
});
</script>