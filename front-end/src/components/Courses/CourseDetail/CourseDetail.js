import React from 'react'; /* Import thư viện React */
import { useParams } from 'react-router-dom'; /* Import hook useParams để lấy tham số từ URL */
import styled from 'styled-components'; /* Import thư viện styled-components để tạo CSS trong JS */

/* Styled component cho phần bao bọc toàn bộ trang chi tiết */
const DetailSection = styled.section`
  padding: 80px 20px; /* Thêm khoảng cách lề trên/dưới 80px, trái/phải 20px */
  background-color: #f9f9f9; /* Đặt màu nền nhẹ nhàng cho section */
`;

/* Styled component tạo container giới hạn chiều rộng và căn giữa nội dung */
const Container = styled.div`
  max-width: 1200px; /* Giới hạn chiều rộng tối đa 1200px */
  margin: 0 auto; /* Căn giữa container */
`;

/* Styled component cho phần header của course */
const CourseHeader = styled.div`
  display: flex; /* Sử dụng flexbox để sắp xếp các phần tử con */
  flex-direction: row; /* Xếp các phần tử theo hàng ngang */
  gap: 40px; /* Tạo khoảng cách 40px giữa các phần tử con */
  margin-bottom: 40px; /* Tạo khoảng cách 40px phía dưới */
  
  @media (max-width: 1024px) { /* Media query cho màn hình nhỏ hơn 1024px */
    flex-direction: column; /* Chuyển sang xếp các phần tử theo cột dọc */
  }
`;

/* Styled component cho phần nội dung trong header */
const HeaderContent = styled.div`
  flex: 1; /* Chiếm hết không gian trống có sẵn */
  padding: 20px; /* Thêm khoảng cách đệm 20px xung quanh nội dung */
  background: white; /* Đặt màu nền trắng */
  border-radius: 10px; /* Bo tròn góc 10px */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Thêm đổ bóng để tạo độ sâu */
`;

/* Styled component cho tiêu đề khóa học */
const Title = styled.h1`
  font-size: 2.5rem; /* Kích thước chữ lớn 2.5rem */
  color: #333; /* Màu chữ tối */
  margin-bottom: 10px; /* Khoảng cách dưới 10px */
  
  @media (max-width: 768px) { /* Điều chỉnh cho màn hình điện thoại */
    font-size: 2rem; /* Giảm kích thước chữ xuống 2rem */
  }
`;

/* Styled component cho mô tả ngắn */
const Description = styled.p`
  font-size: 1.2rem; /* Kích thước chữ 1.2rem */
  color: #666; /* Màu chữ xám nhạt hơn */
  margin-bottom: 20px; /* Khoảng cách dưới 20px */
`;

/* Styled component cho container chứa các thông tin meta */
const MetaContainer = styled.div`
  display: flex; /* Sử dụng flexbox */
  gap: 30px; /* Khoảng cách 30px giữa các mục */
  
  @media (max-width: 768px) { /* Điều chỉnh cho màn hình điện thoại */
    flex-direction: column; /* Xếp thành cột */
    gap: 15px; /* Giảm khoảng cách xuống 15px */
  }
`;

/* Styled component cho từng mục thông tin meta */
const MetaItem = styled.div`
  display: flex; /* Sử dụng flexbox */
  align-items: center; /* Căn giữa theo chiều dọc */
  gap: 10px; /* Khoảng cách 10px giữa icon và text */
  color: #666; /* Màu chữ xám */
  
  i { /* Style cho thẻ i (icon) bên trong */
    color: #007bff; /* Màu xanh cho icon */
    font-size: 1.2rem; /* Kích thước icon 1.2rem */
  }
`;

/* Styled component cho container hình ảnh */
const ImageContainer = styled.div`
  border-radius: 10px; /* Bo tròn góc 10px */
  overflow: hidden; /* Ẩn phần bị tràn */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Thêm đổ bóng */
  
  img { /* Style cho thẻ img bên trong */
    width: 100%; /* Chiều rộng 100% */
    height: auto; /* Chiều cao tự động điều chỉnh */
    object-fit: cover; /* Cắt và căn chỉnh hình ảnh để phù hợp */
  }
`;

