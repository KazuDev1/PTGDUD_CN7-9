import React, { useEffect, useState } from 'react';
import './style.css'; // Import file CSS
import { useCart } from '../Cart/CartContext';

const Cart = () => {
    const [data, setData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    // Lấy cartItems từ context để hiển thị số lượng sản phẩm trong giỏ
    const { addToCart, cartItems } = useCart();

    // Fetch dữ liệu sản phẩm từ API
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setData(data.products);
            })
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    // Cập nhật totalPrice dựa trên cartItems
    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, [cartItems]);

    // Sửa lỗi: thêm const cho handleAddToCart
    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="container">
            <h1 className="title">Sản phẩm</h1>
            <div className="productGrid">
                {data && data.map(product => (
                    <div key={product.id} className="productCard">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="productImage"
                        />
                        <h3 className="productTitle">{product.title}</h3>
                        <p className="productPrice">
                            Giá: <strong className="priceValue">${product.price}</strong>
                        </p>
                        <button 
                            className="addToCartButton" 
                            onClick={() => handleAddToCart(product)}
                        >
                            Thêm vào giỏ
                        </button>
                    </div>
                ))}
            </div>
            <div className="cartArea">
                <div className="cartIcon">
                    <span>🛒</span> Giỏ hàng (<span>{cartItems.length}</span>)
                </div>
                <div className="totalPrice">
                    Tổng tiền: <span className="totalValue">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default Cart;