import { ActionContext, ActionTree } from "vuex";
import { IPostsState } from "./state";
import flitterApi from "@/api/flitterApi";
import { AxiosResponse } from "axios";
import { Page } from "@/models/page";


const actions: ActionTree<IPostsState, unknown> = {
    async fetchPosts({commit}, 
        params: { 
            published: boolean, 
            page: number,
            sort: string,}) {
        commit('setIsLoading', true)
        
        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?published=${params.published}&page=${params.page}&sort=${params.sort}`);
        
        if(params.page * data.limit < data.totalPosts) {
            commit('setLimitReached', false)
        } else {
            commit('setLimitReached', true)
        }

        commit('setIsLoading', false);
        commit('setPosts', data.result);
    },
    async fetchPostById({commit}, postId: number) {
        commit('setIsLoading', true)
        
        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts/${postId}`)

        commit('setIsLoading', false)
        commit('setSelectedPost', data.result);
    },
    async fetchPostsByUser({commit}, 
        params: { 
            published: boolean,
            page:       number, 
            sort:       string, 
            username:   string}) {
        commit('setIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?published=${params.published}&page=${params.page}&sort=${params.sort}&username=${params.username}`);

        if(params.page * data.limit < data.totalPosts) {
            commit('setLimitReached', false)
        } else {
            commit('setLimitReached', true)
        }

        commit('setIsLoading', false);
        commit('setPosts', data.result);
    },
    async fetchPostsByText({commit}, 
        params: { 
            published: boolean,
            page: number, 
            sort: string, 
            text: string}) {
        commit('setIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?published=${params.published}&page=${params.page}&sort=${params.sort}&text=${params.text}`);

        if(params.page * data.limit < data.totalPosts) {
            commit('setLimitReached', false)
        } else {
            commit('setLimitReached', true)
        }

        commit('setIsLoading', false);
        commit('setPosts', data.result);
    },
    
    // Por si se necesita buscar por usuario & texto a la vez
    async fetchPostsAllFilters({commit}, 
        params: { 
            published: boolean,
            page:       number, 
            sort:       string, 
            username:   string, 
            text:       string }) {

        commit('setIsLoading', true)     

        const { data } = await flitterApi.get<unknown, AxiosResponse<Page>>(`/posts?published=${params.published}&page=${params.page}&sort=${params.sort}&username=${params.username}&text=${params.text}`)

        if(params.page * data.limit < data.totalPosts) {
            commit('setLimitReached', false)
        } else {
            commit('setLimitReached', true)
        }

        commit('setIsLoading', false);
        commit('setPosts', data.result);
    },
}

export default actions;