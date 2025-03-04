import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link từ react-router-dom
import './Navbar.css';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo sẽ link về trang chủ */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TechKids Logo" />
        </Link>

        {/* Nút toggle cho mobile menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {/* Menu items */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Trang chủ
            </Link>
          </li>
          
          <li className="nav-item dropdown">
            <span className="nav-link">
              Về Chúng Tôi <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/about/mission">Sứ Mệnh</Link></li>
              <li><Link to="/about/vision">Tầm Nhìn</Link></li>
              <li><Link to="/about/team">Đội Ngũ</Link></li>
              <li><Link to="/about/history">Lịch Sử Hình Thành</Link></li>
            </ul>
          </li>
          
          <li className="nav-item dropdown">
            <span className="nav-link">
              Khóa Học <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/courses/overview">Tổng Quan Khóa Học</Link></li>
              <li><Link to="/courses">Chương Trình Học</Link></li>
              <li><Link to="/courses/register">Đăng Ký</Link></li>
            </ul>
          </li>
          
          <li className="nav-item dropdown">
            <span className="nav-link">
              Chương Trình <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/programs/special">Chương Trình Đặc Biệt</Link></li>
              <li><Link to="/programs/events">Sự Kiện</Link></li>
              <li><Link to="/programs/register">Đăng Ký Tham Gia</Link></li>
            </ul>
          </li>
          
          <li className="nav-item dropdown">
            <span className="nav-link">
              Tài Nguyên <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/resources/materials">Tài Liệu Học Tập</Link></li>
              <li><Link to="/resources/guides">Hướng Dẫn</Link></li>
              <li><Link to="/resources/links">Liên Kết Hữu Ích</Link></li>
            </ul>
          </li>
          
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Liên hệ
            </Link>
          </li>
          
          {/* Nút đăng ký */}
          <li className="nav-item">
            <button 
              className="nav-button"
              onClick={() => {
                setIsOpen(false);
                navigate('/courses/register');
              }}
            >
              Đăng ký học thử
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 