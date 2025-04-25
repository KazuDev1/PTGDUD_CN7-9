import { createSlice,nanoid } from "@reduxjs/toolkit";

const todoList = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        add: {
            reducer: (state,action) => {
                const newTodo = {
                    id: nanoid(),
                    content: action.payload,
                    completed: false,
                }
                state.push(newTodo)
                return state
            },
            prepare: (text) => {
                return { payload: text }
            }
        },
        remove: (state,action) => {
            state = state.filter((todo) => todo.id != action.payload)
            return state
        },
        complete: (state,action) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.completed = true
            }
        }
    }
})

export const { add,remove,complete } = todoList.actions;
export default todoList.reducer