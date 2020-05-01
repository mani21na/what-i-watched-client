const commentReducer = (state = {comments: [], loading: false}, action) => {
    switch(action.type){
        case 'FETCHING_COMMENTS':
            return {...state, loading: true}
        case 'GOT_COMMENTS':
            return {...state, comments: action.payload, loading: false}
        case 'ADD_COMMENT':
            return {...state, comments: [action.payload, ...state.comments]}
        case 'DELETE_COMMENT':
            return {posts: state.comments.filter(comment => comment.id !== action.payload)}
        default:
            return state
    }
}


export default commentReducer