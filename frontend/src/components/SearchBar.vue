<template>
  <div class="searchBar">
    <div class="searchBar-icon" >
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search-heart" viewBox="0 0 16 16" >
        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
        <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
      </svg>
    </div>

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
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(181, 31, 181);
  border-radius: 5px;
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

.searchBar:has( input:focus ) {
  box-shadow: inset 0 -2px 5px rgb(226, 192, 226);
}

.searchBar-icon {
  display: flex;
  align-items: center;
}
.searchBar-icon > svg {
  height: 16px;
  padding-left: 10px;
  fill: grey;
}
</style>
