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
    user: null,
    token: null,
};

if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    initialState.user = storedUser ? safeParse(storedUser) : null;
    initialState.token = storedToken || null;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
   
        setUser: (state, action) => {
            const { user, token } = action.payload;

            if (typeof window !== "undefined") {
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                }
                if (token) {
                    localStorage.setItem("token", token);
                }
            }

        
            state.user = user;
            state.token = token;
        },
 
        logOut: (state) => {
       
            if (typeof window !== "undefined") {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }


            state.user = null;
            state.token = null;
        }
    },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;


export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
