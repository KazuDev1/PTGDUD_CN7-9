import  { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../Reducer/CounterReducer";
import todoList from "../Reducer/TodoList";
import  toggleTheme  from '../Reducer/ToggleTheme';
import cart from "../Reducer/Cart"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoList,
        theme: toggleTheme,
        cart:  cart
    }
});

export default store;