<template>
  <div class="home">
    <!-- CreateFlit goes here when logged in -->
    <SearchBar @search="searchPosts"/>
    <h2 v-if="isLoading">Loading...</h2>
    <FlitFeed v-else :posts="posts" 
    @previousPage="previousPage"
    @nextPage="nextPage"
    @visitProfile="visitProfile"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlitFeed from "@/components/FlitFeed.vue";
import SearchBar from "@/components/SearchBar.vue";
import { Post } from "@/models/post";
import usePosts from "@/composables/usePosts";
import { useRouter } from "vue-router";


export default defineComponent({
  name: "HomeView",
  components: {
    FlitFeed,
    SearchBar,
  },
  setup() {
    const router = useRouter();
    const { posts, limitReached, isLoading, fetchPosts, fetchPostsByText } = usePosts()
    
    let params = {
      published: true,
      page: 1,
      sort: '-publishedDate'
      text: ''
    }

    fetchPosts(params)

    return {
      posts,
      isLoading,
      // limitReached,

      previousPage: () => {
        if(params.page > 1) {
          params.page = params.page - 1;
          fetchPosts(params)
        }
      },

      nextPage: () => {
        if(!limitReached.value) {
          params.page ++;
          fetchPosts(params)
        }
      },

      visitProfile: (post: Post) => { router.push({name: 'userProfile', params: {username: post.author.username}})},

      searchPosts: (searchInput: string) => {
        params.text = searchInput 
        if(searchInput !== ''){
          // fetchPosts(params)
          fetchPostsByText(params)
        } else {
          fetchPosts(params)
        }

        }
    }
  }
});
</script>