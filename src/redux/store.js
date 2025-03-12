import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoSlice";
import baseApi from "./api/baseApi";



const store = configureStore({
  reducer: {
    todo: todoReducer,
    [baseApi.reducerPath]:baseApi.reducer,
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;
