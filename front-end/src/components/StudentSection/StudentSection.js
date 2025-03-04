import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentSection.css';

const StudentSection = () => {
  const navigate = useNavigate();
  
  // Dữ liệu mẫu cho các khóa học nổi bật
  const courses = [
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
    }
  ];

  return (
    <section className="student-section section" id="courses">
      <div className="container">
        <h2 className="section-title">Khóa Học Nổi Bật</h2>
        <p className="section-description">
          Khám phá các khóa học chất lượng cao, được thiết kế bởi các chuyên gia hàng đầu
        </p>
        
        <div className="courses-grid">
          {courses.map(course => (
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
                  <button 
                    className="course-button"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more">
          <button 
            className="view-all-button"
            onClick={() => navigate('/courses')}
          >
            Xem tất cả khóa học
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentSection; 