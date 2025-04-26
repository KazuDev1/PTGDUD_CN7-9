import React, { useState, useEffect } from 'react';
import './style.css';
import imgBanner1 from './img/Banner.png'; 
import imgBanner2 from './img/Banner1.png'; 
import imgBanner3 from './img/Banner2.png'; 

const Banner = () => {
  const banners = [
    { img: imgBanner1, title: 'TUYỂN SINH ĐỢT 1: THÁNG 10/2025', subtitle: 'ĐỢT 2: THÁNG 12/2025' },
    { img: imgBanner2, title: 'CHÀO MỪNG NĂM HỌC MỚI 2025', subtitle: 'CÙNG IUH VƯƠN TẦM THẾ GIỚI' },
    { img: imgBanner3, title: 'HỘI NGHỊ KHOA HỌC QUỐC TẾ 2025', subtitle: 'SỨC MẠNH AI TRONG GIÁO DỤC' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  // Handle manual slide navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="banner">
      <div className="banner-image">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={banner.img} alt={`Banner ${index + 1}`} />
            <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;