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
}

export default getters