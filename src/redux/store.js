import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoSlice";
import cartReducer from "./feature/productSlices/cartSlices"; 
import baseApi from "./api/baseApi";
import authReducer from './feature/authSlices/authSlices';
const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer, 
    auth: authReducer, 
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
