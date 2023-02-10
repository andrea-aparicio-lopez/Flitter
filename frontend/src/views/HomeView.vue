<template>
  <div class="home">
    <!-- CreateFlit goes here when logged in -->
    <SearchBar />
    <h2 v-if="isLoading">Loading...</h2>
    <FlitFeed v-else :posts="posts" 
    @previousPage="previousPage()"
    @nextPage="nextPage()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlitFeed from "@/components/FlitFeed.vue";
import SearchBar from "@/components/SearchBar.vue";
import { Post } from "@/models/post";
import { get } from "@/api";
import usePosts from "@/composables/usePosts";


export default defineComponent({
  name: "HomeView",
  components: {
    FlitFeed,
    SearchBar,
  },
  setup() {
    const { posts, isLoading, fetchPosts, fetchPostsByText } = usePosts()
    
    const params = {
      page: 1,
      sort: 'new'
    }

    fetchPosts(params)

    return {
      posts,
      isLoading,

      previousPage: () => {
        params.page = params.page - 1;
        fetchPosts(params)
      },

      nextPage: () => {
        params.page ++;
        fetchPosts(params)
      }
    }
  }
});
</script>