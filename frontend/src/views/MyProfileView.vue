<template>
    <MyProfile :user="loggedUser" />
    <CreateFlit />
    <UserFlitFeed :user="loggedUser" />
</template>

<script lang="ts">
import MyProfile from "@/components/MyProfile.vue";
import CreateFlit from "@/components/CreateFlit.vue";
import UserFlitFeed from "@/components/UserFlitFeed.vue";

import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "MyProfileView",
  components: {
    MyProfile,
    CreateFlit,
    UserFlitFeed,
  },
  setup() {
    const { fetchLoggedUser, loggedUser } = useUsers()

    fetchLoggedUser()

    return {
      loggedUser,
    };
  },
});
</script>

<style scoped>
</style>