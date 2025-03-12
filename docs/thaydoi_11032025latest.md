# Cập nhật ngày 11/03/2025

## 1. Thay đổi Navbar

### 1.1. Cấu trúc thư mục mới
```plaintext
src/
  └── components/
      └── Navbar/
          ├── Navbar.js
          ├── Navbar.css
          └── components/
              ├── ResourcesDropdown/
              │   ├── ResourcesDropdown.js
              │   └── ResourcesDropdown.css
              └── index.js
```

### 1.2. ResourcesDropdown Component
```javascript
// src/components/Navbar/components/ResourcesDropdown/ResourcesDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ResourcesDropdown.css';

const ResourcesDropdown = () => {
  const resourceItems = [
    { path: '/resources/materials', label: 'Học liệu miễn phí' },
    { path: '/resources/videos', label: 'Video học thử' },
    { path: '/resources/assessment', label: 'Bài test đánh giá' },
    { path: '/resources/roadmap', label: 'Lộ trình học tập' },
    { path: '/resources/community', label: 'Cộng đồng học viên' },
    { path: '/resources/tools', label: 'Công cụ hỗ trợ' }
  ];

  return (
    <li className="nav-item dropdown">
      <div className="nav-link">
        Tài nguyên ▼
        <ul className="dropdown-menu">
          {resourceItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="dropdown-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ResourcesDropdown;
```

### 1.3. CSS cho ResourcesDropdown
```css
/* src/components/Navbar/components/ResourcesDropdown/ResourcesDropdown.css */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 8px 0;
  margin-top: 5px;
  display: none;
  z-index: 1001;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: block;
  padding: 8px 16px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  color: #4070f4;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-menu {
  animation: fadeIn 0.2s ease-out;
}
```

### 1.4. Cập nhật Navbar.js
```javascript
// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import ResourcesDropdown from './components/ResourcesDropdown/ResourcesDropdown';

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
            <Link to="/program" className={`nav-link ${location.pathname.includes('/program') ? 'active' : ''}`}>
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
          <Link to="/register" className="auth-button register-button">
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

### 1.5. Cập nhật Navbar.css
```css
/* src/components/Navbar/Navbar.css */
/* ... CSS hiện tại ... */

.auth-buttons {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}

.auth-button {
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.login-button {
  color: white;
  border: 1px solid white;
}

.login-button:hover {
  background-color: white;
  color: #4070f4;
}

.register-button {
  background-color: white;
  color: #4070f4;
}

.register-button:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .auth-buttons {
    display: none;
  }
  
  .nav-menu.active .auth-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
}
```

## 2. Các thay đổi chính

1. Tạo cấu trúc thư mục riêng cho ResourcesDropdown
2. Thêm dropdown menu cho mục Tài nguyên
3. Cập nhật giao diện nút đăng nhập/đăng ký
4. Thêm responsive design cho mobile
5. Cải thiện animation và hiệu ứng hover

## 3. Hướng dẫn sử dụng

1. Tạo các thư mục và file theo cấu trúc đã nêu
2. Copy code vào các file tương ứng
3. Import ResourcesDropdown trong Navbar.js
4. Kiểm tra các đường dẫn import
5. Test responsive và các tính năng

## 4. Lưu ý

- Đảm bảo đã cài đặt react-icons
- Kiểm tra đường dẫn import chính xác
- Test kỹ phần responsive trên mobile
- Kiểm tra hoạt động của dropdown menu
