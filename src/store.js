import { createStore } from "redux";
import {  configureStore } from "@reduxjs/toolkit";

const initialState = {user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {email: "", accessToken: ""} };


const authReducer = (state = initialState, action) => {
 // if (localStorage.getItem("user")) {
 //   return (state = JSON.parse(localStorage.getItem("user")));
 // } else {
    switch (action.type) {
     
      case "LOGIN":
        return action.payload.value;
      case "LOG_OUT":
        return initialState;
      default:
        return state;
    }
  //}
};
export const store = configureStore({reducer: authReducer});
export const logInAction = (value) => {
  localStorage.setItem("user", JSON.stringify(value))
  return { type: "LOGIN", payload: value };
};
export const logOut = () => {
  localStorage.clear("user")
  return { type: "LOG_OUT", payload: initialState };
};
