import { createSlice } from "@reduxjs/toolkit";

const getLocalCart = () => JSON.parse(localStorage.getItem("cart")) || [];
const saveLocalCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    cartItems: typeof window !== "undefined" ? getLocalCart() : [],
    error: null, // ✅ Add error state
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(i => i.id === action.payload.id);
      if (itemExists) {
        state.error = "Item already in cart"; // ✅ Set error message
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        saveLocalCart(state.cartItems);
        state.error = null; // ✅ Clear error when successfully adding
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload.id);
      saveLocalCart(state.cartItems);
    },
    clearError: (state) => {
      state.error = null; // ✅ Add reducer to clear error
    },
  },
});

export const { addToCart, removeFromCart, clearError } = cartSlice.actions;
export default cartSlice.reducer;
