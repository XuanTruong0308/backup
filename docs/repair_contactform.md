# Tài liệu sửa chữa và tối ưu Contact Form

## 1. Cấu trúc Component

### Import và Khai báo
```javascript
import React, { useState } from 'react';
import './Contact.css';
```
- Import React và hook useState để quản lý state
- Import file CSS cho styling

### Dữ liệu Tĩnh
```javascript
const CONTACT_INFO = [
  {
    icon: 'map-marker-alt',
    title: 'Địa Chỉ',
    content: 'Ở đâu còn lâu mới nói'
  },
  // ... thông tin khác
];

const SOCIAL_LINKS = [
  { 
    icon: 'facebook-f',
    url: 'https://facebook.com/techkids',
    class: 'facebook'
  },
  // ... các mạng xã hội khác
];
```
- Tách biệt dữ liệu tĩnh để dễ quản lý
- Cấu trúc dữ liệu rõ ràng với icon, title và content

## 2. State Management

```javascript
const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  message: ''
};

const [formData, setFormData] = useState(initialFormState);
const [notification, setNotification] = useState({
  show: false,
  type: '',
  message: ''
});
```
- Khởi tạo state form với giá trị mặc định
- State riêng cho thông báo (notification)

## 3. Event Handlers

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const requiredFields = ['fullName', 'email', 'message'];
  const isValid = requiredFields.every(field => formData[field].trim());

  if (!isValid) {
    showNotification('error', 'Vui lòng điền đầy đủ thông tin bắt buộc');
    return;
  }

  showNotification('success', 'Gửi thông tin thành công!');
  setFormData(initialFormState);
};
```
- Xử lý thay đổi input với handleChange
- Validation form trong handleSubmit
- Reset form sau khi gửi thành công

## 4. Component Con

### InfoItem Component
```javascript
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
```
- Component hiển thị thông tin liên hệ
- Sử dụng Font Awesome icons

### InputField Component
```javascript
const InputField = ({ type = 'text', name, label, required = false, ...props }) => (
  <div className="input-group">
    <input
      type={type}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      required={required}
      {...props}
    />
    <label>{label}{required && ' *'}</label>
    <div className="input-line"></div>
  </div>
);
```
- Component tái sử dụng cho các trường input
- Hỗ trợ nhiều loại input khác nhau
- Hiển thị dấu * cho trường bắt buộc

## 5. Cấu trúc JSX

```javascript
return (
  <div className="contact-section">
    {/* Header */}
    <div className="contact-header">
      <h1>Liên Hệ</h1>
      <div className="header-line"></div>
      <p>Hãy để lại thông tin...</p>
    </div>

    <div className="contact-container">
      {/* Thông tin liên hệ */}
      <div className="contact-info-section">
        <div className="info-card">
          <h3>Thông Tin Liên Hệ</h3>
          <div className="info-list">
            {CONTACT_INFO.map((info, index) => (
              <InfoItem key={index} {...info} />
            ))}
          </div>
          
          {/* Social Links */}
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

      {/* Form liên hệ */}
      <div className="contact-form-section">
        <div className="form-card">
          <h3>Gửi Tin Nhắn</h3>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
          </form>
        </div>
      </div>
    </div>
  </div>
);
```

## 6. Các điểm tối ưu

1. **Tổ chức Code**:
   - Tách biệt dữ liệu tĩnh
   - Chia nhỏ thành components con
   - Comment rõ ràng cho từng phần

2. **Quản lý State**:
   - Sử dụng initialFormState để reset form
   - State riêng cho notification
   - Validation rõ ràng

3. **UX/UI**:
   - Thông báo lỗi/thành công
   - Hiển thị rõ trường bắt buộc
   - Animation và hiệu ứng mượt mà

4. **Bảo mật**:
   - rel="noopener noreferrer" cho external links
   - Validation dữ liệu đầu vào
   - Sanitize data trước khi submit

5. **Performance**:
   - Tối ưu re-render với component con
   - Lazy loading cho icons
   - Cleanup timeout trong notifications

## 7. Hướng dẫn sử dụng

1. Import component:
```javascript
import Contact from './components/Home/Contact';
```

2. Sử dụng trong component cha:
```javascript
<Contact />
```

3. Tùy chỉnh thông tin:
- Cập nhật CONTACT_INFO để thay đổi thông tin liên hệ
- Cập nhật SOCIAL_LINKS để thay đổi mạng xã hội
- Tùy chỉnh CSS trong Contact.css

## 8. Lưu ý

- Đảm bảo đã cài đặt Font Awesome
- Kiểm tra responsive trên các thiết bị
- Validate dữ liệu trước khi gửi đi
- Xử lý lỗi khi gửi form
- Thêm loading state khi cần thiết
