import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
    setUsers(state: IUserState, users: User[]) {
        state.users = users;
    },
    setLoggedUser(state: IUserState, user: User) {
        console.log('por aqui pasa')
        state.loggedUser = user;
        console.log('info:', state.loggedUser)
    },
    setSelectedUser(state: IUserState, user: User) {
        state.selectedUser = user;
    },
    setIsLoading(state: IUserState, value: boolean) {
        state.isLoading = value;
    }
}

export default mutations;