<template>
  <div class="home">
    <!-- CreateFlit goes here when logged in -->
    <SearchBar @search="searchPosts" />
    <button class="sorting" @click="changeSort">Oldest/Newest</button>

    <h2 v-if="isLoading">Loading...</h2>
    <FlitFeed
      v-else
      :posts="posts"
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
    const { posts, limitReached, isLoading, fetchPosts, fetchPostsByText } =
      usePosts();

    let params = {
      published: true,
      page: 1,
      sort: "-publishedDate",
      text: "",
    };

    fetchPosts(params);

    return {
      posts,
      isLoading,

      changeSort: () => {
        params.sort =
          params.sort === "-publishedDate" ? "publishedDate" : "-publishedDate";
        fetchPosts(params);
      },

      previousPage: () => {
        if (params.page > 1) {
          params.page = params.page - 1;
          fetchPosts(params);
        }
      },

      nextPage: () => {
        if (!limitReached.value) {
          params.page++;
          fetchPosts(params);
        }
      },

      visitProfile: (post: Post) => {
        router.push({
          name: "userProfile",
          params: { username: post.author.username },
        });
      },

      searchPosts: (searchInput: string) => {
        params.text = searchInput;
        if (searchInput !== "") {
          // fetchPosts(params)
          fetchPostsByText(params);
        } else {
          fetchPosts(params);
        }
      },
    };
  },
});
</script>

<style scoped>
button {
  background-color: purple;
  font-family: "Righteous", cursive;
  font-weight: lighter;
  border: none;
  color: #f2f2f2;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition: 0.25ms;
  border-radius: 40px;
  white-space: nowrap;
  letter-spacing: 1px;
  cursor: pointer;
}

.sorting {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  z-index: 2;
  margin: 30px 0 -60px 200px;
}

button:hover {
  background-color: rgb(181, 31, 181);
}

/*Desktop stuff*/

@media (min-width: 400px) {
  .wrapper {
    max-width: 600px;
  }
  .sorting {
    margin: 30px 0 -60px 400px;
  }
}
</style>