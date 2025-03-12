import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

/**
 * Hero Component - Component chính hiển thị ở đầu trang
 * 
 * Chức năng:
 * - Hiển thị banner chính của website
 * - Có background image với overlay
 * - Hiển thị thông điệp chào mừng và call-to-action buttons
 * - Responsive trên mọi kích thước màn hình
 */
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Khám Phá Thế Giới Lập Trình Cùng TechKids</h1>
          <p>
            Nơi các em được tiếp cận với công nghệ hiện đại và phát triển tư duy sáng tạo
            thông qua các khóa học lập trình thú vị và hấp dẫn
          </p>
          <div className="hero-cta">
            <Link to="/courses" className="btn btn-primary">
              Khám Phá Khóa Học
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Tư Vấn Miễn Phí
            </Link>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="/front-end/src/assets/images/hero-bg.jpg" alt="" />
        </div>
      </div>
      
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> {/* SVG tạo hiệu ứng sóng ở cuối phần hero */}
      </div>
    </section>
  );
};

export default Hero; 