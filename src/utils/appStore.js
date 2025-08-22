import { configureStore } from "@reduxjs/toolkit"; //from redux toolkit coz it has to do redux stuff
import cartReducer from "./cartSlice"; //whatever we waana name we named cardReducer to default export cartSlice.reducer
import { useReducer } from "react";
//configureStore will give our store for our react application
const appStore = configureStore({
  reducer: {
    //when you want to update the big(whole) store, It also has a reducer for itself and this reducer (combines)consists of all the reducers of slices.This reducer is responsible to modify the appStore(redux store).
    cart: cartReducer, //reducer for our cartSlice
    //user: useReducer //if we had a userSLice then its reducer will also be here
  },
}); //It takes a configuration object as an argument

export default appStore;
