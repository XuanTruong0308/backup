# Lịch sử thay đổi ngày 10/03/2025
# 1. Documentation Thay Đổi

<!-- TOC -->
- [Lịch sử thay đổi ngày 10/03/2025](#lịch-sử-thay-đổi-ngày-10032025)
- [1. Documentation Thay Đổi](#1-documentation-thay-đổi)
  - [1.1. Course Program](#11-course-program)
    - [1.1.1. Cấu trúc thư mục](#111-cấu-trúc-thư-mục)
    - [1.1.2. CourseProgram.js](#112-courseprogramjs)
    - [1.1.3. CourseProgram.css](#113-courseprogramcss)
  - [1.2. Authentication](#12-authentication)
    - [1.2.1. Cấu trúc thư mục](#121-cấu-trúc-thư-mục)
    - [1.2.2. Login Component](#122-login-component)
    - [1.2.3. Register Component](#123-register-component)
    - [1.2.4. CSS Styling](#124-css-styling)
  - [1.3. Cập nhật Routes](#13-cập-nhật-routes)
<!-- /TOC -->

## 1.1. Course Program

### 1.1.1. Cấu trúc thư mục
```plaintext
src/
  └── components/
      └── Courses/
          └── Program/
              ├── CourseProgram.js
              └── CourseProgram.css
```

### 1.1.2. CourseProgram.js
```javascript
import React, { useState } from 'react';
import './CourseProgram.css';

const CourseProgram = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const programData = {
    intro: {
      title: "Giới thiệu chung",
      content: {
        description: "Chương trình đào tạo lập trình TechKids...",
        targetAudience: [
          "Trẻ em từ 5-7 tuổi: Khóa Scratch Jr...",
          // ... các đối tượng khác
        ],
        benefits: [
          "Phát triển tư duy logic và khả năng giải quyết vấn đề",
          // ... các lợi ích khác
        ]
      }
    },
    // ... các tab khác
  };

  return (
    // ... JSX code
  );
};

export default CourseProgram;
```

### 1.1.3. CourseProgram.css
```css
.course-program {
  padding: 40px 0;
  background-color: #f8f9fa;
}

.program-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

// ... các styles khác
```

## 1.2. Authentication

### 1.2.1. Cấu trúc thư mục
```plaintext
src/
  └── components/
      └── Auth/
          ├── Login.js
          ├── Login.css
          ├── Register.js
          └── Register.css
```

### 1.2.2. Login Component
```javascript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  // ... các hàm xử lý

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
        </form>
      </div>
    </div>
  );
};

export default Login;
```

### 1.2.3. Register Component
```javascript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    parentName: '',
    parentPhone: '',
  });
  const [error, setError] = useState('');

  // ... các hàm xử lý

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Đăng ký tài khoản</h2>
        {/* Form và các trường input */}
      </div>
    </div>
  );
};

export default Register;
```

### 1.2.4. CSS Styling

**Login.css**
```css
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

// ... các styles khác
```

**Register.css**
```css
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

// ... các styles khác
```

## 1.3. Cập nhật Routes

Trong `App.js`, thêm các routes mới:

```javascript
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CourseProgram from './components/Courses/Program/CourseProgram';

// Trong Routes component
<Routes>
  {/* Các routes hiện có */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/program" element={<CourseProgram />} />
</Routes>
```

---

**Lưu ý quan trọng:**
1. Đảm bảo cài đặt đầy đủ dependencies
2. Kiểm tra đường dẫn import chính xác
3. Cập nhật Navbar để thêm links tới các trang mới
4. Thêm validation và xử lý lỗi cho forms
5. Kết nối với backend API khi cần thiết