import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IUserState } from "./state";

const userModule: Module<IUserState, {}> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default userModule;