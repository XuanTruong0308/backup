import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import ResourcesDropdown from '../Resources/ResourcesDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TechKids
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname.includes('/about') ? 'active' : ''}`}>
              Giới thiệu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className={`nav-link ${location.pathname.includes('/courses') ? 'active' : ''}`}>
              Khóa học
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/program" className={`nav-link ${location.pathname.includes('/programs') ? 'active' : ''}`}>
              Chương trình
            </Link>
          </li>
          <ResourcesDropdown />
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Liên hệ
            </Link>
          </li>
        </ul>

        <div className="auth-buttons">
          <Link to="/login" className="auth-button login-button">
            Đăng nhập
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 