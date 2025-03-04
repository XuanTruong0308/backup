import React from 'react';
import './About.css';

/**
 * About Component
 * Hiển thị phần giới thiệu về TechKids
 * Bao gồm thông tin về tầm nhìn, sứ mệnh và các giá trị cốt lõi
 */
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Phần tiêu đề */}
        <div className="section-header">
          <h2 className="section-title">Về TechKids</h2>
          <p className="section-subtitle">
            Nơi ươm mầm tài năng công nghệ tương lai
          </p>
        </div>

        <div className="about-content">
          {/* Phần hình ảnh */}
          <div className="about-image">
            <img src="/assets/images/about-kids-coding.jpg" alt="Trẻ em học lập trình tại TechKids" />
          </div>

          {/* Phần nội dung chính */}
          <div className="about-text">
            <h3>Sứ mệnh của chúng tôi</h3>
            <p>
              TechKids ra đời với sứ mệnh mang đến cho trẻ em Việt Nam cơ hội tiếp cận 
              với giáo dục công nghệ hiện đại, giúp các em phát triển tư duy logic và 
              kỹ năng giải quyết vấn đề thông qua việc học lập trình.
            </p>

            {/* Các điểm nổi bật */}
            <div className="features">
              <div className="feature-item">
                <i className="fas fa-graduation-cap"></i>
                <h4>Giáo trình chuẩn quốc tế</h4>
                <p>Được thiết kế dựa trên các chương trình giảng dạy hàng đầu thế giới</p>
              </div>

              <div className="feature-item">
                <i className="fas fa-users"></i>
                <h4>Giảng viên tâm huyết</h4>
                <p>Đội ngũ giảng viên giàu kinh nghiệm và đam mê giảng dạy</p>
              </div>

              <div className="feature-item">
                <i className="fas fa-laptop-code"></i>
                <h4>Học qua dự án thực tế</h4>
                <p>Học viên được thực hành qua các dự án thực tế, phát triển kỹ năng toàn diện</p>
              </div>

              <div className="feature-item">
                <i className="fas fa-child"></i>
                <h4>Phương pháp phù hợp</h4>
                <p>Phương pháp giảng dạy tương tác, phù hợp với từng độ tuổi và năng lực</p>
              </div>
            </div>

            {/* Thông tin thêm */}
            <div className="about-cta">
              <p className="cta-text">
                Hãy để con bạn trở thành một phần của cộng đồng công nghệ tương lai
              </p>
              <button className="btn btn-primary">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 