# Navbar Documentation

## Mục tiêu

- Cải thiện dropdown menu
- Căn chỉnh các items trên cùng một hàng
- Responsive design
- Thêm hiệu ứng mượt mà cho dropdown
- Tối ưu hiển thị trên mobile

## Thay đổi CSS

```css
/* Thanh điều hướng chính */
.navbar {
  background-color: white;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Container chứa nội dung navbar */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-logo img {
  height: 40px;
  width: auto;
}

/* Menu chính */
.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 70px;
}

/* Item trong menu */
.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 5px;
}

/* Link trong menu */
.nav-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
}

/* Icon trong link */
.nav-link i {
  margin-left: 5px;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

/* Hiệu ứng hover cho link */
.nav-link:hover {
  color: var(--primary-color);
}

/* Menu dropdown */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 220px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
}

/* Hiển thị dropdown khi hover */
.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Item trong dropdown */
.dropdown-menu li {
  list-style: none;
}

/* Link trong dropdown */
.dropdown-menu a {
  color: var(--text-color);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  white-space: nowrap;
}

/* Hiệu ứng hover cho link dropdown */
.dropdown-menu a:hover {
  background: rgba(0, 123, 255, 0.05);
  color: var(--primary-color);
  padding-left: 25px;
}

/* Nút trong navbar */
.nav-button {
  height: 40px;
  padding: 0 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 15px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
}

/* Hiệu ứng hover cho nút */
.nav-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Icon menu mobile */
.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Responsive cho mobile */
@media screen and (max-width: 960px) {
  .menu-icon {
    display: block;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
    height: auto;
    position: absolute;
    top: 70px;
    left: 0;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    z-index: 1002;
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-item {
    height: auto;
    width: 100%;
    margin: 0;
  }

  .nav-link {
    padding: 15px 20px;
    width: 100%;
    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    padding-left: 20px;
    display: none;
    background: #f8f9fa;
    border-radius: 0;
    width: 100%;
  }

  .nav-item:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu a {
    padding: 12px 30px;
  }

  .nav-button {
    margin: 15px 20px;
    width: calc(100% - 40px);
  }
}

/* Animation cho mobile menu */
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

/* Áp dụng animation cho từng item */
.nav-menu.active .nav-item {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}

/* Delay animation cho từng item */
.nav-menu.active .nav-item:nth-child(1) {
  animation-delay: 0.1s;
}
.nav-menu.active .nav-item:nth-child(2) {
  animation-delay: 0.2s;
}
.nav-menu.active .nav-item:nth-child(3) {
  animation-delay: 0.3s;
}
.nav-menu.active .nav-item:nth-child(4) {
  animation-delay: 0.4s;
}
.nav-menu.active .nav-item:nth-child(5) {
  animation-delay: 0.5s;
}
.nav-menu.active .nav-item:nth-child(6) {
  animation-delay: 0.6s;
}
.nav-menu.active .nav-item:nth-child(7) {
  animation-delay: 0.7s;
}
```

## Cấu trúc Component

```jsx
<nav className="navbar">
  <div className="navbar-container">
    {/* Logo sẽ link về trang chủ */}
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="TechKids Logo" />
    </Link>

    {/* Nút toggle cho mobile menu */}
    <div className="menu-icon" onClick={toggleMenu}>
      <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
    </div>

    {/* Menu items */}
    <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Trang chủ
        </Link>
      </li>

      <li className="nav-item dropdown">
        <span className="nav-link">
          Về Chúng Tôi <i className="fas fa-chevron-down"></i>
        </span>
        <ul className="dropdown-menu">
          <li>
            <Link to="/about/mission">Sứ Mệnh</Link>
          </li>
          <li>
            <Link to="/about/vision">Tầm Nhìn</Link>
          </li>
          <li>
            <Link to="/about/team">Đội Ngũ</Link>
          </li>
          <li>
            <Link to="/about/history">Lịch Sử Hình Thành</Link>
          </li>
        </ul>
      </li>

      {/* Các menu items khác tương tự */}

      <li className="nav-item">
        <button className="nav-button">Đăng ký học thử</button>
      </li>
    </ul>
  </div>
</nav>
```

## Notes

- Đã fix vấn đề dropdown menu
- Đã căn chỉnh items trên cùng một hàng
- Đã thêm responsive design cho mobile
- Đã thêm white-space: nowrap cho các text elements
- Đã cập nhật z-index để đảm bảo hiển thị đúng thứ tự
- Đã tối ưu animation và hiệu ứng hover

## Các thay đổi quan trọng

1. Thêm white-space: nowrap vào:

   - .nav-link
   - .dropdown-menu a
   - .nav-button

2. Cập nhật z-index:

   - navbar: 1000
   - dropdown-menu: 1001
   - mobile menu: 1002

3. Tối ưu responsive:
   - Menu collapse trên mobile
   - Dropdown menu dạng accordion
   - Animation mượt mà khi chuyển đổi

## Hướng dẫn sử dụng

1. Copy toàn bộ CSS vào file Navbar.css
2. Đảm bảo có đủ các class trong component
3. Kiểm tra responsive trên các kích thước màn hình
4. Test các hiệu ứng hover và animation
