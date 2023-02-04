import { Post } from "@/models/post";


export interface IPostsState {
    posts: Post[],
    isLoading: boolean,
    selectedPost: Post | null
}

function state(): IPostsState {
    return {
        posts: [],
        isLoading: false,
        selectedPost: null
    }
}

export default state;