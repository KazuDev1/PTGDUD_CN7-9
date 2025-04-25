import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const toggleThemeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer