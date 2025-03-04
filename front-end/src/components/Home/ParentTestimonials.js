import React, { useState, useEffect } from 'react';
import './ParentTestimonials.css';

/**
 * ParentTestimonials Component - Hiển thị đánh giá của phụ huynh
 * 
 * Chức năng:
 * - Hiển thị slider các testimonial từ phụ huynh
 * - Tự động chuyển slide sau mỗi 5 giây
 * - Cho phép điều hướng thủ công (prev/next)
 * - Hiển thị dots navigation
 */

const ParentTestimonials = () => {
  // Data mẫu cho testimonials
  const testimonials = [
    {
      id: 1,
      name: "Trần Văn Minh",
      role: "Phụ huynh học sinh lớp Python",
      content: "TechKids đã giúp con tôi phát triển không chỉ kỹ năng lập trình mà còn tư duy logic và khả năng giải quyết vấn đề.",
      image: "/assets/images/parent1.jpg"
    },
    {
      id: 2,
      name: "Nguyễn Thu Hà",
      role: "Phụ huynh học sinh lớp Scratch",
      content: "Con tôi rất thích thú với cách học tại TechKids. Các giáo viên nhiệt tình và phương pháp giảng dạy rất phù hợp với trẻ.",
      image: "/assets/images/parent2.jpg"
    },
    {
      id: 3,
      name: "Lê Hoàng Nam",
      role: "Phụ huynh học sinh lớp Web",
      content: "Sau 3 tháng học tại TechKids, con tôi đã có thể tự tạo được website của riêng mình. Thật tuyệt vời!",
      image: "/assets/images/parent3.jpg"
    }
  ];

  // State cho current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Xử lý next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  // Xử lý previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Xử lý click vào dot
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Phụ Huynh Nói Gì Về TechKids?</h2>
        
        <div className="testimonials-slider">
          {/* Nút Previous */}
          <button className="slider-btn prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Testimonial Cards */}
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`
                }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-text">"{testimonial.content}"</div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nút Next */}
          <button className="slider-btn next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
