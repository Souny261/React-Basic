// Destructuring ການກຳນົດຄ່າໃນ Array ໃຫ້ກັບຕົວແບບ\

// Simple type
const colors = ["Red", "Blue"];
const a = colors[0];
const b = colors[1];
console.log(`colors: ${a} and ${b}`);

// Destructuring type
const [c, d] = colors;
console.log(`colors: ${c} and ${d}`);

// With object
const product = {
  proName: "Computer",
  price: 100000,
  stock: 100,
};
const proName1 = product.proName;
const price1 = product.price;
const stock1 = product.stock;
console.log(`${proName1} ${price1} ${stock1}`);

// Using destructuring type with obj
const { proName, price, stock } = product;
console.log(`${proName} ${price} ${stock}`);
