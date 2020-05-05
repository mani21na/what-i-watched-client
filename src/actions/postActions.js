//define types of actions sent to reducer
// usually return an object


// normal object actions
const showPosts = (posts) => {
    return {
        type: 'SHOW_POSTS',
        payload: posts
    }
}

const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

const removePost = (post_id) => {
    return {
        type: 'DELETE_POST',
        payload: post_id
    }
}


//middleware actions
//Async actions 
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCHING_POSTS' })
        return fetch('http://127.0.0.1:3001/posts.json')
        .then(res => res.json())
        .then(posts => {
            let mutatedPosts = posts
            dispatch(showPosts(mutatedPosts))
        })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        return fetch('http://127.0.0.1:3001/posts', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({post: post})
        })
        .then(res => res.json())
        .then(post => {
            dispatch(addPost(post))
        })
    }
}

export const deletePost = (post_id) => {
    return (dispatch) => {
        return fetch('http://127.0.0.1:3001/posts/'+post_id, {
            method: "DELETE"
        })
        .then(dispatch(removePost(post_id)))
    }
}

export const updateLikesPost = (post) => {
    return (dispatch) => {
        return fetch('http://127.0.0.1:3001/posts/'+post.id, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({post: post})
        })
        .then(dispatch(showPosts(post)))
    }
}