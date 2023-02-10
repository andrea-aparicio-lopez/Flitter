import { ActionContext, ActionTree } from "vuex";
import { IPostsState } from "./state";
import flitterApi from "@/api/flitterApi";
import { AxiosResponse } from "axios";
import { Page } from "@/models/page";


const actions: ActionTree<IPostsState, unknown> = {
    async fetchPosts({commit}, 
        params: { 
            page: number, 
            sort: string,}) {
        commit('SetIsLoading', true)
        
        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?page=${params.page}&sort=${params.sort}`);
            
        console.log(data.result)
        commit('SetIsLoading', false);
        commit('setPosts', data.result);
    },
    async fetchPostById({commit}, postId: number) {
        commit('SetIsLoading', true)
        
        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts/${postId}`)

        commit('SetIsLoading', false)
        commit('setSelectedPost', data.result)
    },
    async fetchPostsByUser({commit}, 
        params: { 
            page:       number, 
            sort:       string, 
            username:   string}) {
        commit('SetIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?page=${params.page}&sort=${params.sort}&username=${params.username}`);

        commit('SetIsLoading', false);
        commit('setPosts', data.result);
    },
    async fetchPostsByText({commit}, 
        params: { 
            page: number, 
            sort: string, 
            text: string}) {
        commit('SetIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?page=${params.page}&sort=${params.sort}&text=${params.text}`);

        commit('SetIsLoading', false);
        commit('setPosts', data.result);
    },
    
    // Por si se necesita buscar por usuario & texto a la vez
    async fetchPostsAllFilters({commit}, 
        params: { 
            page:       number, 
            sort:       string, 
            username:   string, 
            text:       string }) {

        commit('SetIsLoading', true)     

        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?page=${params.page}&sort=${params.sort}&username=${params.username}&text=${params.text}`)

        commit('SetIsLoading', false)
        commit('setPosts', data.result)
    },
}

export default actions;