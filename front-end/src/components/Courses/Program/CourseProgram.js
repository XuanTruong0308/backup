import React, { useState } from 'react';
import './CourseProgram.css';

const CourseProgram = () => {
  // State quản lý tab active
  const [activeTab, setActiveTab] = useState('intro');

  // Dữ liệu mẫu chi tiết cho chương trình
  const programData = {
    // Tab 1: Giới thiệu chung
    intro: {
      title: "Giới thiệu chung",
      content: {
        description: "Chương trình đào tạo lập trình TechKids được thiết kế đặc biệt cho trẻ em từ 5-16 tuổi, tập trung vào việc phát triển tư duy logic và kỹ năng giải quyết vấn đề thông qua các bài học thực hành thú vị.",
        targetAudience: [
          "Trẻ em từ 5-7 tuổi: Khóa Scratch Jr - Làm quen với lập trình block",
          "Trẻ em từ 8-12 tuổi: Khóa Python cơ bản - Học lập trình text đầu tiên",
          "Trẻ em từ 13-16 tuổi: Khóa lập trình Web - Tạo website và ứng dụng"
        ],
        benefits: [
          "Phát triển tư duy logic và khả năng giải quyết vấn đề",
          "Rèn luyện tính kiên nhẫn và sáng tạo",
          "Tăng cường khả năng tập trung và tư duy hệ thống",
          "Xây dựng nền tảng vững chắc cho tương lai số",
          "Học thông qua các dự án thực tế thú vị",
          "Phát triển kỹ năng làm việc nhóm và thuyết trình"
        ]
      }
    },

    // Tab 2: Nội dung khóa học
    content: {
      title: "Nội dung khóa học",
      content: {
        chapters: [
          {
            title: "Phần 1: Nhập môn lập trình",
            lessons: [
              "Bài 1: Giới thiệu về tư duy lập trình",
              "Bài 2: Làm quen với công cụ lập trình",
              "Bài 3: Các khái niệm cơ bản trong lập trình",
              "Bài 4: Project mini - Game đầu tiên"
            ]
          },
          {
            title: "Phần 2: Kiến thức nền tảng",
            lessons: [
              "Bài 1: Biến và kiểu dữ liệu",
              "Bài 2: Cấu trúc điều khiển",
              "Bài 3: Vòng lặp và mảng",
              "Bài 4: Project - Ứng dụng đơn giản"
            ]
          },
          {
            title: "Phần 3: Lập trình nâng cao",
            lessons: [
              "Bài 1: Hàm và module",
              "Bài 2: Lập trình hướng đối tượng cơ bản",
              "Bài 3: Xử lý sự kiện",
              "Bài 4: Project cuối khóa"
            ]
          }
        ],
        format: [
          "Video bài giảng trực quan, sinh động",
          "Tài liệu học tập chi tiết",
          "Bài tập thực hành sau mỗi bài học",
          "Quiz kiểm tra kiến thức",
          "Project thực tế theo chủ đề",
          "Mentoring 1-1 với giảng viên"
        ],
        schedule: "12 tuần (2 buổi/tuần, 2 giờ/buổi) - Tổng 48 giờ học"
      }
    },

    // Tab 3: Kết quả đạt được
    results: {
      title: "Kết quả đạt được",
      content: {
        skills: [
          "Nắm vững kiến thức nền tảng về lập trình",
          "Thành thạo một ngôn ngữ lập trình phù hợp với độ tuổi",
          "Có khả năng tự học và phát triển thêm",
          "Biết cách phân tích và giải quyết vấn đề",
          "Tạo được các project thực tế đơn giản",
          "Phát triển tư duy logic và sáng tạo"
        ],
        certificate: "Chứng chỉ hoàn thành khóa học từ TechKids",
        applications: [
          "Tạo game và ứng dụng đơn giản",
          "Xây dựng website cơ bản",
          "Áp dụng tư duy lập trình vào học tập",
          "Nền tảng cho các khóa học nâng cao",
          "Định hướng nghề nghiệp trong lĩnh vực CNTT"
        ]
      }
    },

    // Tab 4: Giảng viên
    instructor: {
      title: "Đội ngũ giảng viên",
      content: {
        mainInstructor: {
          name: "ThS. Nguyễn Văn A",
          title: "Lead Instructor",
          experience: "10 năm kinh nghiệm giảng dạy",
          achievements: [
            "Thạc sĩ Công nghệ thông tin - Đại học ABC",
            "Chứng chỉ Google Certified Educator Level 2",
            "Chứng chỉ Microsoft Certified Educator",
            "Đào tạo hơn 1000 học viên các độ tuổi",
            "Tác giả của nhiều khóa học trực tuyến"
          ]
        },
        assistants: [
          {
            name: "Trần Thị B",
            title: "Teaching Assistant",
            experience: "5 năm kinh nghiệm",
            specialty: "Chuyên gia Python và Scratch"
          },
          {
            name: "Lê Văn C",
            title: "Teaching Assistant",
            experience: "3 năm kinh nghiệm",
            specialty: "Chuyên gia Web Development"
          }
        ]
      }
    },

    // Tab 5: Học phí & Ưu đãi
    pricing: {
      title: "Học phí & Ưu đãi",
      content: {
        regularPrice: "2,000,000-6,000,000 VNĐ/khóa",
        discounts: [
          "Giảm 20% khi đăng ký sớm (trước 30 ngày)",
          "Giảm 10% cho học viên cũ",
          "Giảm 5% khi đăng ký theo nhóm (từ 3 người)"
        ],
        policies: [
          "Học thử miễn phí 2 buổi đầu tiên",
          "Hoàn tiền 100% trong 7 ngày đầu nếu không hài lòng",
          "Hỗ trợ trả góp 0% lãi suất",
          "Tặng kèm tài liệu và công cụ học tập",
          "Tư vấn và hỗ trợ sau khóa học"
        ],
        included: [
          "48 giờ học trực tiếp",
          "Tài liệu học tập độc quyền",
          "Certificate hoàn thành khóa học",
          "Mentoring 1-1 với giảng viên",
          "Tham gia cộng đồng học viên"
        ]
      }
    }
  };

  return (
    <div className="course-program">
      <div className="container">
        <h1 className="program-title">Chương Trình Đào Tạo</h1>
        
        {/* Tab Navigation */}
        <div className="program-tabs">
          <button 
            className={`tab-btn ${activeTab === 'intro' ? 'active' : ''}`}
            onClick={() => setActiveTab('intro')}
          >
            Giới thiệu
          </button>
          <button 
            className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            Nội dung
          </button>
          <button 
            className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
            onClick={() => setActiveTab('results')}
          >
            Kết quả
          </button>
          <button 
            className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
            onClick={() => setActiveTab('instructor')}
          >
            Giảng viên
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pricing' ? 'active' : ''}`}
            onClick={() => setActiveTab('pricing')}
          >
            Học phí
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Giới thiệu */}
          {activeTab === 'intro' && (
            <div className="content-section">
              <h2>{programData.intro.title}</h2>
              <p>{programData.intro.content.description}</p>
              <h3>Đối tượng phù hợp:</h3>
              <ul>
                {programData.intro.content.targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h3>Lợi ích khi tham gia:</h3>
              <ul>
                {programData.intro.content.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Nội dung */}
          {activeTab === 'content' && (
            <div className="content-section">
              <h2>{programData.content.title}</h2>
              {programData.content.content.chapters.map((chapter, index) => (
                <div key={index} className="chapter">
                  <h3>{chapter.title}</h3>
                  <ul>
                    {chapter.lessons.map((lesson, i) => (
                      <li key={i}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <h3>Hình thức học:</h3>
              <ul>
                {programData.content.content.format.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p><strong>Lộ trình học:</strong> {programData.content.content.schedule}</p>
            </div>
          )}

          {/* Kết quả */}
          {activeTab === 'results' && (
            <div className="content-section">
              <h2>{programData.results.title}</h2>
              <h3>Kỹ năng đạt được:</h3>
              <ul>
                {programData.results.content.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h3>Chứng chỉ:</h3>
              <p>{programData.results.content.certificate}</p>
              <h3>Ứng dụng thực tế:</h3>
              <ul>
                {programData.results.content.applications.map((app, index) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Giảng viên */}
          {activeTab === 'instructor' && (
            <div className="content-section">
              <h2>{programData.instructor.title}</h2>
              <div className="main-instructor">
                <h3>{programData.instructor.content.mainInstructor.name}</h3>
                <p>{programData.instructor.content.mainInstructor.title}</p>
                <p>{programData.instructor.content.mainInstructor.experience}</p>
                <h4>Thành tựu:</h4>
                <ul>
                  {programData.instructor.content.mainInstructor.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <h3>Đội ngũ trợ giảng:</h3>
              {programData.instructor.content.assistants.map((assistant, index) => (
                <div key={index} className="assistant">
                  <h4>{assistant.name}</h4>
                  <p>{assistant.title}</p>
                  <p>{assistant.experience}</p>
                  <p>{assistant.specialty}</p>
                </div>
              ))}
            </div>
          )}

          {/* Học phí */}
          {activeTab === 'pricing' && (
            <div className="content-section">
              <h2>{programData.pricing.title}</h2>
              <h3>Học phí gốc:</h3>
              <p className="price">{programData.pricing.content.regularPrice}</p>
              <h3>Ưu đãi:</h3>
              <ul>
                {programData.pricing.content.discounts.map((discount, index) => (
                  <li key={index}>{discount}</li>
                ))}
              </ul>
              <h3>Chính sách học tập:</h3>
              <ul>
                {programData.pricing.content.policies.map((policy, index) => (
                  <li key={index}>{policy}</li>
                ))}
              </ul>
              <h3>Khóa học bao gồm:</h3>
              <ul>
                {programData.pricing.content.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;