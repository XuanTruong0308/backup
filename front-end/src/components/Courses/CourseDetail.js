import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams(); // Lấy id từ URL

  // Dữ liệu mẫu cho khóa học (trong thực tế sẽ lấy từ API)
  const courseData = {
    1: {
      title: 'Lập trình Web cơ bản',
      description: 'Học HTML, CSS và JavaScript để xây dựng trang web đầu tiên của bạn.',
      fullDescription: `
        Khóa học này sẽ giúp bạn:
        - Hiểu về cách hoạt động của web
        - Thành thạo HTML5 và CSS3
        - Làm chủ JavaScript cơ bản
        - Xây dựng website responsive
        - Thực hành với nhiều dự án thực tế
      `,
      image: '/images/web-dev.jpg',
      level: 'Cơ bản',
      duration: '3 tháng',
      students: '120+',
      price: '6,000,000 VNĐ',
      schedule: 'Thứ 2-4-6 (19:30-21:30)',
      instructor: 'Nguyễn Văn A',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git']
    },
    // Thêm dữ liệu cho các khóa học khác...
  };

  const course = courseData[id];

  if (!course) {
    return <div className="error-message">Không tìm thấy khóa học</div>;
  }

  return (
    <section className="course-detail-section">
      <div className="container">
        <div className="course-header">
          <div className="course-header-content">
            <h1>{course.title}</h1>
            <p className="course-brief">{course.description}</p>
            <div className="course-meta">
              <div className="meta-item">
                <i className="far fa-clock"></i>
                <span>{course.duration}</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-signal"></i>
                <span>{course.level}</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-users"></i>
                <span>{course.students} học viên</span>
              </div>
            </div>
          </div>
          <div className="course-header-image">
            <img src={course.image} alt={course.title} />
          </div>
        </div>

        <div className="course-content-grid">
          <div className="course-main-content">
            <div className="content-section">
              <h2>Giới thiệu khóa học</h2>
              <p className="course-full-description">{course.fullDescription}</p>
            </div>

            <div className="content-section">
              <h2>Kỹ năng bạn sẽ học được</h2>
              <div className="skills-grid">
                {course.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className="fas fa-check"></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="course-card">
              <div className="price-section">
                <h3>Học phí</h3>
                <div className="price">{course.price}</div>
              </div>
              <div className="info-section">
                <div className="info-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Lịch học: {course.schedule}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-user-tie"></i>
                  <span>Giảng viên: {course.instructor}</span>
                </div>
              </div>
              <button className="enroll-button">Đăng ký ngay</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail; 