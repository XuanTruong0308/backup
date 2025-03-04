import React, { useState } from 'react';
import './ContactSection.css';

/**
 * ContactSection Component - Form liên hệ nhanh
 * 
 * Chức năng:
 * - Hiển thị form liên hệ với các trường: tên, email, số điện thoại, tin nhắn
 * - Validate dữ liệu form
 * - Gửi thông tin liên hệ
 * - Hiển thị thông báo thành công/thất bại
 */

const ContactSection = () => {
  // State cho form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State cho thông báo
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Vui lòng điền đầy đủ thông tin'
      });
      return;
    }

    // TODO: Gửi data đến server
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

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Phần thông tin liên hệ */}
          <div className="contact-info">
            <h2 className="section-title">Liên Hệ Với Chúng Tôi</h2>
            <p className="section-description">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất để tư vấn về 
              khóa học phù hợp cho con của bạn
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Địa chỉ</h3>
                  <p>Ở đâu còn lâu mới nói</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Điện thoại</h3>
                  <p>0399 760 075</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>xuantruong@techkids.edu.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
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
                <label htmlFor="message">Tin nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập tin nhắn của bạn"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Gửi tin nhắn
              </button>
            </form>

            {/* Thông báo */}
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

export default ContactSection;
