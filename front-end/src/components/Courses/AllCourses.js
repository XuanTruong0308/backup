import React from 'react';
import './AllCourses.css';

const AllCourses = () => {
  // Dữ liệu mẫu cho tất cả các khóa học
  const allCourses = [
    {
      id: 1,
      title: 'Lập trình Web cơ bản',
      description: 'Học HTML, CSS và JavaScript để xây dựng trang web đầu tiên của bạn.',
      image: '/images/web-dev.jpg',
      level: 'Cơ bản',
      duration: '3 tháng',
      students: '120+',
      price: '6,000,000 VNĐ'
    },
    {
      id: 2,
      title: 'Lập trình Python',
      description: 'Tìm hiểu về ngôn ngữ lập trình Python và ứng dụng trong AI, data science.',
      image: '/images/python.jpg',
      level: 'Trung bình',
      duration: '4 tháng',
      students: '90+',
      price: '8,000,000 VNĐ'
    },
    {
      id: 3,
      title: 'Phát triển ứng dụng Mobile',
      description: 'Học cách tạo ứng dụng di động cho Android và iOS với React Native.',
      image: '/images/mobile-dev.jpg',
      level: 'Nâng cao',
      duration: '6 tháng',
      students: '75+',
      price: '12,000,000 VNĐ'
    },
    {
      id: 4,
      title: 'Robotics và IoT',
      description: 'Khám phá thế giới robot và Internet of Things qua các dự án thực tế.',
      image: '/images/robotics.jpg',
      level: 'Nâng cao',
      duration: '5 tháng',
      students: '60+',
      price: '15,000,000 VNĐ'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Học thiết kế giao diện người dùng và trải nghiệm người dùng chuyên nghiệp.',
      image: '/images/uiux.jpg',
      level: 'Trung bình',
      duration: '4 tháng',
      students: '85+',
      price: '9,000,000 VNĐ'
    },
    {
      id: 6,
      title: 'Data Science',
      description: 'Phân tích dữ liệu và xây dựng mô hình Machine Learning với Python.',
      image: '/images/data-science.jpg',
      level: 'Nâng cao',
      duration: '6 tháng',
      students: '70+',
      price: '14,000,000 VNĐ'
    }
  ];

  return (
    <section className="all-courses-section">
      <div className="container">
        <h1 className="section-title">Tất Cả Khóa Học</h1>
        
        <div className="courses-filter">
          <select className="filter-select">
            <option value="">Tất cả cấp độ</option>
            <option value="basic">Cơ bản</option>
            <option value="intermediate">Trung bình</option>
            <option value="advanced">Nâng cao</option>
          </select>
          
          <select className="filter-select">
            <option value="">Sắp xếp theo</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
            <option value="popular">Phổ biến nhất</option>
          </select>
        </div>

        <div className="courses-grid">
          {allCourses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div>
              </div>
              
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-details">
                  <div className="detail-item">
                    <i className="far fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <span>{course.students} học viên</span>
                  </div>
                </div>
                
                <div className="course-footer">
                  <div className="course-price">{course.price}</div>
                  <button className="enroll-button">Đăng ký ngay</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses; 