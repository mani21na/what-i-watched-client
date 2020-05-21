const initialState = {
    posts: []
}

const postReducer = (state = initialState.posts, action) => {
    switch(action.type){
        case 'FETCHING_POSTS':
            return {...state}
        case 'GET_POSTS':
            return {...state, posts: action.payload}
        case 'ADD_POST':
            return {...state, posts: [action.payload, ...state.posts]}
        case 'DELETE_POST':
            return {posts: state.posts.filter(post => post.id !== action.payload)}
        //case 'ADD_LIKE':
        //    let posts_add = state.posts.map(post => {
        //        if (post.id === action.payload.post_id) {
        //            return action.payload
        //        } else {
        //            return post
        //        } 
        //    })
        //    return {...state, posts: posts_add}
        //case 'NEW_LIKE':
        //    let postsNew = state.posts.map(post => {
        //        if (post.id === action.payload.post_id) {
        //          return action.payload
        //        } else {
        //            return post
        //        }
        //    })
        //    return {...state, posts: postsNew}
        default:
            return state
    }
}

export default postReducer

/*** Selector ***/
export const getPostByPostId = (state, postId) => {
    const post = state.postReducer.posts.filter(post => post.id === postId)
    return post
}