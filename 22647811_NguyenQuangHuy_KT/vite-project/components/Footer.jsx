import React from 'react';
import './Footer.css';
import logo from './img/logo.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="IUH Logo" className="footer-logo" />
        </div>
        <div className="footer-center">
          <p>Số lượt truy cập: 288,837,637</p>
          <p>Hôm nay: 23,933</p>
          <p>Đang xem: 63</p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <span>Chia sẻ</span>
            <a href="#" className="social-icon facebook">Facebook</a>
            <a href="#" className="social-icon twitter">Twitter</a>
            <a href="#" className="social-icon linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Bản quyền 2015 - Đại học Công Nghiệp Thành phố Hồ Chí Minh</p>
        <p>
          Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.
        </p>
      </div>
    </footer>
  );
}

export default Footer;