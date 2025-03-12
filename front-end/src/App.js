import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from '../../front-end/src/components/Footer/Footer'

// Page Components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Resources from './pages/Resources/Resources';
import Privacy from './pages/Privacy/Privacy';
import Contact from './components/Home/Contact';
import Sample from './components/Sample/Sample';

// Course Related Components
import CourseDetail from '../../front-end/src/components/Courses/CourseDetail/CourseDetail';
import CourseOverview from '../../front-end/src/components/Courses/Overview/CourseOverview';
import CourseRegistration from '../../front-end/src/components/Courses/Registration/CourseRegistration';
import AllCourses from '../../front-end/src/components/Courses/AllCourses/AllCourses';

// Program Related Components
import CourseProgram from '../../front-end/src/components/Courses/Program/CourseProgram'

// Login, Register Components
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/sample" element={<Sample />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />\
            <Route path= "/register" element={<Register />} />

            {/* Course Routes */}
            <Route path="/courses/overview" element={<CourseOverview />} />
            <Route path="/courses/all" element={<AllCourses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/courses/register" element={<CourseRegistration />} />

            {/* Program Routes */}
            <Route path="/program" element={<CourseProgram/>} />

            {/* About Sub-pages */}
            <Route path="/about/mission" element={<About section="mission" />} />
            <Route path="/about/vision" element={<About section="vision" />} />
            <Route path="/about/team" element={<About section="team" />} />
            <Route path="/about/history" element={<About section="history" />} />

            {/* Resources Sub-pages */}
            <Route path="/resources/materials" element={<Resources section="materials" />} />
            <Route path="/resources/guides" element={<Resources section="guides" />} />
            <Route path="/resources/links" element={<Resources section="links" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 