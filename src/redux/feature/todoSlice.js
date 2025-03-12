import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
});

// ✅ Correct export: Use `reducer` instead of `reducers`
export default todoSlice.reducer;

// ✅ Correct export of actions
export const { addTodo } = todoSlice.actions;
