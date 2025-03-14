import { createSlice } from "@reduxjs/toolkit";

const initial = {
  value: false,
  message: "No message",
};

const cookieSlice = createSlice({
  name: "cookie",
  initialState: initial,
  reducers: {
    setCookie: (state, action) => {
      state.value = action.payload.value;
      state.message = action.payload.message;
    },
  },
});

export default cookieSlice.reducer;
export const { setCookie } = cookieSlice.actions;
