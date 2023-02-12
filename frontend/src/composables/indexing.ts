import usePosts from "./usePosts";

const { fetchPosts } = usePosts()

export function previousPage(params: {published: boolean, page: number, sort: string}) {
    params.page = params.page - 1;
    fetchPosts(params)
}

export function nextPage(params: {published: boolean, page: number, sort: string}) {
    params.page ++;
    fetchPosts(params)
}