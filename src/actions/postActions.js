//define types of actions sent to reducer
// usually return an object


// normal object actions
const showPosts = (posts) => {
    console.log("inside gotPosts")
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

//middleware actions
//Async actions 
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCHING_POSTS' })
        return fetch('http://127.0.0.1:3001/posts.json')
        .then(res => res.json())
        .then(posts => {
            let mutatedPosts = posts
            console.log("posts:", posts)
            dispatch(showPosts(mutatedPosts))
            })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/posts', {
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