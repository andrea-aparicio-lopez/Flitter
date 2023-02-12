import { computed } from "vue"
import { useStore } from "vuex"


const usePosts = () => {
    const store = useStore()

    return {
        // Getters
        posts: computed(() => store.getters['posts/getPosts']),
        selectedPost: computed(() => store.getters['posts/getSelectedPost']),
        isLoading: computed(() => store.getters['posts/getIsLoading']),
        limitReached: computed(() => store.getters['posts/getLimitReached']),

        // Actions
        fetchPosts: (params: { published: boolean, page: number, sort: string}) => store.dispatch('posts/fetchPosts', params),
        fetchPostsByUser: (params: { published: boolean, page: number, sort: string, username: string}) => store.dispatch('posts/fetchPostsByUser', params),
        fetchPostsByText: (params: { published: boolean, page: number, sort: string, text: string}) => store.dispatch('posts/fetchPostsByText', params),
        fetchPostById: (postId: number) => store.dispatch('posts/fetchPostById', postId),
    }
}

export default usePosts;