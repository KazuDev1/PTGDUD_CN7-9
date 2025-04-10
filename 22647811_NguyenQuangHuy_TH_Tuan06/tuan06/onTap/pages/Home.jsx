import { useEffect, useState } from "react";
import "./Home.css"; 
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            });
    }, [products]); 

    function handleBuy() {
        alert("Cảm ơn bạn đã mua sản phẩm!")
    }

    return (
        <>
            <div>
                <h1>Trang chủ</h1>
                <p>Chào mừng bạn đến với trang chủ!</p>
            </div>
            <div className="product-container">
                {products.map((item, index) => (
                    <div key={index} className="product-card">
                        <img src={item.images} alt={item.title} />
                        <h3 className="black">{item.title}</h3>
                        <p className="black">Loại: {item.category}</p>
                        <p className="black">Giá: {item.price} $</p>
                        <div className="button-group">
                            <button onClick={() => handleBuy()} props={item}>
                                <Link className="white" to="/Cart" state={{ product: item }}>Mua</Link>
                            </button>
                            <button>
                                <Link className="white" to={`/Details/${item.id}`}>Chi tiết</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
