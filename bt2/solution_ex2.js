
const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// SỬA LỖI 1: Dùng shift() thay vì pop() để điều phối xe đến sớm nhất (FIFO)
const xeVaoSac = hangDoiXeCho.shift();
console.log('Xe được điều phối vào sạc:', xeVaoSac);

// Tiếp nhận xe mới vào cuối hàng đợi
hangDoiXeCho.push('43D-88888');

console.log('--- BẢNG HIỂN THỊ ĐIỆN TỬ LED ---');
// SỬA LỖI 2: Dùng i < hangDoiXeCho.length để không bị in ra undefined
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}