import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { navReducer } from "./navSlice";

const Store = configureStore({
    reducer:{
       auth:authReducer,
       nav:navReducer
    }
});

export default Store;
