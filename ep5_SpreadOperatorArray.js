// Spread operator
const newArr = [100, 200, 300];
const data = [10, 20, ...newArr];
const arr = [1, 2, 3, 4, 5, 7];
console.log(data);
// ເພີ້ມຂໍ້ມູນໃນ Array
data.push(11111);
console.log(data);

data.push(...arr);
console.log(data);
