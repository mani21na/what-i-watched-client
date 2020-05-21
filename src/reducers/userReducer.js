const initialState = {
    users: []
}

const userReducer = (state = initialState.users, action) => {
    switch(action.type){
        case 'FETCHING_USERS':
            return {...state}
        case 'GET_USERS':
            return {...state, users: action.payload}
        case 'ADD_USER':
            return {...state, users: [action.payload, ...state.users]}
        case 'DELETE_USER':
            return {users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}

export default userReducer

/*** Selector ***/
export const getUserByPostId = (state, postId) => {
    const user = state.userReducer.users.filter(user => user.post_id === postId)
    return user
}