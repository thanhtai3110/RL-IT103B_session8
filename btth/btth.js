/**
 * BÀI TẬP TỔNG HỢP: QUẢN TRỊ MẢNG ĐIỀU PHỐI TRẠM SẠC TOÀN TRÌNH
 * File: demo_session07.js
 */

console.log("==================================================");
console.log("   HỆ THỐNG ĐIỀU PHỐI XE TẠI TRẠM SẠC VINFAST     ");
console.log("==================================================\n");

// BƯỚC 1: Khởi tạo hàng đợi xe ban đầu
const hangDoiXe = ['30A-111', '29B-222', '51C-333'];
console.log("[Khởi tạo] Danh sách hàng đợi ban đầu:");
console.log("-> Trạng thái:", hangDoiXe);
console.log("--------------------------------------------------");

// BƯỚC 2: Tiếp nhận 1 xe mới vào cuối hàng (Sử dụng push)
const xeMoi = '43D-444';
hangDoiXe.push(xeMoi);
console.log(`[Thao tác push] Tiếp nhận xe mới đến: ${xeMoi} vào cuối hàng.`);
console.log("-> Hàng đợi sau khi thêm:", hangDoiXe);
console.log("--------------------------------------------------");

// BƯỚC 3: Chèn xe ưu tiên vào vị trí chỉ định (Sử dụng splice)
// splice(startIndex, deleteCount, ...items)
// Tại index 1, xóa 0 phần tử và chèn xe '14A-999'
const xeUuTien = '14A-999';
const viTriChen = 1;
hangDoiXe.splice(viTriChen, 0, xeUuTien);
console.log(`[Thao tác splice] Chèn xe ưu tiên: ${xeUuTien} vào vị trí index ${viTriChen}.`);
console.log("-> Hàng đợi sau khi chèn xe ưu tiên:", hangDoiXe);
console.log("--------------------------------------------------");

// BỔ TRỢ NGHIỆP VỤ: Kiểm tra sự tồn tại & vị trí của xe (includes & indexOf)
const xeCanTim = '14A-999';
if (hangDoiXe.includes(xeCanTim)) {
  const viTriHienTai = hangDoiXe.indexOf(xeCanTim);
  console.log(`[Thao tác includes & indexOf] Xe ${xeCanTim} có trong hàng đợi tại số thứ tự ${viTriHienTai + 1} (index ${viTriHienTai}).`);
}
console.log("--------------------------------------------------");

// BƯỚC 4: Điều phối xe đầu tiên vào cổng sạc (Sử dụng shift theo cơ chế FIFO)
const xeVaoSac = hangDoiXe.shift();
console.log(`[Thao tác shift] Trụ sạc trống -> Điều phối xe đầu hàng vào sạc: ${xeVaoSac}`);
console.log("-> Hàng đợi còn lại:", hangDoiXe);
console.log("--------------------------------------------------");

// BƯỚC 5: Tính tổng điện năng tiêu thụ và doanh thu ca trực
const donGiaKwh = 4500; // 4.500 VNĐ/kWh
const mangKwh = [30, 45, 25];
let tongKwh = 0;

// Duyệt mảng tính tổng điện năng (chuẩn điều kiện i < length để tránh lỗi vượt biên)
for (let i = 0; i < mangKwh.length; i++) {
  tongKwh += mangKwh[i];
}

const tongDoanhThu = tongKwh * donGiaKwh;

// In báo cáo tổng kết ra Console
console.log("\n==================================================");
console.log("          BÁO CÁO TỔNG KẾT CA TRỰC TRẠM SẠC       ");
console.log("==================================================");
console.log(`1. Tổng sản lượng điện tiêu thụ : ${tongKwh} kWh`);
console.log(`2. Đơn giá sạc                   : ${donGiaKwh.toLocaleString("vi-VN")} VNĐ/kWh`);
console.log(`3. Tổng doanh thu ca trực        : ${tongDoanhThu.toLocaleString("vi-VN")} VNĐ`);
console.log(`4. Số xe còn đang đợi sạc        : ${hangDoiXe.length} xe`);
console.log("--------------------------------------------------");
console.log("Danh sách xe còn lại trong hàng đợi:");
for (let i = 0; i < hangDoiXe.length; i++) {
  console.log(`  STT ${i + 1}: ${hangDoiXe[i]}`);
}
console.log("==================================================");