import { DiscoveriesProps } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initial: DiscoveriesProps = {
  discovered: [],
};

const discoveriesSlice = createSlice({
  name: "discoveries",
  initialState: initial,
  reducers: {
    addDiscoveries: (state, action) => {
      state.discovered = [...state.discovered, ...action.payload];
    },
  },
});

export default discoveriesSlice.reducer;
export const { addDiscoveries } = discoveriesSlice.actions;
