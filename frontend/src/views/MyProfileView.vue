<template>
  <MyProfile :user="loggedUser" />
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
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "MyProfileView",
  components: {
    MyProfile,
    CreateFlit,
    FlitFeed,
  },
  async setup() {
    const { fetchLoggedUser, loggedUser } = useUsers()
    const { posts, limitReached, fetchPostsByUser } = usePosts()

    fetchLoggedUser()
    // console.log(loggedUser)
    
    const params = {
      published: true,
      page: 1,
      sort: '-publishedDate',
      username: loggedUser.value.username
    }
    
    fetchPostsByUser(params)


    return {
      loggedUser,
      posts,

      previousPage: () => {
        if(params.page < 1) {
          params.page = params.page - 1;
          fetchPostsByUser(params)
        }
      },

      nextPage: () => {
        if(!limitReached.value) {
          params.page ++;
          fetchPostsByUser(params)
        }
      }
    };
  },
});
</script>

<style scoped>
</style>