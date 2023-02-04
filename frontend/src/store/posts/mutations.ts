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
    setFilteredPosts(state: IPostsState, filteredPosts: Post[]) {
        state.posts = filteredPosts;
    },
    setIsLoading(state: IPostsState, value: boolean) {
        state.isLoading = value;
    },
}

export default mutations;