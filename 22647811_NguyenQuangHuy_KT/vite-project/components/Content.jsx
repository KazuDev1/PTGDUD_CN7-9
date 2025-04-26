import React from 'react';
import './Content.css';
import img1 from "./img/image1.png"
import img2 from "./img/image2.png"
import img3 from "./img/image3.png"

const Content = () => {
  return (
    <div className="content">
      <div className="sidebar">
        <h3>CƠ CẤU TỔ CHỨC</h3>
        <ul>
          <li>LÃNH ĐẠO</li>
          <li>CÁC PHÒNG BAN</li>
          <li>CÁC KHOA</li>
          <li>CÁC VIỆN</li>
          <li>CÁC TRUNG TÂM</li>
          <li>CÁC PHÂN HIỆU</li>
          <li>ĐOÀN THỂ</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="content-top">
          <div className="content-section">
            <h3>THÔNG BÁO <a href="#">xem tất cả</a></h3>
            <ul>
              <li>Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025 <span>24-04-2025</span> <span className="new">new</span></li>
              <li>Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội... <span>21-04-2025</span> <span className="new">new</span></li>
            </ul>
          </div>
          <div className="content-section">
            <h3>TUYỂN SINH <a href="#">xem tất cả</a></h3>
            <ul>
              <li>Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình... <span>28-03-2025</span></li>
              <li>Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025 <span>20-03-2025</span></li>
            </ul>
          </div>
          <div className="content-section">
            <h3>TIN TỨC - SỰ KIỆN <a href="#">xem tất cả</a></h3>
            <div className="image-text">
              <img src="https://via.placeholder.com/300x150" alt="Event" />
              <p>IUH bế mạc thành công đợt đánh giá chất lượng cấp trường theo tiêu chuẩn... <span>26-04-2025</span></p>
              <p>AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp... <span>25-04-2025</span></p>
            </div>
          </div>
          <div className="content-section">
            <h3>HỢP TÁC QUỐC TẾ <a href="#">xem tất cả</a></h3>
            <div className="image-text">
              <img src="https://via.placeholder.com/300x150" alt="International" />
              <p>Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc... <span>24-03-2025</span></p>
              <p>Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus <span>19-03-2025</span></p>
            </div>
          </div>
        </div>

        <div className="content-middle">
          <div className="middle-section">
            <h4>PHÂN HIỆU QUẢNG NGÃI</h4>
            <img src={img1} alt="Phân hiệu Quảng Ngãi" />
          </div>
          <div className="middle-section">
            <h4>CƠ SỞ THANH HÓA</h4>
            <img src={img2} alt="Cơ sở Thanh Hóa" />
          </div>
          <div className="middle-section">
            <h4>VIDEO VÀ HÌNH ẢNH <a href="#">xem tất cả</a></h4>
            <img src={img3} alt="Video" />
          </div>
        </div>

        <div className="content-bottom">
          <div className="bottom-section">
            <h5>LIÊN HỆ</h5>
            <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh<br />
            Điện thoại: 028 38940 390 - 100<br />
            Tuyển sinh: 028 3895 1392 - 028 3895 5858 - 028 3985 1917<br />
            Email: dhcn@iuh.edu.vn</p>
          </div>
          <div className="bottom-section">
            <h5>HOẠT ĐỘNG KHÁC</h5>
            <p>Hoạt động phục vụ cộng đồng<br />Sinh viên tình nguyện<br />CLB/Đội/Nhóm sinh viên<br />Kết nối doanh nghiệp</p>
          </div>
          <div className="bottom-section">
            <h5>THÔNG TIN MỞ RỘNG</h5>
            <p>Báo chí viết về IUH<br />Khám phá IUH<br />Kỹ năng mềm<br />Bộ sưu tập<br />Dịch vụ sinh viên</p>
          </div>
          <div className="bottom-section">
            <h5>VĂN BẢN TIỆN ÍCH</h5>
            <p>Quy chế - Quy định - Quy trình<br />Báo công khai<br />Biểu mẫu đào tạo<br />Quản lý khoa học<br />Phần mềm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
