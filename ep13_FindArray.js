// ການຄົ້ນຫາຂໍ້ມູນໃນ Array
const colors = ["Red", "Green", "Black", "Yellow", "White"];
console.log(colors);
// 1. indexof(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຕຳແໜ່ງ Index ທີ່ຄົ້ນເຫັນ (ຖ້າບໍ່ພົບຈະໄດ້ຄ່າ -1)
const index = colors.indexOf("White");
console.log(index);
// 2. find(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຂໍ້ມູນທີ່ເຫັນ (ຖ້າບໍ່ພົບຈະໄດ້ undefinded)
const search = colors.find((element) => element === "Yellow");
console.log(search);
// 3. findIndex(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຕຳແໜ່ງ Index ທີ່ຄົ້ນເຫັນ (ຖ້າບໍ່ພົບຈະໄດ້ຄ່າ -1)
const searchIndex = colors.findIndex((element) => element === "Yellow");
console.log(searchIndex);
