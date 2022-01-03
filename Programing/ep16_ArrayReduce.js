// Array Reduce ເປັນການລົດຄ່າໃນ Arrary

const data = [10, 20, 30, 40];
// ໄດ້ Array ຊຸດໃຫມ່ທີ່ມີຈຳນວນ index ເທົ່າເກົ່າ
const mapData = data.map((e) => {
  return 100;
});
// ໄດ້ array ເກົ່າແຕ່ຄວາມຍາວຂອງ index ບໍ່ເທົ່າກັບຄ່າເກົ່າ
const filterData = data.filter((e) => {
  return e > 20;
});
console.log(mapData);
console.log(filterData);

// Reduce ຈະໄດ້ຂໍ້ມູນພຽງຊຸດດຽວເທົ່ານັ້ນ
// data.reduce((ຄ່າທີ່ຖືກປະມວນຜົນ,e) => {return;}, ຄ່າເລີ່ມຕົ້ນ); //value = 0
const reduceData = data.reduce((value, e) => {
  const total = e + value;
  return total;
}, 0);
console.log(reduceData);

// Reduce With Object

const product = [
  { name: "Iphone", price: 1000 },
  { name: "Mac", price: 3000 },
  { name: "Book", price: 2000 },
];
const allPrice = product.reduce((value, e) => {
  //   console.log("price:" + e.price);
  //   console.log("value:" + value);
  const total = e.price + value;
  return total;
}, 0);
console.log("total price is " + allPrice);
