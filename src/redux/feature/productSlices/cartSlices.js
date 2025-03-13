import { createSlice } from "@reduxjs/toolkit";

const getLocalCart = () => JSON.parse(localStorage.getItem("cart")) || [];
const saveLocalCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: typeof window !== "undefined" ? getLocalCart() : [] },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      item ? item.quantity++ : state.cartItems.push({ ...action.payload, quantity: 1 });
      saveLocalCart(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload.id);
      saveLocalCart(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
