// ການໃຊ້ join ແລະ concat ໃນ array
const data = [1, 2, 3, 4];
console.log(data);
// 1. join ແມ່ນການແປງ Array ໃຫ້ເປັນ string
const result = data.join(",");
console.log(result);
// 2. concat ແມ່ນເອົາ Array ມາຕໍ່ກັນ
const data2 = [5, 6, 7, 8];
const allData = data.concat(data2);
console.log(allData);
