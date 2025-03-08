import React, { useState } from "react";
import "./ListProduct.css";
import SearchBtn from "./SearchBtn";
import Filter from "./Filter"

const ItemList = () => {
  const items = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    img: `https://picsum.photos/200/200?random=${index + 2}`,
    desc: `Mô tả cho phần tử ${index + 1}`,
    type: `Loại ${index % 5 + 1}`,
    comment: `Bình luận mẫu cho phần tử ${index + 1}`
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleFilter = (type) => {
    setFilterType(type === filterType ? "" : type);
  };

  const filteredItems = items.filter(
    (item) =>
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "" || item.type === filterType)
  );

  const listType = [...new Set(items.map(item => item.type))]

  return (
    <div className="container">
      <h1>Danh sách các phần tử</h1>
      {/* { Button search } */}
      <SearchBtn searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleSearch={handleSearch} />
      {/* {Filetr} */}
      <Filter listType = {listType} filterType= {filterType} handleFilter = {handleFilter} setFilterType = {setFilterType} />
      {/* Render giao diện ListProduct */}
      <div className="grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={`Hình ảnh ${item.id}`} width="100" />
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Mô tả:</strong> {item.desc}</p>
            <p><strong>Loại:</strong> {item.type}</p>
            <p><strong>Bình luận:</strong> {item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;