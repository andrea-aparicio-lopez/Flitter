import { ActionContext, ActionTree } from "vuex";
import { IPostsState } from "./state";
import flitterApi from "@/api/flitterApi";
import { Post } from "@/models/post";
import { AxiosResponse } from "axios";


const actions: ActionTree<IPostsState, unknown> = {
    async fetchPosts({commit}, 
        params: { 
            page: number, 
            sort: string,}) {
        commit('SetIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Post[]>>(
            `/posts?page=${params.page}
            &sort=${params.sort}`);

        commit('SetIsLoading', false);
        commit('setPosts', data);
    },
    async fetchPostById({commit}, postId: number) {
        commit('SetIsLoading', true)
        
        const { data } = await flitterApi.get<unknown, AxiosResponse<Post>>(`/posts/${postId}`)

        commit('SetIsLoading', false)
        commit('setSelectedPost', data)
    },
    async fetchPostsByUser({commit}, 
        params: { 
            page:       number, 
            sort:       string, 
            username:   string}) {
        commit('SetIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Post[]>>(
            `/posts?page=${params.page}
            &sort=${params.sort}
            &username=${params.username}`);

        commit('SetIsLoading', false);
        commit('setPosts', data);
    },
    async fetchPostsByText({commit}, 
        params: { 
            page: number, 
            sort: string, 
            text: string}) {
        commit('SetIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Post[]>>(
            `/posts?page=${params.page}
            &sort=${params.sort}
            &text=${params.text}`);

        commit('SetIsLoading', false);
        commit('setPosts', data);
    },
    
    // Por si se necesita buscar por usuario & texto a la vez
    async fetchPostsAllFilters({commit}, 
        params: { 
            page:       number, 
            sort:       string, 
            username:   string, 
            text:       string }) {

        commit('SetIsLoading', true)     

        const { data } = await flitterApi.get<unknown, AxiosResponse<Post[]>>(
            `/posts?page=${params.page}
            &sort=${params.sort}
            &username=${params.username}
            &text=${params.text}`)

        commit('SetIsLoading', false)
        commit('setPosts', data)
    },
}

export default actions;