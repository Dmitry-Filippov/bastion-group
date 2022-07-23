import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Шланг садовый",
    type: "Шланги",
    price: "12300",
    gost: "123-ст-12",
    isHit: true,
    isAction: true,
  },
  {
    id: "2",
    name: "Шланг навесной",
    type: "Шланги",
    price: "11500",
    gost: "123-ст-12",
    isHit: true,
    isAction: true,
  },
  {
    id: "3",
    name: "Труба зажимная",
    type: "Трубы",
    price: "12300",
    gost: "123-св-16",
    isHit: false,
    isAction: true,
  },
];

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
