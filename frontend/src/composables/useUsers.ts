import { computed } from "vue"
import { useStore } from "vuex"

const useUsers = () => {
    const store = useStore()

    return {
        // Getters
        users:          computed(() => store.getters['user/getUsers']),
        loggedUser:     computed(() => store.getters['user/getLoggedUser']),
        selectedUser:   computed(() => store.getters['user/getSelectedUser']),
        isLoading:      computed(() => store.getters['user/getisLoading']),

        // Actions
        fetchUsers:          (username: string) => store.dispatch('user/fetchUsers', username),
        fetchUserById:       (userId: number) => store.dispatch('user/fetchUserById', userId),
        fetchUserByUsername: (username: string) => store.dispatch('user/fetchUserByUsername', username),
        fetchLoggedUser:     () => store.dispatch('user/fetchLoggedUser'),

    }
}

export default useUsers;