import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import appSlice from "./app/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    products: productSlice,
  },
});
