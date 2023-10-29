import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    origin: null,
    destination: null,
    travelTime: null,
    travelDistance:null,
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
    setTravelDistance : (state,action) => {
      state.travelDistance = action.payload
    }
  },
});

export const navReducer = navSlice.reducer;
export const { setOrigin, setDestination, setTravelTime, setTravelDistance } = navSlice.actions;
