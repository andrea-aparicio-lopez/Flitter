import { Post } from "./post";

export interface Page {
    totalPosts: number,
    page: number,
    limit: number,
    result: Post[]
}