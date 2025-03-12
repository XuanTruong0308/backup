import React, { useState } from 'react'; //Import React và useState
import './Contact.css';

// Mảng chứa thông tin liên hệ, dễ dàng thêm/sửa/xóa
const CONTACT_INFO = [
  {
    icon: 'map-marker-alt', //Icon địa chỉ
    title: 'Địa Chỉ',
    content: 'Ở đâu còn lâu mới nói'
  },
  {
    icon: 'phone-alt', //Icon điện thoại
    title: 'Điện Thoại', //Tiêu đề
    content: '0399 760 075' //Nội dung
  },
  {
    icon: 'envelope', //Icon email
    title: 'Email', //Tiêu đề
    content: 'xuantruong@techkids.edu.vn' //Nội dung
  },
  {
    icon: 'clock', //Icon giờ làm việc
    title: 'Giờ Làm Việc',
    content: 'T2 - CN: 8:00 - 20:00'
  }
];

// Mảng chứa thông tin mạng xã hội
const SOCIAL_LINKS = [
  { icon: 'facebook-f', url: 'https://facebook.com/techkids', class: 'facebook' },
  { icon: 'twitter', url: 'https://twitter.com/techkids', class: 'twitter' },
  { icon: 'instagram', url: 'https://instagram.com/techkids', class: 'instagram' },
  { icon: 'linkedin-in', url: 'https://linkedin.com/company/techkids', class: 'linkedin' }
];

const Contact = () => {
  // State management với giá trị khởi tạo rõ ràng
  const initialFormState = {
    fullName: '', // Tên người dùng
    email: '', //Email
    phone: '', //Số điện thoại
    message: ''  //// Nội dung tin nhắn
  };

  //State để quản lý dữ liệu form
  const [formData, setFormData] = useState(initialFormState);

  //State để quản lý thông báo
  const [notification, setNotification] = useState({
    show: false, //Hiển thị thông báo
    type: '', //Loại thông báo (success, error)
    message: '' //Nội dung thông báo
  });

  // Handlers
  const handleChange = (e) => { //Xử lý sự kiện thay đổi dữ liệu form
    const { name, value } = e.target; //Destructuring để lấy name và value từ event
    setFormData(prev => ({ ...prev, [name]: value })); //Cập nhật giá trị mới dựa trên name
  };

  const handleSubmit = (e) => { //Xử lý sự kiện submit form
    e.preventDefault(); //Ngăn chặn reload trang

    // Validation
    const requiredFields = ['fullName', 'email', 'message']; //Các trường bắt buộc
    const isValid = requiredFields.every(field => formData[field].trim()); //Kiểm tra xem các trường có được điền đầy đủ không

    if (!isValid) {
      showNotification('error', 'Vui lòng điền đầy đủ thông tin bắt buộc'); //Hiển thị thông báo lỗi nếu không điền đầy đủ
      return;
    }

    // Success case
    showNotification('success', 'Gửi thông tin thành công!'); //Hiển thị thông báo thành công
    setFormData(initialFormState); //Reset form dữ liệu về trạng thái ban đầu
  };

  // Helper function để hiển thị thông báo
  const showNotification = (type, message) => { //Hiển thị thông báo
    setNotification({ show: true, type, message }); //Cập nhật thông báo
    setTimeout(() => { //Ẩn thông báo sau 3 giây
      setNotification({ show: false, type: '', message: '' }); //Ẩn thông báo sau 3 giây
    }, 3000);
  };

  // Component con cho Info Item
  const InfoItem = ({ icon, title, content }) => (
    <div className="info-item">
      <div className="icon-circle">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="info-content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );

  // Component con cho Input Field
  const InputField = ({ type = 'text', name, label, required = false, ...props }) => (
    <div className="input-group"> 
      <input
        type={type} //Kiểu input
        name={name} //Tên input
        value={formData[name]} //Giá trị input
        onChange={handleChange} //Xử lý sự kiện thay đổi
        required={required} //Bắt buộc
        {...props} //Các prop khác
      />
      <label>{label}{required && ' *'}</label>  {/* Label */}
      <div className="input-line"></div>  {/* Đường gạch dưới */}
    </div>
  );

  return (
    <div className="contact-section">  {/* Container cho phần liên hệ */}
      {/* Header Section */}
      <div className="contact-header">
        <h1>Liên Hệ</h1>  {/* Tiêu đề */}
        <div className="header-line"></div>  {/* Đường gạch dưới */}
        <p>Hãy để lại thông tin, chúng tôi sẽ liên hệ lại với bạn sớm nhất</p>  {/* Nội dung */}
      </div>

      <div className="contact-container">  {/* Container cho phần liên hệ */}
        {/* Contact Info Section */}
        <div className="contact-info-section">
          <div className="info-card">
            <h3>Thông Tin Liên Hệ</h3>
            
            <div className="info-list">
              {CONTACT_INFO.map((info, index) => (
                <InfoItem key={index} {...info} />
              ))}
            </div>

            {/* Social Links với container riêng */}
            <div className="social-links">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className={`social-icon ${social.class}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <div className="form-card">
            <h3>Gửi Tin Nhắn</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <InputField
                  name="fullName"
                  label="Họ và Tên"
                  required
                />
                <InputField
                  type="email"
                  name="email"
                  label="Email"
                  required
                />
              </div>

              <InputField
                type="tel"
                name="phone"
                label="Số Điện Thoại"
              />

              <div className="input-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                />
                <label>Nội Dung Tin Nhắn *</label>
                <div className="input-line"></div>
              </div>

              <button type="submit" className="submit-btn">
                <span>Gửi Tin Nhắn</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>

            {notification.show && (
              <div className={`notification ${notification.type}`}>
                {notification.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;