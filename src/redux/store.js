import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoSlice";
import cartReducer from "./feature/productSlices/cartSlices"; 
import baseApi from "./api/baseApi";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer, 
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
