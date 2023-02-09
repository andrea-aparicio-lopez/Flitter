<template>
    <select v-model="selection" @change="sort(selection)">
        <option disabled value="">Please select one</option>
        <option value="new">Newest to oldest</option>
        <option value="old">Oldest to newest</option>
        <option value="kudos">Highlights</option>
    </select>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'SortByDate',
    setup() {
        const selection = 'new'

        return {
            selection,
            sort: (selection: string) => {}
        }
    }
})
</script>

<style scoped>
/* button {
    color: white;
} */
</style>