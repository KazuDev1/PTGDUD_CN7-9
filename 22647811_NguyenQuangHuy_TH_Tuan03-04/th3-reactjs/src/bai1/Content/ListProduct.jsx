import React from "react";
import "./ListProduct.css"; // Import CSS file

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Italian-style tomato salad",
    time: "14 minutes",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Vegetable and shrimp spaghetti",
    time: "15 minutes",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Lotus delight salad",
    time: "20 minutes",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Snack cakes",
    time: "21 minutes",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    name: "Salad with cabbage and shrimp",
    time: "32 minutes",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    name: "Bean, shrimp, and potato salad",
    time: "32 minutes",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    name: "Sunny-side up fried eggs",
    time: "32 minutes",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    name: "Lotus delight salad",
    time: "32 minutes",
  },
];

const ListProduct = () => {
  return (
    <div className="list-product-container">
      <div className="list-product">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.time}</p>
            <button className="save-button">♡</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>...</button>
        <button>11</button>
      </div>
    </div>
  );
};

export default ListProduct;
