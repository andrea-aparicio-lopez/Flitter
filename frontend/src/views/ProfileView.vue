<template>
  <div class="loading" v-if="isLoading">Cargando...</div>
  <div v-else>
    <UserProfile 
    :user="selectedUser"
    />
    <FlitFeed :posts="posts" 
    @previousPage="previousPage"
    @nextPage="nextPage"/>
  </div>
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
import router from "@/router";

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
  // beforeRouteEnter() {
  //   const { fetchUserByUsername} = useUsers()
  //   fetchUserByUsername(props.username)
  // }, 
  setup(props) {
    const { isLoading, fetchUserByUsername, selectedUser } = useUsers()
    const { fetchPostsByUser, posts, limitReached } = usePosts()

    fetchUserByUsername(props.username)

    const params = {
      published: true,
      page: 1,
      sort: '-publishedDate',
      username: props.username
    }

    fetchPostsByUser(params)
    
    return {
      isLoading,
      posts,
      selectedUser,
      
      previousPage: () => {
        if(params.page > 1) {
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