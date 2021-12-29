// ການໃຊ້ function ຕ່າງໆກັບ array
const data = [1, 2, 3];
console.log(data);
// 1. push ແມ່ນການເພີ້ມຂໍ້ມູນເຂົ້າໄປໃນ array ໃນທ້າຍສູດ
data.push(10000);
console.log(data);
// 2. pop ແມ່ນການຂໍ້ມູນອອກຈາກ Array ໃນທ້າຍສູດ
data.pop();
console.log(data);
// 3. shift ແມ່ນການຂໍ້ມູນອອກຈາກ array ໃນໜ້າສຸດ
data.shift();
console.log(data);
// 4. unshift ແມ່ນການເພີ້ມຂໍ້ມູນເຂົ້າໄປໃນ Array ໃນໜ້າສຸດ
data.unshift(9999);
console.log(data);
