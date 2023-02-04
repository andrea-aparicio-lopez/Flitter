import { ActionTree } from "vuex";
import { IPostsState } from "./state";


const actions: ActionTree<IPostsState, {}> = {
    async fetchPosts({commit}) {
        commit('SetIsLoading', true)
        
        // Hacer la llamada
        // const data = await API.get<unknown, AxiosResponse<Post[]>>('/posts')
        commit('SetIsLoading', false)
        // commit('setPosts', data)
    },
    async fetchPostById({commit}, postId: number) {
        commit('SetIsLoading', true)
        
        // Hacer la llamada al API
        // const data = await API.get<unknown, AxiosResponse<Post>>(`/posts/${postId}`)

        commit('SetIsLoading', false)
        // commit('setSelectedPost', data)
    },

    // Filtrar por texto
    async fetchPostsFilteredByText({commit}, filter: string) {
        commit('SetIsLoading', true)

        // Llamada al API
        // const data = await API.get<unknown, AxiosResponse<Post[]>>(`/posts?text=${filter.trim()}`)
        commit('SetIsLoading', false)
        // commit('setFilteredPosts', data)
    },
    async fetchPostsFilteredByUser({commit}, username: string) {
        commit('SetIsLoading', true)

        // Llamada al API
        // const data = await API.get<unknown, AxiosResponse<Post[]>>(`/posts?username=${username.trim()}`)
        commit('SetIsLoading', false)
        // commit('setFilteredPosts', data)
    }
}

export default actions;