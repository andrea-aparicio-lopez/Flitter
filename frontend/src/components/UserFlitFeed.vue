<template>
    <FlitFeed :posts="posts"
    @previousPage="previousPage()"
    @nextPage="nextPage()"/>
</template>

<script lang="ts">
import FlitFeed from "@/components/FlitFeed.vue";
import { User } from "@/models/user";
import { defineComponent, PropType } from "vue";
import usePosts from "@/composables/usePosts";

export default defineComponent({
  name: "MyProfileView",
  components: {
    FlitFeed,
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup(props) {
    const { posts, limitReached, fetchPostsByUser } = usePosts()

    const params = {
      published: true,
      page: 1,
      sort: '-publishedDate',
      username: props.user?.username
    }

    fetchPostsByUser(params)

    return {
      posts,
      previousPage: () => {
        params.page -= 1;
        if(params.page < 1) {
          params.page = 1;
        }
        fetchPostsByUser(params)
      },

      nextPage: () => {
        params.page += 1;
        if(limitReached.value) {
          params.page -= 1;
        }
        fetchPostsByUser(params)
      }
    };
  },
});
</script>

<style scoped>
</style>