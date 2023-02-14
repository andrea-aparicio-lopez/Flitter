import flitterApi from "@/api/flitterApi";
import { User } from "@/models/user";
import { UserResponse } from "@/models/userResponse";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, unknown> = {
    async fetchUsers({commit}, username: string) {
        commit('setIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<UserResponse>>(`/users?username=${username}`)

        commit('setIsLoading', false)
        commit('setUsers', data.result)
    },
    async fetchUserById({commit}, userId: number) {
        commit('setIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<UserResponse>>(`/users/${userId}`)

        commit('setIsLoading', false)
        commit('setSelectedUser', data.result)
    },
    async fetchLoggedUser({commit}) {
        commit('setIsLoading', true)

        const {data} = await flitterApi.get<unknown, AxiosResponse<UserResponse>>('/users/auth')
        
        commit('setIsLoading', false)
        commit('setLoggedUser', data.result)
    },
    async fetchUserByUsername({commit}, username: string) {
        commit('setIsLoading', true)

        const { data } = await flitterApi.get<unknown, AxiosResponse<UserResponse>>(`/users?username=${username}`)
        
        commit('setIsLoading', false)
        commit('setSelectedUser', data.result)
    }
}

export default actions;