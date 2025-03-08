import React from "react";
import "./ListProduct.css";

function SearchBtn({ searchTerm, handleSearchInput, handleSearch }) {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                value={searchTerm} 
                onChange={handleSearchInput}
            />
            <button onClick={handleSearch}>Tìm kiếm</button> 
        </div>
    );
}

export default SearchBtn;
