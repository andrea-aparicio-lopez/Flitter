<template>
  <div class="createFlit">
    <input
      type="text"
      placeholder="What's on your mind?"
      style="width: 100%"
    />
    <button>Flit it!</button>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.createFlit {
  width: auto;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(181, 31, 181);
  border-radius: 5px;
  box-shadow: inset 0 -2px 5px rgb(226, 192, 226);  
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

button {
margin-bottom: 0;
font-size: 20px;
padding: 5px 10px;
margin: 5px 10px;
border-radius: 5px;
justify-content: flex-end;
}

</style>
