// Import các hooks và dependencies cần thiết
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  // Hook điều hướng trang
  const navigate = useNavigate();
  
  // State quản lý dữ liệu form đăng ký
  const [formData, setFormData] = useState({
    fullName: '',        // Tên học sinh
    email: '',          // Email đăng ký
    password: '',       // Mật khẩu
    confirmPassword: '', // Xác nhận mật khẩu
    dateOfBirth: '',    // Ngày sinh
    parentName: '',     // Tên phụ huynh
    parentPhone: '',    // SĐT phụ huynh
  });
  
  // State quản lý thông báo lỗi
  const [error, setError] = useState('');

  // Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    setFormData({
      ...formData,                    // Giữ lại các giá trị cũ
      [e.target.name]: e.target.value // Cập nhật giá trị mới
    });
  };

  // Hàm xử lý khi submit form
  const handleSubmit = async (e) => {
    e.preventDefault();  // Ngăn chặn form reload trang
    setError('');       // Reset thông báo lỗi

    // Kiểm tra mật khẩu xác nhận có khớp không
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    try {
      // Sau này sẽ gọi API đăng ký ở đây
      console.log('Đăng ký với:', formData);
      
      // Chuyển đến trang đăng nhập sau khi đăng ký thành công
      navigate('/login');
    } catch (err) {
      setError('Có lỗi xảy ra khi đăng ký');
    }
  };

  return (
    // Container chính của trang đăng ký
    <div className="register-container">
      {/* Box chứa form đăng ký */}
      <div className="register-box">
        <h2>Đăng ký tài khoản</h2>
        
        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Form đăng ký */}
        <form onSubmit={handleSubmit}>
          {/* Các trường thông tin học sinh */}
          <div className="form-group">
            <label htmlFor="fullName">Họ và tên học sinh</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Nhập họ và tên"
            />
          </div>

          {/* Trường ngày sinh */}
          <div className="form-group">
            <label htmlFor="dateOfBirth">Ngày sinh</label>
            <input
              type="date"  // Input kiểu date hiển thị date picker
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          {/* Các trường thông tin tài khoản */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Nhập email"
            />
          </div>

          {/* Trường mật khẩu */}
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Tạo mật khẩu"
            />
          </div>

          {/* Trường xác nhận mật khẩu */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Nhập lại mật khẩu"
            />
          </div>

          {/* Các trường thông tin phụ huynh */}
          <div className="form-group">
            <label htmlFor="parentName">Họ tên phụ huynh</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              placeholder="Nhập họ tên phụ huynh"
            />
          </div>

          <div className="form-group">
            <label htmlFor="parentPhone">Số điện thoại phụ huynh</label>
            <input
              type="tel"  // Input kiểu tel cho số điện thoại
              id="parentPhone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              required
              placeholder="Nhập số điện thoại"
            />
          </div>

          {/* Nút đăng ký */}
          <button type="submit" className="register-button">
            Đăng ký
          </button>
        </form>

        {/* Link đến trang đăng nhập */}
        <div className="auth-links">
          <p>
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;