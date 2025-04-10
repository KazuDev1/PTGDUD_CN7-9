import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import ListProduct from "./ListProduct";

import "./style.css";

const Content = () => {
	const [selectedTypes, setSelectedTypes] = useState(["Grilled", "Roasted"]);
	const [timeRange, setTimeRange] = useState([30, 50]);
	const [selectedRatings, setSelectedRatings] = useState([1, 2, 3]);

	const types = ["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"];

	const handleTypeChange = (type) => {
		setSelectedTypes((prev) =>
			prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
		);
	};

	const handleRatingChange = (rating) => {
		setSelectedRatings((prev) =>
			prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
		);
	};

	return (
		<>
		<div className="filter-container">
		{/* Header */}
		<div className="filter-header">
			<AiOutlineMenu />
			<h3>Filters</h3>
		</div>

		{/* Type Filter */}
		<div className="filter-section">
			<h3>Type</h3>
			<div className="filter-grid">
				{types.map((type) => (
					<label key={type} className="filter-checkbox">
						<input
							type="checkbox"
							checked={selectedTypes.includes(type)}
							onChange={() => handleTypeChange(type)}
						/>
						<span>{type}</span>
					</label>
				))}
			</div>
		</div>

		{/* Time Filter */}
		<div className="filter-section">
			<h3>Time</h3>
			<div className="time-slider">
				<span>{timeRange[0]} min</span>
				<input
					type="range"
					min="0"
					max="100"
					value={timeRange[0]}
					onChange={(e) => setTimeRange([Number(e.target.value), timeRange[1]])}
				/>
				<input
					type="range"
					min="0"
					max="100"
					value={timeRange[1]}
					onChange={(e) => setTimeRange([timeRange[0], Number(e.target.value)])}
				/>
				<span>{timeRange[1]} min</span>
			</div>
		</div>

		{/* Rating Filter */}
		<div className="filter-section">
			<h3>Rating</h3>
			<div className="rating-list">
				{[5, 4, 3, 2, 1].map((stars) => (
					<label key={stars} className="rating-checkbox">
						<input
							type="checkbox"
							checked={selectedRatings.includes(stars)}
							onChange={() => handleRatingChange(stars)}
						/>
						<div className="stars">
							{Array.from({ length: 5 }, (_, i) => (
								<span key={i} className={i < stars ? "star-filled" : "star-empty"}>★</span>
							))}
						</div>
					</label>
				))}
			</div>
		</div>

		{/* Apply Button */}
		<button className="apply-button">Apply</button>
		</div>
		<div className='list-product'>
        <ListProduct />
		</div>
			</>
	);
};

export default Content;
