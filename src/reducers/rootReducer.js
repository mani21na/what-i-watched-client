import {combineReducers} from 'redux'
import postReducer from './postReducer'
//import commentReducer from './commentReducer'

const rootReducer = combineReducers({
    postReducer
})

export default rootReducer