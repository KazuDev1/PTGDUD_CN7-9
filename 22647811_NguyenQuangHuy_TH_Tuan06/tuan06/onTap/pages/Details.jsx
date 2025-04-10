import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Lỗi khi tải dữ liệu:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <h2>Đang tải...</h2>;

    if (!product) return <h2>Lỗi: Không tìm thấy sản phẩm</h2>;

    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <h2>{product.title}</h2>
            <img src={product.images?.[0]} alt={product.title} width="300" />
            <p>Giá: {product.price} $</p>
            <p>Loại: {product.category}</p>
            <p>Mô tả: {product.description}</p>
        </div>
    );
}

export default Details;
