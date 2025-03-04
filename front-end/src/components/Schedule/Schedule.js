import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  // State để lưu tháng hiện tại
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Dữ liệu mẫu về các sự kiện lịch học
  const scheduleEvents = [
    {
      id: 1,
      title: 'Khai giảng khóa Web Development',
      date: new Date(2023, 3, 15),
      time: '09:00 - 11:30',
      location: 'Phòng 201, Tòa nhà Innovation',
    },
    {
      id: 2,
      title: 'Workshop JavaScript nâng cao',
      date: new Date(2023, 3, 18),
      time: '14:00 - 17:00',
      location: 'Phòng Lab 3, Khu Công nghệ',
    },
    {
      id: 3,
      title: 'Hackathon: AI Challenge',
      date: new Date(2023, 3, 25),
      time: '08:00 - 20:00',
      location: 'Không gian sáng tạo TechHub',
    },
    {
      id: 4,
      title: 'Buổi chia sẻ: Kinh nghiệm làm việc tại Google',
      date: new Date(2023, 4, 5),
      time: '18:30 - 20:30',
      location: 'Hội trường lớn',
    },
  ];

  // Hàm xử lý chuyển tháng
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Hàm lấy số ngày trong tháng
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Hàm lấy ngày đầu tiên của tháng
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Hàm kiểm tra xem ngày có sự kiện không
  const hasEvent = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    return scheduleEvents.some(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Hàm lấy sự kiện cho ngày cụ thể
  const getEventsForDay = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    return scheduleEvents.filter(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Tạo lịch
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    
    const monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", 
                         "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    
    const days = [];
    
    // Thêm ô trống cho ngày ở đầu tháng
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Thêm các ngày trong tháng
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEventClass = hasEvent(day) ? 'has-event' : '';
      const isToday = new Date().getDate() === day && 
                      new Date().getMonth() === currentMonth && 
                      new Date().getFullYear() === currentYear ? 'today' : '';
      
      days.push(
        <div key={day} className={`calendar-day ${hasEventClass} ${isToday}`}>
          <span className="day-number">{day}</span>
          {hasEvent(day) && <div className="event-indicator"></div>}
        </div>
      );
    }
    
    return (
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth} className="month-nav">
            <i className="fas fa-chevron-left"></i>
          </button>
          <h3>{monthNames[currentMonth]} {currentYear}</h3>
          <button onClick={handleNextMonth} className="month-nav">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="weekdays">
          <div>CN</div>
          <div>T2</div>
          <div>T3</div>
          <div>T4</div>
          <div>T5</div>
          <div>T6</div>
          <div>T7</div>
        </div>
        
        <div className="calendar-days">
          {days}
        </div>
      </div>
    );
  };

  // Hiển thị danh sách sự kiện
  const renderEvents = () => {
    // Lọc các sự kiện trong tháng hiện tại
    const eventsThisMonth = scheduleEvents.filter(event => 
      event.date.getMonth() === currentMonth && 
      event.date.getFullYear() === currentYear
    );
    
    if (eventsThisMonth.length === 0) {
      return <p className="no-events">Không có sự kiện nào trong tháng này</p>;
    }
    
    return (
      <div className="event-list">
        <h3>Sự kiện sắp diễn ra</h3>
        {eventsThisMonth.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-date">
              <span className="event-day">{event.date.getDate()}</span>
              <span className="event-month">{event.date.toLocaleString('vi', { month: 'short' })}</span>
            </div>
            <div className="event-details">
              <h4>{event.title}</h4>
              <p><i className="far fa-clock"></i> {event.time}</p>
              <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="schedule-section section" id="schedule">
      <div className="container">
        <h2 className="section-title">Lịch Học</h2> {/* Tiêu đề phần */}
        
        <div className="schedule-container">
          <div className="calendar-container">
            {renderCalendar()} {/* Hiển thị lịch */}
          </div>
          
          <div className="events-container">
            {renderEvents()} {/* Hiển thị danh sách sự kiện */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 