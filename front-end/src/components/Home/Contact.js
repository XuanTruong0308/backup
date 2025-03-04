// Import các thư viện và hooks cần thiết
import React, { useState } from 'react';
import './Contact.css';

/**
 * Contact Component - Hiển thị form liên hệ và thông tin liên lạc
 * @returns {JSX.Element} Form liên hệ và thông tin
 */
const Contact = () => {
  // Khởi tạo state cho form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  // State để quản lý thông báo
  const [notification, setNotification] = useState({
    show: false,        // Hiển thị thông báo hay không
    type: '',           // Loại thông báo (success/error)
    message: ''         // Nội dung thông báo
  });

  // Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra các trường bắt buộc
    if (!formData.fullName || !formData.email || !formData.message) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Vui lòng điền đầy đủ thông tin bắt buộc'
      });
      return;
    }

    // TODO: Gửi data lên server
    console.log('Form submitted:', formData);

    // Hiển thị thông báo thành công
    setNotification({
      show: true,
      type: 'success',
      message: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!'
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });

    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Liên Hệ Với Chúng Tôi</h1>
      <p className="contact-subtitle">Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất</p>
      
      <div className="contact-content">
        {/* Phần thông tin liên hệ */}
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="info-details">
              <h3>Địa chỉ</h3>
              <p>Ở đâu còn lâu mới nói</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div className="info-details">
              <h3>Điện thoại</h3>
              <p>0399 760 075</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div className="info-details">
              <h3>Email</h3>
              <p>xuantruong@techkids.edu.vn</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div className="info-details">
              <h3>Giờ làm việc</h3>
              <p>T2 - CN: 8:00 - 20:00</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Họ và tên <span className="required">*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Nhập địa chỉ email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nội dung <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Nhập nội dung tin nhắn"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Gửi Tin Nhắn
            </button>
          </form>

          {/* Hiển thị thông báo */}
          {notification.show && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact; 