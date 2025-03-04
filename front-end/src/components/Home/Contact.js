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
    name: '',           // Tên người liên hệ
    email: '',          // Email liên hệ
    phone: '',          // Số điện thoại
    message: ''         // Nội dung tin nhắn
  });

  // State để quản lý thông báo
  const [notification, setNotification] = useState({
    show: false,        // Hiển thị thông báo hay không
    type: '',           // Loại thông báo (success/error)
    message: ''         // Nội dung thông báo
  });

  // Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    const { name, value } = e.target;  // Lấy tên trường và giá trị
    setFormData(prev => ({
      ...prev,                         // Giữ nguyên các giá trị cũ
      [name]: value                    // Cập nhật giá trị mới
    }));
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();  // Ngăn chặn form submit mặc định

    // Kiểm tra các trường bắt buộc
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Vui lòng điền đầy đủ thông tin bắt buộc'
      });
      return;
    }

    // TODO: Gửi data lên server
    console.log('Form data:', formData);

    // Hiển thị thông báo thành công
    setNotification({
      show: true,
      type: 'success',
      message: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!'
    });

    // Reset form
    setFormData({
      name: '',
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
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Phần tiêu đề */}
        <div className="section-header">
          <h2 className="section-title">Liên Hệ</h2>
          <p className="section-subtitle">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất
          </p>
        </div>

        <div className="contact-content">
          {/* Phần thông tin liên hệ */}
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info-details">
                <h4>Địa chỉ</h4>
                <p>Ở đâu còn lâu mới nói</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div className="info-details">
                <h4>Điện thoại</h4>
                <p>0399 760 075</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="info-details">
                <h4>Email</h4>
                <p>xuantruong@techkids.edu.vn</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div className="info-details">
                <h4>Giờ làm việc</h4>
                <p>T2 - CN: 8:00 - 20:00</p>
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                <label htmlFor="message">Nội dung *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập nội dung tin nhắn"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Gửi tin nhắn
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
    </section>
  );
};

export default Contact; 