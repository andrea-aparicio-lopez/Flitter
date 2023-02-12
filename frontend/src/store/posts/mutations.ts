import { Post } from "@/models/post";
import { MutationTree } from "vuex";
import { IPostsState } from "./state";


const mutations: MutationTree<IPostsState> = {
    setPosts(state: IPostsState, posts: Post[]) {
        state.posts = posts;
    },
    setSelectedPost(state: IPostsState, post: Post) {
        state.selectedPost = post;
    },
    setIsLoading(state: IPostsState, value: boolean) {
        state.isLoading = value;
    },
    setLimitReached(state: IPostsState, value: boolean) {
        state.limitReached = value;
    }
}

export default mutations;