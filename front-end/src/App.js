import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page Components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Programs from './pages/Programs/Programs';
import Resources from './pages/Resources/Resources';
import Recruitment from './pages/Recruitment/Recruitment';
import Privacy from './pages/Privacy/Privacy';
import Contact from './components/Home/Contact';

// Course Related Components
import CourseDetail from './components/Courses/CourseDetail';
import CourseOverview from './components/Courses/CourseOverview';
import CourseRegistration from './components/Courses/CourseRegistration';

// Program Related Components
import SpecialProgram from './components/Programs/SpecialProgram';
import Events from './components/Programs/Events';
import ProgramRegistration from './components/Programs/ProgramRegistration';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />

            {/* Course Routes */}
            <Route path="/courses/overview" element={<CourseOverview />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/courses/register" element={<CourseRegistration />} />

            {/* Program Routes */}
            <Route path="/programs/special" element={<SpecialProgram />} />
            <Route path="/programs/events" element={<Events />} />
            <Route path="/programs/register" element={<ProgramRegistration />} />

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
}

export default App; 