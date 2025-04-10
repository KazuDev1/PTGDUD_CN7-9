import { useState } from "react";
import { useLocation } from "react-router-dom";


function Cart() {
    const location = useLocation();
    const product = location.state?.product;
    console.log(product)
    const listCart = {

    }

    const [cart,setCart] = useState(listCart)

    return (
        <>
            <h1>Tất cả các sản phẩm của bạn</h1>
        </>
    )
}

export default Cart;