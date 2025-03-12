// Import các thư viện cần thiết
import React, { useState } from 'react';  // Import React và hook useState để quản lý state
import { useNavigate } from 'react-router-dom';  // Import hook điều hướng trang
import './CourseRegistration.css';  // Import file CSS

// Component đăng ký khóa học
const CourseRegistration = () => {
  // Hook điều hướng trang
  const navigate = useNavigate();

  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    fullName: '',    // Họ tên người đăng ký
    email: '',       // Email liên hệ
    phone: '',       // Số điện thoại
    courseId: '',    // ID khóa học đã chọn
    message: ''      // Ghi chú thêm
  });

  // State quản lý các lỗi validation
  const [errors, setErrors] = useState({});
  
  // State theo dõi trạng thái đang submit form
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hàm xử lý khi người dùng thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;  // Lấy tên trường và giá trị mới
    // Cập nhật state formData với giá trị mới
    setFormData(prevState => ({
      ...prevState,  // Giữ nguyên các giá trị cũ
      [name]: value  // Cập nhật giá trị mới cho trường đang thay đổi
    }));
    // Nếu trường đang thay đổi có lỗi, xóa lỗi đó
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  // Hàm kiểm tra tính hợp lệ của form
  const validateForm = () => {
    const newErrors = {};
    
    // Kiểm tra trường họ tên không được để trống
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Họ tên là bắt buộc';
    }

    // Kiểm tra email
    if (!formData.email.trim()) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {  // Kiểm tra định dạng email hợp lệ
      newErrors.email = 'Email không hợp lệ';
    }

    // Kiểm tra số điện thoại
    if (!formData.phone.trim()) {
      newErrors.phone = 'Số điện thoại là bắt buộc';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {  // Kiểm tra số điện thoại 10 chữ số
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    // Kiểm tra đã chọn khóa học chưa
    if (!formData.courseId.trim()) {
      newErrors.courseId = 'Vui lòng chọn khóa học';
    }

    return newErrors;
  };

  // Hàm xử lý khi submit form
  const handleSubmit = async (e) => {
    e.preventDefault();  // Ngăn chặn form submit mặc định của trình duyệt
    
    // Kiểm tra form trước khi submit
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {  // Nếu có lỗi
      setErrors(newErrors);  // Hiển thị lỗi
      return;  // Dừng việc submit
    }

    setIsSubmitting(true);  // Bật trạng thái đang xử lý

    try {
      // Gửi request đăng ký đến API
      const response = await fetch('/api/course-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Chuyển đổi dữ liệu form thành JSON
      });

      if (response.ok) {  // Nếu đăng ký thành công
        navigate('/registration-success');  // Chuyển đến trang thành công
      } else {  // Nếu có lỗi từ server
        const data = await response.json();
        setErrors({ submit: data.message || 'Có lỗi xảy ra khi đăng ký' });
      }
    } catch (error) {  // Xử lý lỗi kết nối
      setErrors({ submit: 'Không thể kết nối đến server' });
    } finally {
      setIsSubmitting(false);  // Tắt trạng thái đang xử lý
    }
  };

  // Render giao diện form đăng ký
  return (
    <div className="course-registration">
      <h2>Đăng Ký Khóa Học</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        {/* Trường nhập họ tên */}
        <div className="form-group">
          <label htmlFor="fullName">Họ và Tên *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? 'error' : ''}  // Thêm class error nếu có lỗi
          />
          {/* Hiển thị lỗi nếu có */}
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        {/* Trường nhập email */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Trường nhập số điện thoại */}
        <div className="form-group">
          <label htmlFor="phone">Số Điện Thoại *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Dropdown chọn khóa học */}
        <div className="form-group">
          <label htmlFor="courseId">Khóa Học *</label>
          <select
            id="courseId"
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className={errors.courseId ? 'error' : ''}
          >
            <option value="">Chọn khóa học</option>
            <option value="course1">Khóa học cơ bản</option>
            <option value="course2">Khóa học nâng cao</option>
            <option value="course3">Khóa học chuyên sâu</option>
          </select>
          {errors.courseId && <span className="error-message">{errors.courseId}</span>}
        </div>

        {/* Trường nhập ghi chú (không bắt buộc) */}
        <div className="form-group">
          <label htmlFor="message">Ghi chú</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        {/* Hiển thị lỗi chung nếu có */}
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        {/* Nút submit form */}
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}  // Disable nút khi đang xử lý
        >
          {isSubmitting ? 'Đang xử lý...' : 'Đăng Ký Ngay'}  {/* Thay đổi text tùy trạng thái */}
        </button>
      </form>
    </div>
  );
};

// Export component để sử dụng ở nơi khác
export default CourseRegistration;
