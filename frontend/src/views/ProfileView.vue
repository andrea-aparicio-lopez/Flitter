<template>
  <UserProfile :user="user" />
  <FlitFeed :posts="posts" 
    @previousPage="previousPage"
    @nextPage="nextPage"/>
</template>

<script lang="ts">
import UserProfile from "@/components/UserProfile.vue";
import FlitFeed from "@/components/FlitFeed.vue";
import { User } from "@/models/user";
import { defineComponent, PropType } from "vue";
import usePosts from "@/composables/usePosts";
import { previousPage, nextPage } from "@/composables/indexing";
import useUsers from "@/composables/useUsers";
import posts from "@/store/posts";
import user from "@/store/user";

export default defineComponent({
  name: "ProfileView",
  components: {
    UserProfile,
    FlitFeed,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const user: User = {
      id: 1,
      username: props.username,
      email: "loolitaa@gmail.com",
      password: "holaSoyLola",
      avatar:
        "https://wallpapers-clan.com/wp-content/uploads/2022/06/cute-pusheen-pfp-1.jpg",
      followers: [3, 4],
      following: [1, 4],
    };

    const { fetchPostsByUser, posts } = usePosts()

    const params = {
      page: 1,
      sort: 'new',
      username: user.username
    }

    fetchPostsByUser(params)
    
    return {
      user,
      posts,
      
      previousPage: () => {
        params.page = params.page - 1;
        fetchPostsByUser(params)
      },

      nextPage: () => {
        params.page ++;
        fetchPostsByUser(params)
      }
    };
  },
});
</script>

<style scoped>
</style>