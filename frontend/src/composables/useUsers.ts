import { computed } from "vue"
import { useStore } from "vuex"

const useUsers = () => {
    const store = useStore()

    return {


        // Actions
        fetchUsers:     (username: string) => store.dispatch('user/fetchUsers', username),
        fetchUserById:  (userId: number) => store.dispatch('user/fetchUserById', userId),
        fetchLoggedUser:            () => store.dispatch('user/fetchLoggedUser'),

        // Getters
        users:          computed(() => store.getters['user/getUsers']),
        loggedUser:     computed(() => store.getters['user/getLoggedUser']),
        selectedUser:   computed(() => store.getters['user/getSelectedUser']),
        isLoading:      computed(() => store.getters['user/getisLoading']),
    }
}

export default useUsers;