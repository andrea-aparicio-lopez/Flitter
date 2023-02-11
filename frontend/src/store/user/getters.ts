import { GetterTree } from "vuex";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, unknown> =  {
    getUsers(state) {
        return state.users;
    },
    getLoggedUser(state) {
        return state.loggedUser;
    },
    getIsLoading(state) {
        return state.isLoading;
    }
}

export default getters;