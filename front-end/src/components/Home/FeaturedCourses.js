import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCourses.css';

/**
 * FeaturedCourses Component - Hiển thị các khóa học nổi bật
 * 
 * Chức năng:
 * - Hiển thị grid các khóa học nổi bật
 * - Mỗi khóa học có hình ảnh, tên, mô tả ngắn và giá
 * - Có nút đăng ký cho từng khóa học
 * - Responsive design với grid tự động điều chỉnh
 */

const FeaturedCourses = () => {
  // Data mẫu cho các khóa học
  const courses = [
    {
      id: 1,
      title: "Scratch Jr cho bé",
      description: "Khóa học lập trình căn bản dành cho trẻ từ 5-7 tuổi, giúp phát triển tư duy logic từ sớm",
      image: "../../assets/images/course-scratch.jpg",
      price: "2,500,000đ",
      duration: "8 tuần",
      level: "Cơ bản"
    },
    {
      id: 2,
      title: "Python cho thiếu nhi",
      description: "Làm quen với ngôn ngữ lập trình Python thông qua các project thú vị và game",
      image: "/assets/images/course-python.jpg",
      price: "3,500,000đ",
      duration: "12 tuần",
      level: "Trung bình"
    },
    {
      id: 3,
      title: "Thiết kế Web",
      description: "Học cách tạo website với HTML, CSS và JavaScript qua các dự án thực tế",
      image: "/assets/images/course-web.jpg",
      price: "4,000,000đ",
      duration: "16 tuần",
      level: "Nâng cao"
    }
  ];

  return (
    <section className="featured-courses">
      <div className="container">
        {/* Tiêu đề section */}
        <h2 className="section-title">Khóa Học Nổi Bật</h2>
        <p className="section-description">
          Khám phá các khóa học được thiết kế đặc biệt cho trẻ em, 
          giúp các em phát triển kỹ năng lập trình một cách thú vị và hiệu quả
        </p>

        {/* Grid khóa học */}
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div>
              </div>
              
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-details">
                  <div className="course-info">
                    <span><i className="fas fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-tag"></i> {course.price}</span>
                  </div>
                  
                  <Link to={`/course/${course.id}`} className="btn-details">
                    Chi tiết <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="courses-cta">
          <Link to="/courses" className="btn btn-primary">
            Xem Tất Cả Khóa Học
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
