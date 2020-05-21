//define types of actions sent to reducer
// usually return an object


// normal object actions
const getLikes = (likes) => {
    return {
        type: 'GET_LIKES',
        payload: likes
    }
}

const addLike = (like) => {
    return {
        type: 'ADD_LIKE',
        payload: like
    }
}

const removeLike = (likeId) => {
    return {
        type: 'DELETE_LIKE',
        payload: likeId
    }
}

const updateLike = (like) => {
    return {
        type: 'UPDATE_LIKE',
        payload: like
    }
}

//middleware actions
//Async actions 
export const fetchLikes = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_LIKES'})
        return fetch('http://127.0.0.1:3001/likes.json')
        .then(res => res.json())
        .then(likes => {
            //console.log("likes:", likes)
            dispatch(getLikes(likes))
        }) 
    }
}

export const createLike = (like) => {
    return (dispatch) => {
        return fetch('http://127.0.0.1:3001/likes', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({like: like})
        })
        .then(res => res.json())
        .then(like => {
            dispatch(addLike(like))
        })
    }
}

export const deleteLike = (likeId) => {
    return (dispatch) => {
        return fetch(`http://127.0.0.1:3001/likes/${likeId}`, {
            method: 'DELETE'
        })
        .then(dispatch(removeLike(likeId)))
        .catch(err => console.log(err))
    }
}

export const increaseLike = (like) => {
    return (dispatch) => {
        console.log(like)
        return fetch(`http://127.0.0.1:3001/likes/${like.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({like: like})
        })
        .then(res => res.json())
        .then(dispatch(updateLike(like)))
    }
}