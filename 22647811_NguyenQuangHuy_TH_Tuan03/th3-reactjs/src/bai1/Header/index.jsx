import React from "react";
import chefLogo from "../img/chefify.png";
import userAvatar from "../img/avatar.png";
import searchIcon from "../img/nothing.png"
import "./style.css";

function Header() {
	return (
		<>
			<header className="header">
				{/* Logo */}
				<div className="logo">
					<img src={chefLogo} alt="Chefify Logo" />
				</div>

				{/* Thanh tìm kiếm */}
				<div className="search-bar">
					<input type="text" placeholder="Search recipes..." />
                    <img src={searchIcon} class="search-icon"></img>
				</div>

				{/* Menu điều hướng */}
				<nav className="nav-links">
					<a href="#">What to cook</a>
					<a href="#">Recipes</a>
					<a href="#">Ingredients</a>
					<a href="#">Occasions</a>
					<a href="#">About Us</a>
				</nav>

				{/* Hộp Recipe và Avatar */}
				<div className="profile-section">
					<button className="recipe-box">Your Recipe Box</button>
                    <img src={searchIcon} class="search-icon"></img>
					<img className="avatar" src={userAvatar} alt="User Avatar" />
				</div>
			</header>
		</>
	)
}

export default Header;
