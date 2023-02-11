import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
    setUsers(state: IUserState, users: User[]) {
        state.users = users;
    },
    setLoggedUser(state: IUserState, user: User) {
        state.loggedUser = user;
    },
    setIsLoading(state: IUserState, value: boolean) {
        state.isLoading = value;
    }
}

export default mutations;