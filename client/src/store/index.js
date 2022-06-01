import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import alert from './alert'
const reducer = combineReducers({
    // adding reducer
    alert
})

const store = configureStore({
    reducer
})

export default store