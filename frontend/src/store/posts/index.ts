import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IPostsState } from "./state";


const postsModule: Module<IPostsState, {}> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default postsModule;