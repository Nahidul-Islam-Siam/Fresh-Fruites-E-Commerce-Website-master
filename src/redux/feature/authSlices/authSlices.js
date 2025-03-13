import { createSlice } from "@reduxjs/toolkit";

const safeParse = (value) => {
    try {
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        return null;
    }
};

const initialState = {
    user: typeof window !== "undefined" ? safeParse(localStorage.getItem("user")) : null,
    token: typeof window !== "undefined" ? localStorage.getItem("token") || null : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;

            localStorage.setItem("user", JSON.stringify(user)); 
            localStorage.setItem("token", token);

            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");

            state.user = null;
            state.token = null;
        }
    },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;


export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
