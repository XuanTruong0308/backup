import React, { useEffect, useState } from 'react'; // Nhập React và các hook useEffect, useState
import './Robot.css'; // Nhập file CSS cho robot

const Robot = () => { // Khởi tạo component Robot
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Khởi tạo state để lưu vị trí của robot

  const handleMouseMove = (event) => { // Hàm xử lý sự kiện di chuyển chuột
    setPosition({ x: event.clientX, y: event.clientY }); // Cập nhật vị trí robot theo tọa độ chuột
  };

  useEffect(() => { // Hook để thực hiện các tác vụ bên ngoài
    window.addEventListener('mousemove', handleMouseMove); // Thêm sự kiện di chuyển chuột
    return () => { // Hàm dọn dẹp khi component bị hủy
      window.removeEventListener('mousemove', handleMouseMove); // Xóa sự kiện di chuyển chuột
    };
  }, []); // Mảng phụ thuộc rỗng, chỉ chạy một lần khi component được gắn

  return (
    <div className="robot" style={{ left: position.x, top: position.y }}> {/* Đặt vị trí robot theo tọa độ */}
      <img src="/path/to/robot.png" alt="" /> {/* Hình ảnh robot */}
    </div>
  );
};

export default Robot; // Xuất component Robot để sử dụng ở nơi khá