import React from 'react';
import { Link } from 'react-router-dom';
import './CourseOverview.css';

const CourseOverview = () => {
  return (
    <div className="course-overview">
      <div className="container">
        <h1 className="main-title">Tổng Quan Về Khóa Học</h1>

        {/* 1. Giới thiệu chung */}
        <section className="overview-section introduction">
          <h2>Giới thiệu chung</h2>
          <div className="content-box">
            <div className="intro-text">
              <p className="highlight-text">
                "Khám phá thế giới lập trình cùng TechKids - Nơi ươm mầm tài năng công nghệ tương lai"
              </p>
              <p>
                Chương trình đào tạo được thiết kế đặc biệt cho trẻ em từ 5-16 tuổi, 
                giúp các em phát triển tư duy logic và kỹ năng giải quyết vấn đề thông qua lập trình.
              </p>
            </div>

            <div className="target-groups">
              <h3>Đối tượng phù hợp:</h3>
              <ul>
                <li>
                  <span className="level">Người mới bắt đầu:</span> 
                  Các khóa học Scratch Jr, Code.org
                </li>
                <li>
                  <span className="level">Trình độ trung cấp:</span> 
                  Python cơ bản, Web Development
                </li>
                <li>
                  <span className="level">Nâng cao:</span> 
                  Lập trình game, Ứng dụng di động
                </li>
              </ul>
            </div>

            <div className="benefits">
              <h3>Lợi ích khi tham gia:</h3>
              <ul>
                <li>Phát triển tư duy logic và khả năng giải quyết vấn đề</li>
                <li>Tăng cường kỹ năng sáng tạo và làm việc nhóm</li>
                <li>Xây dựng nền tảng vững chắc cho tương lai công nghệ</li>
                <li>Học tập trong môi trường năng động, hiện đại</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Nội dung khóa học */}
        <section className="overview-section curriculum">
          <h2>Nội dung khóa học</h2>
          <div className="content-box">
            <div className="curriculum-structure">
              <h3>Cấu trúc chương trình:</h3>
              <div className="chapter-list">
                <div className="chapter">
                  <h4>Phần 1: Nền tảng</h4>
                  <p>Làm quen với môi trường lập trình, tư duy thuật toán</p>
                </div>
                <div className="chapter">
                  <h4>Phần 2: Thực hành</h4>
                  <p>Xây dựng các project thực tế, áp dụng kiến thức đã học</p>
                </div>
                <div className="chapter">
                  <h4>Phần 3: Nâng cao</h4>
                  <p>Phát triển project cá nhân, tối ưu hóa code</p>
                </div>
              </div>
            </div>

            <div className="learning-format">
              <h3>Định dạng học tập:</h3>
              <ul>
                <li><i className="fas fa-video"></i> Video bài giảng</li>
                <li><i className="fas fa-laptop-code"></i> Thực hành trực tiếp</li>
                <li><i className="fas fa-tasks"></i> Bài tập về nhà</li>
                <li><i className="fas fa-project-diagram"></i> Project thực tế</li>
              </ul>
            </div>

            <div className="schedule">
              <h3>Lộ trình học tập:</h3>
              <ul>
                <li>12-16 tuần/khóa học</li>
                <li>2-3 buổi/tuần</li>
                <li>2 giờ/buổi</li>
                <li>Lớp học tối đa 15 học viên</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Kết quả đạt được */}
        <section className="overview-section outcomes">
          <h2>Kết quả đạt được</h2>
          <div className="content-box">
            <div className="outcomes-grid">
              {/* Phần kỹ năng */}
              <div className="outcome-card skills">
                <div className="outcome-header">
                  <i className="fas fa-star"></i>
                  <h3>Sau khóa học, học viên sẽ:</h3>
                </div>
                <ul className="outcome-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Nắm vững kiến thức nền tảng về lập trình</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Có khả năng tự xây dựng project cá nhân</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Phát triển tư duy giải quyết vấn đề</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Tăng cường kỹ năng làm việc nhóm</span>
                  </li>
                </ul>
              </div>

              {/* Phần chứng chỉ */}
              <div className="outcome-card certification">
                <div className="outcome-header">
                  <i className="fas fa-certificate"></i>
                  <h3>Chứng chỉ:</h3>
                </div>
                <div className="cert-content">
                  <div className="cert-icon">
                    <img src="/path/to/cert-icon.png" alt="Certificate" />
                  </div>
                  <div className="cert-details">
                    <p className="cert-title">Chứng chỉ hoàn thành khóa học từ TechKids</p>
                    <p className="cert-recognition">Được công nhận bởi các đối tác giáo dục</p>
                    <ul className="cert-benefits">
                      <li>Chứng nhận kỹ năng chuyên môn</li>
                      <li>Có giá trị trong hồ sơ học tập</li>
                      <li>Được các đối tác tin tưởng</li>
                    </ul>
                  </div>
            </div>
          </div>

              {/* Phần ứng dụng thực tế */}
              <div className="outcome-card applications">
                <div className="outcome-header">
                  <i className="fas fa-laptop-code"></i>
                  <h3>Ứng dụng thực tế:</h3>
                </div>
                <div className="applications-grid">
                  <div className="application-item">
                    <i className="fas fa-gamepad"></i>
                    <h4>Game Development</h4>
                    <p>Tạo game và ứng dụng tương tác</p>
                  </div>
                  <div className="application-item">
                    <i className="fas fa-globe"></i>
                    <h4>Web Development</h4>
                    <p>Xây dựng website cá nhân</p>
                  </div>
                  <div className="application-item">
                    <i className="fas fa-project-diagram"></i>
                    <h4>Project Portfolio</h4>
                    <p>Phát triển project theo sở thích</p>
                  </div>
                  <div className="application-item">
                    <i className="fas fa-trophy"></i>
                    <h4>Competitive Programming</h4>
                    <p>Tham gia các cuộc thi lập trình</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Giảng viên */}
        <section className="overview-section instructors">
          <h2>Đội ngũ giảng viên</h2>
          <div className="content-box">
            <div className="instructor-profiles">
              <div className="instructor">
                <div className="instructor-info">
                  <h3>Giảng viên chính</h3>
                  <ul>
                    <li>5+ năm kinh nghiệm trong ngành công nghệ</li>
                    <li>Chứng chỉ sư phạm về giảng dạy CNTT</li>
                    <li>Đã đào tạo hơn 1000+ học viên</li>
                  </ul>
                </div>
              </div>
              <div className="instructor">
                <div className="instructor-info">
                  <h3>Trợ giảng</h3>
                  <ul>
                    <li>Hỗ trợ trực tiếp trong lớp học</li>
                    <li>Giải đáp thắc mắc ngoài giờ</li>
                    <li>Đánh giá và theo dõi tiến độ học viên</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        </section>

        {/* 5. Học phí & Ưu đãi */}
        <section className="overview-section pricing">
          <h2>Học phí & Ưu đãi</h2>
          <div className="content-box">
            <div className="pricing-plans">
              <div className="price-info">
                <h3>Học phí:</h3>
                <ul>
                  <li>Khóa cơ bản: 2,500,000đ - 3,500,000đ</li>
                  <li>Khóa nâng cao: 3,500,000đ - 4,500,000đ</li>
                  <li>Khóa chuyên sâu: 4,500,000đ - 6,000,000đ</li>
                </ul>
              </div>
              
              <div className="promotions">
                <h3>Ưu đãi đặc biệt:</h3>
                <ul>
                  <li>Giảm 10% khi đăng ký sớm</li>
                  <li>Giảm 15% khi đăng ký nhóm từ 3 người</li>
                  <li>Tặng khóa học online miễn phí</li>
                </ul>
              </div>

              <div className="policies">
                <h3>Chính sách:</h3>
                <ul>
                  <li>Học thử miễn phí 1 buổi</li>
                  <li>Hoàn tiền trong 7 ngày đầu</li>
                  <li>Hỗ trợ trả góp 0% lãi suất</li>
                </ul>
              </div>
                </div>
                
            <div className="cta-buttons">
              <Link to="/courses/register" className="btn-register">
                Đăng ký ngay
              </Link>
              <Link to="/contact" className="btn-contact">
                Tư vấn thêm
                </Link>
              </div>
            </div>
        </section>
        </div>
      </div>
  );
};

export default CourseOverview;