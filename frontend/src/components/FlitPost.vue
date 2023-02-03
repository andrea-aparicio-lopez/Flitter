<template>
  <div class="flit">
    <div class="username">{{ post.user.username }}</div>
    <div class="message">{{ post.message }}</div>
    <div class="meta">
        <div class="kudos">{{ post.kudos.length }}✨</div>
    <div class="publishDate">{{ post.publishDate }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/models/post";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>

<style scoped>
.flit {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid red;
}

.username {
    font-weight: bold;
}

.meta {
    display: flex;
    justify-content: space-between;
}

.message{
    margin: 5px 0;
}
</style>