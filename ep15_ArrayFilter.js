// ການໃຊ້ Array Filter
const data = [10, 20, 30, 40];
const result = data.filter((e) => {
  return e > 20;
});
console.log(result);

// filter with obj

const employee = [
  { name: "Souny", department: "DEV", salary: 10000000 },
  { name: "Tia", department: "DEV", salary: 20000000 },
  { name: "Phet", department: "Market", salary: 3000000 },
  { name: "Dam", department: "IT", salary: 600000 },
  { name: "Deng", department: "Sale", salary: 5000000 },
];

const resultEmp = employee
  .filter((e) => {
    return e.salary > 3000000;
  })
  .filter((e) => {
    return e.department === "DEV";
  });

console.log(resultEmp);
