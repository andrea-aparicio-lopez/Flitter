<template>
  <div class="home">

    <SearchBar/>
    <FlitFeed/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlitFeed from '@/components/FlitFeed.vue'; 
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FlitFeed,
    SearchBar,
  },
});
</script>
