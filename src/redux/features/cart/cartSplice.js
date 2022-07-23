import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSplice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let isInCart = false;
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          isInCart = true;
          item.howMany += action.payload.howMany;
        }
      });
      if (!isInCart) {
        state.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          state.splice(i, 1);
        }
      }
    },
    clearCart: (state) => {
      state.length = 0;
    },
    increaseCount: (state, action) => {
      const id = action.payload;
      state.forEach((item) => {
        if (item.id === id) {
          item.howMany++;
        }
      });
    },
    decreseCount: (state, action) => {
      const id = action.payload;
      state.forEach((item) => {
        if (item.id === id) {
          item.howMany--;
        }
      });
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseCount,
  decreseCount,
} = cartSplice.actions;

export default cartSplice.reducer;
