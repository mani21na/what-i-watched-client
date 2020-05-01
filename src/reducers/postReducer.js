const postReducer = (state = {posts: [], loading: false}, action) => {
    switch(action.type){
        case 'FETCHING_POSTS':
            return {...state, loading: true}
        case 'SHOW_POSTS':
            return {...state, posts: action.payload, loading: false}
        case 'ADD_POST':
            return {...state, posts: [action.payload, ...state.posts]}
        case 'DELETE_POST':
            return {posts: state.posts.filter(post => post.id !== action.payload)}
        default:
            return state
    }
}


export default postReducer