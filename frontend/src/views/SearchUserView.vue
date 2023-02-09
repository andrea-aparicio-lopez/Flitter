<template>
    <SearchBar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
    name: 'SearchUserView',
    components: {
        SearchBar,
    }
})
</script>

<style scoped>

</style>