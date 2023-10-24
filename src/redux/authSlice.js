import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        userData:null,
        currentLocation:null,
        currentAddress:null,
    },
    reducers:{
        setUserData:(state,action)=>{
            
            state.userData=action.payload.userData;
        },
        setCurrentLocation:(state,action)=>{
            state.currentLocation=action.payload.currentLocation;
        },
        setCurrentAddress:(state,action)=>{
            state.currentAddress=action.payload.currentAddress;
        }
    }
});

export const authReducer = authSlice.reducer;
export const {setCurrentLocation,setUserData,setCurrentAddress}  = authSlice.actions;