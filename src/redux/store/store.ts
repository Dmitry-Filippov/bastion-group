import { configureStore } from "@reduxjs/toolkit";
import typesReduser from "../features/types/typesSlice";
import productsReduser from "../features/products/productsSplice";

export const store = configureStore({
  reducer: {
    types: typesReduser,
    products: productsReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
