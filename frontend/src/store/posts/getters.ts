import { GetterTree } from "vuex";
import { IPostsState } from "./state";


const getters: GetterTree<IPostsState, unknown> = {
    getPosts(state) {
        return state.posts;
    },
    getIsLoading(state) {
        return state.isLoading;
    },
    getSelectedPost(state) {
        return state.selectedPost;
    },
    // Para filtrar por título, #, etc
    getFilteredPosts(state) {
        return state.posts;
    }
}

export default getters