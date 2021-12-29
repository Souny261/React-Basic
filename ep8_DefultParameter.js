getDataCus = (csName, address) => {
  if (!address) {
    address = "VT";
  }
  const data = `Mr ${csName} Address: ${address}`;
  return data;
};

console.log(getDataCus("Souny", "SY"));
console.log(getDataCus("Tia"));
