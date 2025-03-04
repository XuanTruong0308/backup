// Hero.js
import React from 'react'; // Nhập React để sử dụng trong component
import './Hero.css'; // Nhập file CSS để áp dụng kiểu dáng cho component Hero
import Robot from '../Robot/Robot'; // Nhập component Robot từ thư mục Robot

/**
 * Hero Component - Component chính hiển thị ở đầu trang
 * 
 * Chức năng:
 * - Hiển thị banner chính của website
 * - Có background image với overlay
 * - Hiển thị thông điệp chào mừng và call-to-action buttons
 * - Responsive trên mọi kích thước màn hình
 */
const Hero = () => { // Khởi tạo component Hero
  return (
    <section className="hero" id="home"> {/* Phần hero với class là "hero" */}
      <div className="hero-container"> {/* Container cho nội dung hero */}
        <div className="hero-content"> {/* Nội dung chính của hero */}
          <h1>Khám Phá Thế Giới Lập Trình Cùng TechKids</h1> {/* Tiêu đề chính */}
          <p>
            Nơi các em được tiếp cận với công nghệ hiện đại và phát triển tư duy sáng tạo
            thông qua các khóa học lập trình thú vị và hấp dẫn
          </p> {/* Mô tả về các khóa học */}
          <div className="hero-cta"> {/* Container cho các nút CTA */}
            <Link to="/courses" className="btn btn-primary"> {/* Nút khám phá khóa học */}
              Khám Phá Khóa Học
            </Link>
            <Link to="/contact" className="btn btn-outline"> {/* Nút tư vấn miễn phí */}
              Tư Vấn Miễn Phí
            </Link>
          </div>
        </div>
      </div>
      <Robot /> {/* Thêm component Robot vào phần hero */}
    </section>
  );
};

export default Hero; // Xuất component Hero để sử dụng ở nơi khác