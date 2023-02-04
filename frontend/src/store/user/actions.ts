import { ActionTree } from "vuex";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, {}> = {
    async fetchUser({commit}) {
        commit('setIsLoading', true)

        // const {data} = await API.get<unknown, AxiosResponse<User>>('/auth/profile')

        commit('setIsLoading', false)
        // commit('setUser', data)
    }
}

export default actions;