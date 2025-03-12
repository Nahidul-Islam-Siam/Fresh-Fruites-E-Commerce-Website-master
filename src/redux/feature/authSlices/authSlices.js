import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") || null,
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;

            localStorage.setItem("user", user)
            localStorage.setItem("token", token)

            console.log("Auth", { user, token });

            state.user = user;
            state.token = token;
        },
        getUser: (state) => {
            const user = state.user = localStorage.getItem("user");
            console.log("Logined user", user);

        },
        logOut: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");

            state.user = null;
            state.token = null;
        }
    },
});

export const { setUser, getUser, logOut } = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;