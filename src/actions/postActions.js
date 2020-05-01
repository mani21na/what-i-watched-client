//define types of actions sent to reducer
// usually return an object


// normal object actions
const gotPosts = (posts) => {
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

//normal object actions
//Async actions
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_POSTS'})
        return fetch('http://localhost:3000/posts.json')
            .then(res => res.json())
            .then(posts => {
                let mutatedPosts = posts
                console.log("posts:", posts)
                dispatch(gotPosts(mutatedPosts))
            })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({post: post})
        })
        .then(res => res.json())
        .then(post => {
            dispatch(addPost(post))
        })
    }
}