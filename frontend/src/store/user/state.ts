import { User } from "@/models/user";

export interface IUserState {
    users: User[],
    loggedUser: User | null,
    isLoading: boolean
}

function state(): IUserState {
    return {
        users: [],
        loggedUser: null,
        isLoading: false
    }
}

export default state;