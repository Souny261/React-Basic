// Rest Parameter
sumition = (...numberAr) => {
  let total = 0;
  for (let element of numberAr) {
    total += element;
  }
  return total;
};
console.log(sumition(500, 100));
console.log(sumition(500, 1000, 10000));

// summition = (x, y) => {
//   return x + y;
// };
// summition = (x, y, z) => {
//   return x + y + z;
// };
// console.log(summition1(50, 100));
// console.log(summition2(50, 100, 100));
