import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  user: [],
};

export const cartSplice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItemToCart } = cartSplice.actions;

export default cartSplice.reducer;
