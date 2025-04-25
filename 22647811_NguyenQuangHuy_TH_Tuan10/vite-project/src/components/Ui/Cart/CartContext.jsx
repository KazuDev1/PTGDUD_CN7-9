import React, { useContext } from 'react';
import { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../../Reducer/Cart';

// Tạo CartContext
export const CartContext = createContext();

// CartProvider component
const CartProvider = ({ children }) => {
    // Sửa lỗi cú pháp useSelector: cần dùng hàm để truy cập state
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    // Sửa lỗi tham số: quantnewQuantity -> newQuantity
    const handleUpdateQuantity = (productId, newQuantity) => {
        dispatch(updateQuantity({ productId, quantity: newQuantity }));
    };

    return (
        // Sửa lỗi: CartProvider.Provider -> CartContext.Provider
        <CartContext.Provider 
            value={{ 
                cartItems, 
                addToCart: handleAddToCart, 
                removeFromCart: handleRemoveFromCart, 
                updateQuantity: handleUpdateQuantity 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Hook useCart để sử dụng context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export default CartProvider;