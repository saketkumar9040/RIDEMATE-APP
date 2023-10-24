import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        userData:null,
        currentLocation:null
    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload.userData;
        },
        setCurrentLocation:(state,action)=>{
            state.currentLocation=action.payload.currentLocation;
        }
    }
});

export const authReducer = authSlice.reducer;
export const {setCurrentLocation,setUserData}  = authSlice.actions;