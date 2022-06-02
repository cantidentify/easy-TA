import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import clocking from '../features/clocking'
import signIn from "../features/signIn";

const reducer = combineReducers({
    // adding reducer
    clocking,
    signIn
})

const store = configureStore({
    reducer
})

export default store