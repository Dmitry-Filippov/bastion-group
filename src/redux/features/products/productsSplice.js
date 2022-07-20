import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSplice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productsSplice.actions;

export default productsSplice.reducer;