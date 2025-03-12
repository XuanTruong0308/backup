// Import các hooks cần thiết từ React và React Router
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  // Hook điều hướng trang
  const navigate = useNavigate();
  
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    email: '',     // Lưu giá trị email
    password: '',  // Lưu giá trị password
  });
  
  // State quản lý thông báo lỗi
  const [error, setError] = useState('');

  // Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    setFormData({
      ...formData,                    // Giữ lại các giá trị cũ
      [e.target.name]: e.target.value // Cập nhật giá trị mới theo name của input
    });
  };

  // Hàm xử lý khi submit form
  const handleSubmit = async (e) => {
    e.preventDefault();  // Ngăn chặn form reload trang
    setError('');       // Reset thông báo lỗi

    try {
      // Sau này sẽ gọi API đăng nhập ở đây
      console.log('Đăng nhập với:', formData);
      
      // Chuyển về trang chủ sau khi đăng nhập thành công
      navigate('/');
    } catch (err) {
      // Hiển thị thông báo lỗi nếu đăng nhập thất bại
      setError('Email hoặc mật khẩu không chính xác');
    }
  };

  return (
    // Container chính của trang đăng nhập
    <div className="login-container">
      {/* Box chứa form đăng nhập */}
      <div className="login-box">
        <h2>Đăng nhập</h2>
        
        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Form đăng nhập */}
        <form onSubmit={handleSubmit}>
          {/* Trường nhập email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"           // Kiểu input là email
              id="email"            // ID cho label
              name="email"          // Name để handleChange biết cập nhật state nào
              value={formData.email} // Giá trị từ state
              onChange={handleChange} // Hàm xử lý khi người dùng nhập
              required              // Bắt buộc phải nhập
              placeholder="Nhập email của bạn"
            />
          </div>

          {/* Trường nhập mật khẩu */}
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"        // Kiểu input là password (hiện ****)
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Nhập mật khẩu"
            />
          </div>

          {/* Nút đăng nhập */}
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>

        {/* Phần chứa các links phụ */}
        <div className="auth-links">
          {/* Link đến trang quên mật khẩu */}
          <Link to="/forgot-password">Quên mật khẩu?</Link>
          
          {/* Link đến trang đăng ký */}
          <p>
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;