/* Styled component cho phần mô tả chi tiết */
const FullDescription = styled.div`
  background-color: white; /* Nền trắng */
  border-radius: 10px; /* Bo tròn góc 10px */
  padding: 30px; /* Đệm 30px xung quanh */
  margin: 30px 0; /* Lề trên và dưới 30px */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  line-height: 1.6; /* Khoảng cách dòng 1.6 */
`;

/* Styled component cho tiêu đề của phần mô tả */
const DescriptionTitle = styled.h2`
  font-size: 1.8rem; /* Kích thước chữ 1.8rem */
  color: #333; /* Màu chữ tối */
  margin-bottom: 20px; /* Khoảng cách dưới 20px */
  border-bottom: 2px solid #f0f0f0; /* Viền dưới mỏng */
  padding-bottom: 10px; /* Đệm dưới 10px */
`;

/* Styled component cho danh sách các mục mô tả */
const DescriptionList = styled.ul`
  list-style-type: none; /* Loại bỏ dấu đầu dòng mặc định */
  padding: 0; /* Loại bỏ padding mặc định */
  margin: 0; /* Loại bỏ margin mặc định */
`;

/* Styled component cho từng mục trong danh sách mô tả */
const DescriptionItem = styled.li`
  padding: 10px 0; /* Đệm trên dưới 10px */
  margin-bottom: 8px; /* Khoảng cách dưới 8px */
  display: flex; /* Sử dụng flexbox */
  align-items: flex-start; /* Căn đầu dòng */
  
  &:before { /* Pseudo-element để tạo dấu tick */
    content: '✓'; /* Thêm ký tự tick */
    color: #007bff; /* Màu xanh */
    font-weight: bold; /* In đậm */
    margin-right: 10px; /* Khoảng cách với nội dung 10px */
  }
`;

