import {combineReducers} from 'redux'
import postReducer from './postReducer'
import userReducer from './userReducer'
import likeReducer from './likeReducer'

const rootReducer = combineReducers({
    postReducer,
    userReducer,
    likeReducer
})

export default rootReducer