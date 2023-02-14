<template>
  <div class="createFlit">
    <input
      type="text"
      placeholder="What's on your mind?"
      v-model="content"
      style="width: 100%"
    />
    <button @click="createFlit">Flit it!</button>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage">
      {{ successMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios, { AxiosResponse } from "axios";
import flitterApi from "@/api/flitterApi";
import { Post } from "@/models/post";

export default defineComponent({
  setup() {
    const content = ref("");
    const errorMessage = ref("");
    const successMessage = ref("");

    const createFlit = async () => {
      try {
        const { data } = await flitterApi.post<unknown, AxiosResponse<Post>>(`/posts`, {message: content.value});
        console.log("created post", data);
        // TODO - communicate this somewhere so that the post appears dynamically in feeds.
        // An option is to just reload the page.
        // location.reload();
        location.reload();
      } catch (err) {
        errorMessage.value = "An error occurred while creating the flit. Please try again later.";
      }
    };

    return {
      content,
      errorMessage,
      successMessage,
      createFlit
    };
  }
});
</script>

<style scoped>
.createFlit {
  width: auto;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(181, 31, 181);
  border-radius: 40px;
}

input {
  padding: 5px;
  padding-left: 20px;
  transition: 0.25s;
  border: none;
  background-color: transparent;
}

input:focus {
  outline: none;
}

.createFlit:has( input:focus ) {
  box-shadow: inset 0 -2px 5px rgb(226, 192, 226);  
}

button {
margin-bottom: 0;
font-size: 20px;
padding: 5px 10px;
margin: 5px 10px;
border-radius: 40px;
justify-content: flex-end;
}

</style>
