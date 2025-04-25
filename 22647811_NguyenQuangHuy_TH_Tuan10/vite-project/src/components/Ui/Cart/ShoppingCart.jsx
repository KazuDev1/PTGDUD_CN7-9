import React, { useContext } from 'react';
import './style.css'; 
import { CartContext } from './CartContext';                             

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);  

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      // Sửa lỗi: Truyền payload dạng { productId, quantity }
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="container">
      <h1 className="title">Giỏ hàng của bạn</h1>
      {cartItems.length === 0 ? (
        <p className="emptyCartMessage">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.thumbnail} alt={item.title} className="cartItemImage" />
              <div className="cartItemDetails">
                <h3 className="cartItemTitle">{item.title}</h3>
                <p className="cartItemPrice">Giá: ${item.price}</p>
                <div className="cartItemQuantity">
                  Số lượng: 
                  <button 
                    className="quantityButton"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantityValue">{item.quantity}</span>
                  <button 
                    className="quantityButton"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="removeButton"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;