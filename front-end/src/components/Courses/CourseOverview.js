import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseOverview.css';

/**
 * CourseOverview Component - Hiển thị tổng quan về các khóa học
 * 
 * Chức năng:
 * - Hiển thị danh sách tất cả các khóa học
 * - Phân loại khóa học theo cấp độ và độ tuổi
 * - Cung cấp thông tin chi tiết về từng khóa học
 * - Cho phép lọc và tìm kiếm khóa học
 */

const CourseOverview = () => {
  // State cho bộ lọc
  const [activeLevel, setActiveLevel] = useState('Tất cả');
  const [activeAge, setActiveAge] = useState('Tất cả');

  // Data mẫu cho các khóa học
  const courses = [
    {
      id: 1,
      title: "Scratch Jr cho bé",
      description: "Khóa học lập trình căn bản dành cho trẻ từ 5-7 tuổi",
      image: "/assets/images/course-scratch.jpg",
      price: "2,500,000đ",
      duration: "8 tuần",
      level: "Cơ bản",
      ageRange: "5-7 tuổi",
      category: "Lập trình block"
    },
    {
      id: 2,
      title: "Python cho thiếu nhi",
      description: "Làm quen với ngôn ngữ lập trình Python qua các project thú vị",
      image: "/assets/images/course-python.jpg",
      price: "3,500,000đ",
      duration: "12 tuần",
      level: "Trung bình",
      ageRange: "8-12 tuổi",
      category: "Lập trình text"
    },
    {
      id: 3,
      title: "Thiết kế Web",
      description: "Học cách tạo website với HTML, CSS và JavaScript",
      image: "/assets/images/course-web.jpg",
      price: "4,000,000đ",
      duration: "16 tuần",
      level: "Nâng cao",
      ageRange: "13-16 tuổi",
      category: "Web Development"
    }
  ];

  // Xử lý click vào nút filter cấp độ
  const handleLevelFilter = (level) => {
    setActiveLevel(level);
  };

  // Xử lý click vào nút filter độ tuổi
  const handleAgeFilter = (age) => {
    setActiveAge(age);
  };

  // Lọc danh sách khóa học theo các filter đang active
  const filteredCourses = courses.filter(course => {
    const levelMatch = activeLevel === 'Tất cả' || course.level === activeLevel;
    const ageMatch = activeAge === 'Tất cả' || course.ageRange === activeAge;
    return levelMatch && ageMatch;
  });

  // Danh sách các cấp độ
  const levels = ['Tất cả', 'Cơ bản', 'Trung bình', 'Nâng cao'];
  
  // Danh sách các độ tuổi
  const ages = ['Tất cả', '5-7 tuổi', '8-12 tuổi', '13-16 tuổi'];

  return (
    <section className="course-overview">
      <div className="container">
        <h1 className="section-title">Tổng Quan Khóa Học</h1>
        <p className="section-description">
          Khám phá các khóa học được thiết kế đặc biệt cho từng độ tuổi và trình độ,
          giúp trẻ phát triển kỹ năng lập trình một cách toàn diện
        </p>

        {/* Bộ lọc khóa học */}
        <div className="course-filters">
          <div className="filter-group">
            <h3>Cấp độ</h3>
            <div className="filter-options">
              {levels.map(level => (
                <button
                  key={level}
                  className={`filter-btn ${activeLevel === level ? 'active' : ''}`}
                  onClick={() => handleLevelFilter(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Độ tuổi</h3>
            <div className="filter-options">
              {ages.map(age => (
                <button
                  key={age}
                  className={`filter-btn ${activeAge === age ? 'active' : ''}`}
                  onClick={() => handleAgeFilter(age)}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Danh sách khóa học */}
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div>
              </div>
              
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta">
                  <span><i className="fas fa-clock"></i> {course.duration}</span>
                  <span><i className="fas fa-user"></i> {course.ageRange}</span>
                  <span><i className="fas fa-tag"></i> {course.price}</span>
                </div>
                
                <Link to={`/course/${course.id}`} className="btn-details">
                  Xem chi tiết <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
