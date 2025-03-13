import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) || null : null,
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


export const useCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
