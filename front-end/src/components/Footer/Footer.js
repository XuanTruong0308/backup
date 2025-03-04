import React from 'react';
import './Footer.css';

const Footer = () => {
  // Lấy năm hiện tại cho copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <img src="../../images/logo.png" alt="TechKids Logo" />
                <span>TechKids</span>
              </div>
              <p>
                TechKids - Nơi ươm mầm các tài năng công nghệ tương lai của Việt Nam. 
                Chúng tôi cung cấp các khóa học chất lượng cao về lập trình và công nghệ cho thế hệ trẻ.
              </p> {/* Giới thiệu ngắn về TechKids */}
              
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div> {/* Liên kết đến các mạng xã hội */}
            </div>
            
            <div className="footer-links">
              <h3>Liên kết nhanh</h3>
              <ul>
                <li><a href="#home">Trang chủ</a></li>
                <li><a href="#courses">Khóa học</a></li>
                <li><a href="#schedule">Lịch học</a></li>
                <li><a href="#contact">Liên hệ</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul> {/* Menu footer */}
            </div>
            
            <div className="footer-courses">
              <h3>Khóa học</h3>
              <ul>
                <li><a href="/courses/web-development">Lập trình Web</a></li>
                <li><a href="/courses/mobile-development">Phát triển ứng dụng Mobile</a></li>
                <li><a href="/courses/python">Lập trình Python</a></li>
                <li><a href="/courses/ai-machine-learning">AI & Machine Learning</a></li>
                <li><a href="/courses/robotics">Robotics & IoT</a></li>
              </ul> {/* Danh sách khóa học */}
            </div>
            
            <div className="footer-newsletter">
              <h3>Đăng ký nhận tin</h3>
              <p>Nhận thông tin mới nhất về các khóa học và sự kiện của chúng tôi.</p>
              
              <form className="newsletter-form">
                <input type="email" placeholder="Nhập email của bạn" required />
                <button type="submit">Đăng ký</button>
              </form> {/* Form đăng ký nhận bản tin */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} TechKids. Tất cả các quyền được bảo lưu.</p> {/* Copyright */}
          <ul className="footer-bottom-links">
            <li><a href="/terms">Điều khoản sử dụng</a></li>
            <li><a href="/privacy">Chính sách bảo mật</a></li>
            <li><a href="/cookies">Chính sách Cookie</a></li>
          </ul> {/* Các liên kết chính sách */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 