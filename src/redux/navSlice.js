import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    origin: null,
    destination: null,
    travelTime: null,
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload.origin;
    },
    setDestination: (state, action) => {
      state.destination = action.payload.destination;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload.travelTime;
    },
  },
});

export const navReducer = navSlice.reducer;
export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;
