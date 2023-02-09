<template>
  <MyProfile :user="user" />
  <CreateFlit />
  <FlitFeed :posts="posts" />
</template>

<script lang="ts">
import MyProfile from "@/components/MyProfile.vue";
import CreateFlit from "@/components/CreateFlit.vue";
import FlitFeed from "@/components/FlitFeed.vue";
import { User } from "@/models/user";
import { defineComponent } from "vue";
import { Post } from "@/models/post";

export default defineComponent({
  name: "MyProfileView",
  components: {
    MyProfile,
    CreateFlit,
    FlitFeed,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isLoggedIn = true;
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

    // fetchPostsFilteredByUser()
    const fakePosts: Post[] = [
      {
        id: 5,
        user: {
          id: 1,
          username: props.username,
        },
        message:
          "Trying out this new social network called #Flitter! So far it's easy to use and has a great community. Loving the sleek interface and fun features. Can't wait to see what other cool things it has in store. #SocialMedia #NewNetwork #Excited 🚀💻💜",
        image: null,
        publishDate: "3/feb/23",
        kudos: [5, 6, 4, 3],
      },
      {
        id: 6,
        user: {
          id: 1,
          username: props.username,
        },
        message:
          "Had a great time exploring the city with friends today! #Adventure #FunTimes #Flitter",
        image: null,
        publishDate: "4/feb/23",
        kudos: [1, 4, 8, 9, 10, 7],
      },
    ];

    return {
      user,
      posts: fakePosts,
      isLoggedIn,
    };
  },
});
</script>

<style scoped>
</style>