const CourseDetail = () => {
  const { id } = useParams(); /* Lấy id khóa học từ URL */

  /* Dữ liệu mẫu cho các khóa học (trong thực tế sẽ lấy từ API) */
  const courseData = {
    /* Thông tin chi tiết cho khóa học id=1 */
    1: {
      title: 'Scratch JR cho bé',
      description: 'Học Scratch JR để bắt đầu tạo ra các chương trình đơn giản và thú vị.',
      fullDescription: `
        Khóa học giúp bé:
        - Làm quen với khái niệm lập trình thông qua các trò chơi và hoạt động thú vị.
        - Phát triển tư duy logic và khả năng xử lý vấn đề.
        - Sử dụng Scratch JR để tạo ra các trò chơi của riêng mình.
        - Khám phá thế giới lập trình một cách thú vị.
        - Thực hành với nhiều dự án thực tế
      `,
      image: '/images/scratch-jr.jpg',
      level: 'Cơ bản',
      duration: '8 tuần',
      students: '100+',
      price: '2,500,000 VNĐ',
      schedule: 'Thứ 2-4-6 (19:30-21:30)',
      instructor: 'Nguyễn Văn A',
      skills: ['Scratch JR', 'Lập trình', 'Tư duy logic', 'Trò chơi']
    },
    2: {
      title: 'Python cho thiếu nhi',
      description: 'Học Python để bắt đầu tạo ra các chương trình đơn giản và thú vị.',
      fullDescription: `
        Khóa học giúp bé:
        - Làm quen với ngôn ngữ lập trình Python qua các project thú vị.
        - Phát triển tư duy logic và khả năng xử lý vấn đề.
        - Tạo cơ hội tham gia các cuộc thi STEM
        - Tăng khả năng tập trung và kiên nhẫn, chỉnh chu trong từng dòng code
        - Tạo điều kiện cho bé tiếp cận với lập trình một cách dễ dàng và thú vị
      `,
      image: '/images/python.jpg',
      level: 'Trung bình',
      duration: '12 tuần',
      students: '80+',
      price: '3,500,000 VNĐ',
      schedule: 'Thứ 3-5 (18:00-20:00)',
      instructor: 'Trần Văn B',
      skills: ['Python', 'Logic', 'Project Management']
    },
    3: {
      title: 'Lập trình Web cơ bản',
      description: 'Học HTML, CSS và JavaScript để xây dựng trang web đầu tiên của bạn.',
      fullDescription: `
        Khóa học giúp bé:
        - Làm quen với ngôn ngữ lập trình HTML, CSS và JavaScript
        - Tạo được trang web đầu tiên của bản thân
        - Tiềm năng phát triển sự sáng tạo trong giao diện, tư duy logic
        - Phát triển toàn diện từ thẩm mỹ, tư duy và cách nhận diện vấn đề
      `,
      image: '/images/web-dev.jpg',
      level: 'Trung bình',
      duration: '16 tuần',
      students: '80+',
      price: '4,000,000 VNĐ',
      schedule: 'Thứ 3-5 (18:00-20:00)',
      instructor: 'Trần Văn C',
      skills: ['HTML', 'CSS', 'JavaScript']
    }
  };

  const course = courseData[id]; /* Lấy thông tin khóa học dựa trên id */

  /* Kiểm tra nếu không tìm thấy khóa học */
  if (!course) {
    return <div className="error-message">Không tìm thấy khóa học</div>;
  }

  /* Hàm chuyển đổi fullDescription thành mảng các mục */
  const parseDescription = (description) => {
    // Tách thành từng dòng và loại bỏ dòng trống
    const lines = description.split('\n').filter(line => line.trim());
    
    // Loại bỏ dấu gạch đầu dòng và khoảng trắng thừa
    return lines.map(line => line.replace(/^-\s*/, '').trim()).filter(line => line);
  };

  return (
    <DetailSection> {/* Section bao bọc toàn bộ trang chi tiết */}
      <Container> {/* Container giới hạn chiều rộng */}
        <CourseHeader> {/* Phần header chứa thông tin cơ bản và hình ảnh */}
          <HeaderContent> {/* Phần nội dung bên trái */}
            <Title>{course.title}</Title> {/* Tiêu đề khóa học */}
            <Description>{course.description}</Description> {/* Mô tả ngắn */}
            <MetaContainer> {/* Container chứa các thông tin meta */}
              <MetaItem> {/* Thông tin về thời lượng */}
                <i className="far fa-clock"></i> {/* Icon đồng hồ */}
                <span>{course.duration}</span> {/* Hiển thị thời lượng */}
              </MetaItem>
              <MetaItem> {/* Thông tin về cấp độ */}
                <i className="fas fa-signal"></i> {/* Icon cấp độ */}
                <span>{course.level}</span> {/* Hiển thị cấp độ */}
              </MetaItem>
              <MetaItem> {/* Thông tin về số học viên */}
                <i className="fas fa-users"></i> {/* Icon người dùng */}
                <span>{course.students} học viên</span> {/* Hiển thị số học viên */}
              </MetaItem>
            </MetaContainer>
          </HeaderContent>
          <ImageContainer> {/* Container chứa hình ảnh */}
            <img src={course.image} alt={course.title} /> {/* Hình ảnh khóa học */}
          </ImageContainer>
        </CourseHeader>
        
        <FullDescription> {/* Container cho phần mô tả chi tiết */}
          <DescriptionTitle>Giới thiệu khóa học</DescriptionTitle> {/* Tiêu đề phần mô tả */}
          <DescriptionList> {/* Danh sách các mục mô tả */}
            {parseDescription(course.fullDescription).map((item, index) => (
              <DescriptionItem key={index}>{item}</DescriptionItem> /* Từng mục trong danh sách với key là index */
            ))}
          </DescriptionList>
        </FullDescription>
        
        {/* Có thể thêm các phần chi tiết khác của khóa học ở đây */}
      </Container>
    </DetailSection>
  );
};

export default CourseDetail; /* Export component để sử dụng ở nơi khác */