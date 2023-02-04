<template>
  <div class="searchBar">
    <input type="text" placeholder="Search for @people | #tags | text" style="width: 100%" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.searchBar {
  width: auto;
}
input {
  border-style: solid;
  border-width: 2px;
  border-color: rgb(181, 31, 181);
  border-radius: 5px;
  padding: 5px;
  transition: 0.25s;
}

input:focus {
  outline: none;
  box-shadow: inset 0 -2px 5px rgb(226, 192, 226);
}


</style>
