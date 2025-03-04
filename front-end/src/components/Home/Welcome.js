import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <h2 className="section-title">Chào Mừng Đến Với TechKids</h2>
          <p className="section-description">
            Nơi khơi dậy niềm đam mê công nghệ và phát triển tư duy sáng tạo cho thế hệ trẻ Việt Nam
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Học Thực Hành</h3>
              <p>Phương pháp "Learning by Doing" giúp các em nắm vững kiến thức qua thực hành</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Lớp Học Nhỏ</h3>
              <p>Tối đa 15 học viên/lớp để đảm bảo chất lượng giảng dạy tốt nhất</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-brain"></i>
              <h3>Phát Triển Tư Duy</h3>
              <p>Rèn luyện tư duy logic và khả năng giải quyết vấn đề</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-certificate"></i>
              <h3>Chứng Chỉ Quốc Tế</h3>
              <p>Cấp chứng chỉ được công nhận bởi các tổ chức giáo dục quốc tế</p>
            </div>
          </div>

          <div className="welcome-cta">
            <Link to="/courses" className="btn btn-primary">
              Khám Phá Khóa Học
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome; 