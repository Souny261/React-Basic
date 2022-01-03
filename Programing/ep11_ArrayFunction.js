// ການລົບຂໍ້ມູນແບບກຳນົດເປັນຊ່ວງ
const data = [10, 20, 30, 40, 50];
console.log(data);
// 1. splice(ຕຳແໜ່ງທີ່ຈະລົບ,ຈຳນວນທີ່ຈະລົບ)
// data.splice(1); //ລົບແຕ່ index 1 ເປັນຕົ້ນໄປ
data.splice(1, 2); //ລົບແຕ່ index 1 ຫາທີ່ 3 ເປັນຕົ້ນໄປ
console.log(data);
// 2. slice(ຕຳແໜ່ງເລີ່ມຕົ້ນ,ຕຳແໜ່ງສຸດທ້າຍ-1) ແມ່ນຫາຂໍ້ມູນ
const newData = data.slice(1, 2);
console.log(newData);
