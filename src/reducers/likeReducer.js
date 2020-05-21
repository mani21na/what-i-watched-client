const initialState = {
    likes: []
}

const likeReducer = (state = initialState.likes, action) => {
    switch(action.type){
        case 'FETCHING_LIKES':
            return {...state}
        case 'GET_LIKES':
            return {...state, likes: action.payload}
        case 'ADD_LIKE':
            return {...state, likes: [action.payload, ...state.likes]}
        case 'DELETE_LIKE':
            return {likes: state.likes.filter(like => like.post_id !== action.payload)}
        case 'UPDATE_LIKE':
            //console.log(action.payload)
            let newLike = state.likes.map(like => {
                if (like.id === action.payload.id) {
                    console.log(action.payload)
                    return action.payload
                } else {
                    return like
                }        
            })
            return {...state, likes: newLike}
        default:
            return state
    }
}

export default likeReducer

/*** Selector ***/
export const getLikeByPostId = (state, postId) => {
    const like = state.likeReducer.likes.filter(like => like.post_id === postId)
    return like
}