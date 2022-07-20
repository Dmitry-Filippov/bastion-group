import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    addType: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addType } = typesSlice.actions;

export default typesSlice.reducer;
