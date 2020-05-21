//define types of actions sent to reducer
// usually return an object


// normal object actions
const gotUsers = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    }
}

const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

//normal object actions
//Async actions
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_USERS'})
        return fetch('http://localhost:3001/users.json')
            .then(res => res.json())
            .then(users => {
                //console.log('users:', users)
                dispatch(gotUsers(users))
            })
    }
}

export const createUser = (user) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({user: user})
        })
        .then(res => res.json())
        .then(user => {
            dispatch(addUser(user))
        })
    }
}

//export const showUser = (user) => {
//    return (dispatch) => {
//        return fetch('http://localhost:3001/users', {
//            method: "GET",
//            headers: {
//                'Content-Type': 'application/json'
//              },
//            body: JSON.stringify({user: user})
//        })
//        .then(res => res.json())
//        .then(user => {
//            dispatch(addUser(user))
//        })
//    }
//}