import {combineReducers, configureStore} from "@reduxjs/toolkit";
import textFieldReduser from "./redusers/textFieldReduser"
import {createWrapper} from "next-redux-wrapper";

const rootReduser = combineReducers({
    textFieldReduser
})


export const makeStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export const wrapper = createWrapper(makeStore);