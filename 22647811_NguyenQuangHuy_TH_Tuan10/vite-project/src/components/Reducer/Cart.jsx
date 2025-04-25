import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const cart = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: {
            reducer: (state,action) => {
                const product = action.payload
                const existItem = state.items.find((item) => item.id === product.id)
                if(existItem) {
                    existItem.quantity += 1
                }else {
                    state.items.push({...product,quantity : 1});
                }
            },
        },
        removeFromCart: (state,action) => {
            const productId = action.payload
            const items = state.items.filter((item) => item.id != productId)
            state.items = items
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload; // Sửa newQuantity thành quantity để khớp với CartContext
            const item = state.items.find((item) => item.id === productId);
            if (item) {
                item.quantity = quantity; // Cập nhật số lượng
            }
            // Nếu muốn loại bỏ sản phẩm khi số lượng = 0, có thể thêm:
            state.items = state.items.filter(item => item.quantity > 0);
        }
    }
})

export const { addToCart,removeFromCart,updateQuantity } = cart.actions;
export default cart.reducer