export const GetFollowingStatus = (state) => {
    return state.Contacts_messages.followingInProgress
}
export const GetContacts_messages = (state) => {
    return state.Contacts_messages.users
}

export const GetTotalCount = (state) => {
    return state.Contacts_messages.totalCount
}
export const GetPageSize = (state) => {
    return state.Contacts_messages.PageSize
}
export const GetCurrentPage = (state) => {
    return state.Contacts_messages.CurrentPage
}

export const GetIsFetching = (state) => {
    return state.Contacts_messages.isFetching
}
export const GetAuthStatus= (state) => {
    return state.Auth.isAuth
}
