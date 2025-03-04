import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './About.css';

const About = ({ section }) => {
  const navigate = useNavigate();

  // Nội dung cho từng section
  const sectionContent = {
    mission: {
      title: "Sứ Mệnh",
      content: "TechKids cam kết mang đến một môi trường học tập công nghệ hiện đại, sáng tạo và hiệu quả cho thế hệ trẻ Việt Nam. Chúng tôi tin rằng mỗi đứa trẻ đều có tiềm năng trở thành những nhà sáng tạo công nghệ trong tương lai.",
      image: "/assets/images/mission.jpg"
    },
    vision: {
      title: "Tầm Nhìn",
      content: "Trở thành trung tâm đào tạo lập trình hàng đầu cho trẻ em tại Việt Nam, nơi ươm mầm những tài năng công nghệ tương lai, góp phần xây dựng một thế hệ trẻ Việt Nam tự tin trong kỷ nguyên số.",
      image: "/assets/images/vision.jpg"
    },
    team: {
      title: "Đội Ngũ",
      content: "Đội ngũ giảng viên của TechKids là những chuyên gia trong lĩnh vực công nghệ, có kinh nghiệm giảng dạy và đam mê truyền đạt kiến thức cho thế hệ trẻ.",
      image: "/assets/images/team.jpg"
    },
    history: {
      title: "Lịch Sử Hình Thành",
      content: "TechKids được thành lập với mục tiêu mang đến một môi trường học tập công nghệ tiên tiến cho trẻ em Việt Nam. Trải qua nhiều năm phát triển, chúng tôi đã đào tạo hàng nghìn học viên nhí trở thành những người yêu thích và say mê công nghệ.",
      image: "/assets/images/history.jpg"
    }
  };

  // Lấy section hiện tại từ props hoặc URL
  const { section: urlSection } = useParams();
  const currentSection = urlSection || section || 'mission';
  const content = sectionContent[currentSection];

  return (
    <div className="about-page">
      {/* Navigation Tabs */}
      <div className="about-tabs">
        <button 
          className={currentSection === 'mission' ? 'active' : ''} 
          onClick={() => navigate('/about/mission')}
        >
          Sứ Mệnh
        </button>
        <button 
          className={currentSection === 'vision' ? 'active' : ''} 
          onClick={() => navigate('/about/vision')}
        >
          Tầm Nhìn
        </button>
        <button 
          className={currentSection === 'team' ? 'active' : ''} 
          onClick={() => navigate('/about/team')}
        >
          Đội Ngũ
        </button>
        <button 
          className={currentSection === 'history' ? 'active' : ''} 
          onClick={() => navigate('/about/history')}
        >
          Lịch Sử
        </button>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="content-text">
          <h1>{content.title}</h1>
          <p>{content.content}</p>
        </div>
        <div className="content-image">
          <img src={content.image} alt={content.title} />
        </div>
      </div>
    </div>
  );
};

export default About;
