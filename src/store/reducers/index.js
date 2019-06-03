import { combineReducers } from 'redux'
import userReducer from './users'
import articleReducer from './articles'

export default combineReducers({ userReducer, articleReducer })
