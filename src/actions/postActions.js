//define types of actions sent to reducer
// usually return an object


// normal object actions
const getPosts = (posts) => {
    return {
        type: 'GET_POSTS',
        payload: posts
    }
}

const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

const removePost = (postId) => {
    return {
        type: 'DELETE_POST',
        payload: postId
    }
}

const removeLike = (postId) => {
    return {
        type: 'DELETE_LIKE',
        payload: postId
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_POSTS'})
        return fetch('http://localhost:3001/posts.json')
        .then(res => res.json())
        .then(posts => {
            //console.log("posts:", posts)
            dispatch(getPosts(posts))
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

export const deletePost = (postId) => {
    return (dispatch) => {
        return fetch(`http://127.0.0.1:3001/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(dispatch(removePost(postId)))
        .then(dispatch(removeLike(postId)))
        .catch(err => console.log(err))
    }
}
