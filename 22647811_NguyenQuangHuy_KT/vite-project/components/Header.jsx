import "./style.css"
import imgLogo from "./img/logo.png"
function Header() {
    return (
      <header className="header">
        <div className="header-top">
          <div className="header-top-container">
            <div className="header-top-links">
              <a href="#">E-OFFICE</a>
              <a href="#">EMAIL</a>
              <a href="#">THƯ VIỆN - THÔNG TIN</a>
            </div>
            <div className="header-top-actions">
              <a href="#">KẾT NỐI | LIÊN HỆ</a>
              <div className="header-flags">
                <img src="https://flagcdn.com/16x12/vn.png" alt="VN Flag" />
                <img src="https://flagcdn.com/16x12/gb.png" alt="UK Flag" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="header-container">
            <div className="header-logo">
              <img 
                src={imgLogo}
                alt="IUH Logo"
              />
              <div>
                <h1>
                  BỘ CÔNG THƯƠNG - ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
                </h1>
                <p>
                  Đổi mới tư duy, luôn sáng tạo, đổi mới tri thức - đổi mới cuộc sống
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="header-nav">
          <div className="nav-container">
            <a href="#">GIỚI THIỆU</a>
            <a href="#">BÁO CÁO</a>
            <a href="#">TUYỂN SINH</a>
            <a href="#">NGHIÊN CỨU</a>
            <a href="#">SINH VIÊN</a>
            <a href="#">GIẢNG VIÊN</a>
            <a href="#">VĂN BẰNG</a>
            <div className="nav-search">
              <input type="text" placeholder="Tìm kiếm" />
              <button>Tìm</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;