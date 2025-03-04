import React from 'react';
import './StudentSection.css';

const StudentSection = () => {
  // Dữ liệu mẫu cho các khóa học
  const courses = [
    {
      id: 1,
      title: 'Lập trình Web cơ bản',
      description: 'Học HTML, CSS và JavaScript để xây dựng trang web đầu tiên của bạn.',
      image: '/images/web-dev.jpg',
      level: 'Cơ bản',
    },
    {
      id: 2,
      title: 'Lập trình Python',
      description: 'Tìm hiểu về ngôn ngữ lập trình Python và ứng dụng trong AI, data science.',
      image: '/images/python.jpg',
      level: 'Trung bình',
    },
    {
      id: 3,
      title: 'Phát triển ứng dụng Mobile',
      description: 'Học cách tạo ứng dụng di động cho Android và iOS với React Native.',
      image: '/images/mobile-dev.jpg',
      level: 'Nâng cao',
    },
    {
      id: 4,
      title: 'Robotics và IoT',
      description: 'Khám phá thế giới robot và Internet of Things qua các dự án thực tế.',
      image: '/images/robotics.jpg',
      level: 'Nâng cao',
    }
  ];

  return (
    <section className="student-section section" id="courses">
      <div className="container">
        <h2 className="section-title">Phân hệ tư Học viên</h2> {/* Tiêu đề phần */}
        
        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}> {/* Card hiển thị thông tin khóa học */}
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div> {/* Badge hiển thị cấp độ khóa học */}
              </div>
              
              <div className="course-content">
                <h3>{course.title}</h3> {/* Tiêu đề khóa học */}
                <p>{course.description}</p> {/* Mô tả khóa học */}
                
                <a href={`/course/${course.id}`} className="course-button">
                  Xem chi tiết
                </a> {/* Nút dẫn đến trang chi tiết khóa học */}
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more">
          <a href="/all-courses" className="btn">Xem tất cả khóa học</a> {/* Nút xem thêm khóa học */}
        </div>
      </div>
    </section>
  );
};

export default StudentSection; 