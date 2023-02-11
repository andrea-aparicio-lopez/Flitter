import { Post } from "./post";

export interface Page {
    page: number,
    limit: number,
    result: Post[]
}