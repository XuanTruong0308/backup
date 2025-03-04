import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

/**
 * Component Courses - Hiển thị trang danh sách khóa học
 * Cho phép người dùng xem, tìm kiếm và lọc các khóa học theo cấp độ và độ tuổi
 */
const Courses = () => {
  // Khởi tạo các state để quản lý bộ lọc và tìm kiếm
  const [activeLevel, setActiveLevel] = useState('Tất cả'); // State lưu cấp độ được chọn
  const [activeAge, setActiveAge] = useState('Tất cả'); // State lưu độ tuổi được chọn
  const [searchQuery, setSearchQuery] = useState(''); // State lưu từ khóa tìm kiếm

  // Dữ liệu mẫu cho danh sách khóa học
  const courses = [
    {
      id: 1,
      title: "Scratch Jr cho bé",
      description: "Khóa học lập trình căn bản dành cho trẻ từ 5-7 tuổi, giúp phát triển tư duy logic từ sớm",
      image: "/assets/images/course-scratch.jpg",
      price: "2,500,000đ",
      duration: "8 tuần",
      level: "Cơ bản",
      ageRange: "5-7 tuổi",
      category: "Lập trình block",
      schedule: "Thứ 7, Chủ nhật",
      startDate: "15/03/2024"
    },
    {
      id: 2,
      title: "Python cho thiếu nhi",
      description: "Làm quen với ngôn ngữ lập trình Python thông qua các project thú vị và game",
      image: "/assets/images/course-python.jpg",
      price: "3,500,000đ",
      duration: "12 tuần",
      level: "Trung bình",
      ageRange: "8-12 tuổi",
      category: "Lập trình text",
      schedule: "Thứ 7, Chủ nhật",
      startDate: "20/03/2024"
    },
    {
      id: 3,
      title: "Thiết kế Web",
      description: "Học cách tạo website với HTML, CSS và JavaScript qua các dự án thực tế",
      image: "/assets/images/course-web.jpg",
      price: "4,000,000đ",
      duration: "16 tuần",
      level: "Nâng cao",
      ageRange: "13-16 tuổi",
      category: "Web Development",
      schedule: "Thứ 7, Chủ nhật",
      startDate: "25/03/2024"
    },
    {
      id: 4,
      title: "Lập trình Game với Unity",
      description: "Khám phá thế giới game development và tạo game 2D của riêng mình",
      image: "/assets/images/course-unity.jpg",
      price: "4,500,000đ",
      duration: "16 tuần",
      level: "Nâng cao",
      ageRange: "13-16 tuổi",
      category: "Game Development",
      schedule: "Thứ 7, Chủ nhật",
      startDate: "01/04/2024"
    }
  ];

  // Danh sách các tùy chọn cho bộ lọc
  const levels = ['Tất cả', 'Cơ bản', 'Trung bình', 'Nâng cao']; // Các cấp độ khóa học
  const ages = ['Tất cả', '5-7 tuổi', '8-12 tuổi', '13-16 tuổi']; // Các độ tuổi

  /**
   * Lọc danh sách khóa học dựa trên các tiêu chí:
   * - Cấp độ đã chọn
   * - Độ tuổi đã chọn
   * - Từ khóa tìm kiếm (tìm trong tiêu đề và mô tả)
   */
  const filteredCourses = courses.filter(course => {
    const levelMatch = activeLevel === 'Tất cả' || course.level === activeLevel;
    const ageMatch = activeAge === 'Tất cả' || course.ageRange === activeAge;
    const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return levelMatch && ageMatch && searchMatch;
  });

  return (
    <div className="courses-page">
      {/* Phần header của trang */}
      <div className="courses-header">
        <div className="container">
          <h1 className="page-title">Khóa Học</h1>
          <p className="page-description">
            Khám phá các khóa học lập trình được thiết kế đặc biệt cho trẻ em từ 5-16 tuổi
          </p>
        </div>
      </div>

      <div className="courses-content">
        <div className="container">
          {/* Thanh tìm kiếm - cho phép người dùng tìm khóa học theo từ khóa */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>

          {/* Phần bộ lọc - cho phép lọc theo cấp độ và độ tuổi */}
          <div className="filters">
            {/* Bộ lọc cấp độ */}
            <div className="filter-group">
              <h3>Cấp độ</h3>
              <div className="filter-options">
                {levels.map(level => (
                  <button
                    key={level}
                    className={`filter-btn ${activeLevel === level ? 'active' : ''}`}
                    onClick={() => setActiveLevel(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Bộ lọc độ tuổi */}
            <div className="filter-group">
              <h3>Độ tuổi</h3>
              <div className="filter-options">
                {ages.map(age => (
                  <button
                    key={age}
                    className={`filter-btn ${activeAge === age ? 'active' : ''}`}
                    onClick={() => setActiveAge(age)}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid hiển thị danh sách khóa học */}
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                {/* Phần hình ảnh và level của khóa học */}
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-level">{course.level}</div>
                </div>
                
                {/* Phần nội dung chi tiết của khóa học */}
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  {/* Hiển thị các thông tin chi tiết của khóa học */}
                  <div className="course-details">
                    <div className="detail-item">
                      <i className="fas fa-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-user"></i>
                      <span>{course.ageRange}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-calendar"></i>
                      <span>{course.schedule}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-tag"></i>
                      <span>{course.price}</span>
                    </div>
                  </div>

                  {/* Các nút hành động cho khóa học */}
                  <div className="course-actions">
                    <Link to={`/course/${course.id}`} className="btn btn-outline">
                      Xem chi tiết
                    </Link>
                    <Link to={`/courses/register?course=${course.id}`} className="btn btn-primary">
                      Đăng ký ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hiển thị thông báo khi không tìm thấy khóa học nào */}
          {filteredCourses.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>Không tìm thấy khóa học phù hợp với tiêu chí tìm kiếm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
