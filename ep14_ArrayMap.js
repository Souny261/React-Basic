// ການ Map Array
const numbers = [10, 20, 30, 40];
console.log(numbers);
const result = numbers.map((e, index) => {
  //   console.log(e);
  //   console.log(index);
  const total = e * 2;
  return total;
});
console.log(result);

// Map array with object
const data = [
  { day: "01/06/2021", weather: "Hot", temp: 17 },
  { day: "02/06/2021", weather: "Cold", temp: -27 },
  { day: "03/06/2021", weather: "Rainning", temp: 26 },
];
// get data by obj
const result1 = data.map((e) => {
  return e.weather;
});

console.log(result1);
