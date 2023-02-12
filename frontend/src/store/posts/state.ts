import { Post } from "@/models/post";


export interface IPostsState {
    posts: Post[],
    selectedPost: Post | null,
    isLoading: boolean,
    limitReached: boolean,
}

function state(): IPostsState {
    return {
        posts: [],
        selectedPost: null,
        isLoading: false,
        limitReached: true
    }
}

export default state;