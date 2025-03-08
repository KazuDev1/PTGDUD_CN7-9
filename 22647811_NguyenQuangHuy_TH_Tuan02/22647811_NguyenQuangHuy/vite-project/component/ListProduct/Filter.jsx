import React from "react";
import "./ListProduct.css";

function Filter({ listType, handleFilter, setFilterType, filterType }) {
    console.log(listType)
	return (
		<>
			<div className="tab-buttons">
                {listType.map((type, index) => (
                    <button key={index} className={filterType === type ? "active" : ""} onClick={() => handleFilter(type)} >
                        {type}
                    </button>
                ))}
                <button className={filterType === "" ? "active" : ""} onClick={() => setFilterType("")}>
                    Tất cả
                </button>
		    </div>
		</>
	)
}

export default Filter;
