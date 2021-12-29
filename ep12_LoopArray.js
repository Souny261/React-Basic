// ການໃຊ້ Loop ເພື່ອດື່ງເອົາຂໍ້ມູນໃນ Array
const data = [10, 20, 30, 40, 50];
// 1. for loop
for (let index = 0; index < data.length; index++) {
  if (data[index] > 40) {
    break;
  }
  const element = data[index];
  console.log(`ForLoop: ${element}`);
}
// 2. ForEach
data.forEach((element) => {
  console.log(`ForEach: ${element}`);
});
// 3. ForOf
for (const element of data) {
  console.log(`ForOf: ${element}`);
}
