import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

/**
 * Hero Component - Component chính hiển thị phần banner đầu trang
 * @returns {JSX.Element} - Trả về phần tử JSX hiển thị hero section
 */
const Hero = () => {
  return (
    // section là container ngoài cùng của hero, có background và chiều cao full màn hình
    <section className="hero-section">
      {/* div overlay tạo lớp phủ gradient lên background */}
      <div className="hero-overlay">
        {/* container giới hạn chiều rộng nội dung và căn giữa */}
        <div className="container">
          {/* hero-content chứa tất cả nội dung chính của hero section */}
          <div className="hero-content">
            {/* Tiêu đề chính của hero section */}
            <h1 className="hero-title">
              {/* Dòng text đầu tiên của tiêu đề */}
              Khám Phá Thế Giới Lập Trình 
              {/* Dòng text thứ hai được highlight với màu khác */}
              <span className="highlight">Cùng TechKids</span>
            </h1>
            
            {/* Đoạn mô tả ngắn giới thiệu về chương trình học */}
            <p className="hero-description">
              Chương trình học được thiết kế đặc biệt cho trẻ em từ 5-16 tuổi, 
              giúp các em phát triển tư duy logic và sáng tạo thông qua lập trình
            </p>

            {/* Phần chứa các nút call-to-action */}
            <div className="hero-buttons">
              {/* Nút chính dẫn đến trang khóa học */}
              <Link to="/courses" className="btn btn-primary">
                Xem Khóa Học
              </Link>
              {/* Nút phụ dẫn đến trang liên hệ */}
              <Link to="/contact" className="btn btn-outline">
                Tư Vấn Miễn Phí
              </Link>
            </div>

            {/* Phần hiển thị các số liệu thống kê */}
            <div className="hero-stats">
              {/* Thống kê số học viên */}
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Học viên</span>
              </div>
              {/* Thống kê số khóa học */}
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Khóa học</span>
              </div>
              {/* Thống kê tỷ lệ hài lòng */}
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Hài lòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export component để có thể import và sử dụng ở nơi khác
export default Hero; 