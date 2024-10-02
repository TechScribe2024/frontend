import { combineReducers } from 'redux'
import blogPostReducer from './blogPostReducer'

export default combineReducers({
    posts: blogPostReducer
})