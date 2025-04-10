import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/Cart">Trang giỏ hàng</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;