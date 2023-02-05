<template>
  <div class="home">

    <SearchBar/>
    <FlitFeed :posts="posts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlitFeed from '@/components/FlitFeed.vue'; 
import SearchBar from '@/components/SearchBar.vue';
import { Post } from '@/models/post';

export default defineComponent({
  name: 'HomeView',
  components: {
    FlitFeed,
    SearchBar,
  },
    setup() {
      // fetchPosts()
    const fakePosts: Post[] = [
      {
        id: 1,
        user: {
          id: 1,
          username: "Agapita21",
        },
        message:
          "Trying out this new social network called #Flitter! So far it's easy to use and has a great community. Loving the sleek interface and fun features. Can't wait to see what other cool things it has in store. #SocialMedia #NewNetwork #Excited 🚀💻💜",
        image: null,
        publishDate: "3/feb/23",
        kudos: [5, 6, 4, 3],
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "Florencio14",
        },
        message: "Had a great time exploring the city with friends today! #Adventure #FunTimes #Flitter",
        image: null,
        publishDate: "4/feb/23",
        kudos: [1, 4, 8, 9, 10, 7],
      },
      {
        id: 3,
        user: {
          id: 3,
          username: "Luciana33",
        },
        message: "Coffee, code, and music are the perfect start to my day. #MondayMotivation #CodingLife #Flitter",
        image: null,
        publishDate: "5/feb/23",
        kudos: [2],
      },
          {
        id: 3,
        user: {
          id: 4,
          username: "Hermenegildo5",
        },
        message: "Had an amazing time hiking in the mountains today. The views were breathtaking! Can't wait to share more adventures and memories on #Flitter. #OutdoorLife #NatureLovers #HikingGoals 🏔️🌲🚶‍♀️",
        image: null,
        publishDate: "5/feb/23",
        kudos: [2, 7, 9],
      },
    ];

    return {
      posts: fakePosts,
    };
  },
});
</script>
