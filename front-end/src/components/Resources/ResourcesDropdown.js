import React from 'react';
import { Link } from 'react-router-dom';
import './ResourcesDropdown.css';

const ResourcesDropdown = () => {
  return (
    <div className="dropdown">
      <span className="dropdown-trigger">Tài nguyên ▼</span>
      <div className="dropdown-menu">
        <Link to="../Resources/Roadmap/Roadmap.js" className="dropdown-item">
          <i className="fas fa-map"></i>
          Lộ trình học tập
        </Link>
        <Link to="/resources/videos" className="dropdown-item">
          <i className="fas fa-play-circle"></i>
          Video học thử
        </Link>
        <Link to="../Resources/Materials/Materials.js" className="dropdown-item">
          <i className="fas fa-book"></i>
          Học liệu miễn phí
        </Link>
        <Link to="../Resources/Community/Community.js" className="dropdown-item">
          <i className="fas fa-users"></i>
          Cộng đồng học viên
        </Link>
      </div>
    </div>
  );
};

export default ResourcesDropdown;