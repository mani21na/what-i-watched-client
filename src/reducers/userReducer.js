const userReducer = (state = {users: [], loading: false}, action) => {
    switch(action.type){
        case 'FETCHING_USERS':
            return {...state, loading: true}
        case 'SHOW_USERS':
            return {...state, users: action.payload, loading: false}
        case 'ADD_USER':
            return {...state, users: [action.payload, ...state.users]}
        case 'DELETE_USER':
            return {users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}

export default userReducer