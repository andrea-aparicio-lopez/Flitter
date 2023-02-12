import { User } from "@/models/user";

export interface IUserState {
    users: User[],
    loggedUser: User | null,
    selectedUser: User | null,
    isLoading: boolean
}

function state(): IUserState {
    return {
        users: [],
        loggedUser: null,
        selectedUser: null,
        isLoading: false
    }
}

export default state;