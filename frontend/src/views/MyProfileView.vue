<template>
  <MyProfile :user="user" />
  <CreateFlit />
  <FlitFeed :posts="posts" 
    @previousPage="previousPage()"
    @nextPage="nextPage()"/>
</template>

<script lang="ts">
import MyProfile from "@/components/MyProfile.vue";
import CreateFlit from "@/components/CreateFlit.vue";
import FlitFeed from "@/components/FlitFeed.vue";
import { User } from "@/models/user";
import { defineComponent } from "vue";
import usePosts from "@/composables/usePosts";

export default defineComponent({
  name: "MyProfileView",
  components: {
    MyProfile,
    CreateFlit,
    FlitFeed,
  },
  setup() {
    const user: User = {
      id: 1,
      username: 'lola',
      email: "loolitaa@gmail.com",
      password: "holaSoyLola",
      avatar:
        "https://wallpapers-clan.com/wp-content/uploads/2022/06/cute-pusheen-pfp-1.jpg",
      followers: [3, 4],
      following: [1, 4],
    };

    // fetchPostsFilteredByUser()
    const { posts, fetchPostsByUser } = usePosts()

    const params = {
      published: true,
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