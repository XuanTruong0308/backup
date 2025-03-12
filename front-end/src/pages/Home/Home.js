import React from 'react';
import './Home.css';

// Import các components con
import Hero from '../../components/Hero/Hero';
import Welcome from '../../components/Home/Welcome';
import ParentTestimonials from '../../components/Home/ParentTestimonials';
import FeaturedCourses from '../../components/Home/FeaturedCourses';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Banner chính */}
      <Hero />

      {/* Welcome Section - Chào mừng đến với TechKids */}
      <Welcome />

      {/* Parent Testimonials - Ý kiến phụ huynh */}
      <ParentTestimonials />

      {/* Featured Courses - Khóa học nổi bật */}
      <FeaturedCourses />

      {/* Contact Section - Liên hệ */}
    </div>
  );
};

export default Home; 