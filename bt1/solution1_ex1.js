/**
 * Bài tập 1: Sửa lỗi điều phối hàng đợi và tính toán doanh thu trạm sạc
 * Tên file: solution_ex1.js
 */

const fastChargingRate = 4500;
const waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'];

// SỬA LỖI 1: Dùng shift() để lấy phần tử đầu tiên theo đúng chuẩn FIFO
// Bổ sung kiểm tra mảng rỗng để thông báo rõ ràng
const nextVehicle = waitingQueue.length > 0 ? waitingQueue.shift() : 'Không có xe chờ';
console.log('Xe được điều phối vào sạc:', nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

// SỬA LỖI 2: Dùng i < completedSessionsKwh.length để tránh truy cập vượt biên (undefined)
for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}

// Xử lý làm tròn số thập phân tránh sai số dấu phẩy động trong JS
totalKwh = Math.round(totalKwh * 100) / 100;

const totalRevenue = totalKwh * fastChargingRate;
console.log('Tổng sản lượng:', totalKwh, 'kWh');
console.log('Tổng doanh thu:', totalRevenue, 'VNĐ');