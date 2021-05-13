import { AppStateType } from "../redux-store"


export const GetFollowingStatus = (state : AppStateType) => {
    return state.Contacts_messages.followingInProgress
}
export const GetContacts_messages = (state : AppStateType) => {
    return state.Contacts_messages.users
}

export const GetTotalCount = (state : AppStateType) => {
    return state.Contacts_messages.totalCount
}
export const GetPageSize = (state : AppStateType) => {
    return state.Contacts_messages.PageSize
}
export const GetCurrentPage = (state : AppStateType) => {
    return state.Contacts_messages.CurrentPage
}

export const GetIsFetching = (state : AppStateType) => {
    return state.Contacts_messages.isFetching
}
export const GetAuthStatus= (state : AppStateType) => {
    return state.Auth.isAuth
}

// export const GetUsersFilter= (state : any) => {
//     return state.Contacts_messages.filter.term
// }
