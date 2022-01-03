// ການເຮັດວຽກຂອງ Object

const cusname = "Souny";
const address = "VT";

// ສ້ງອົງປະກອບໃຫ້ກັບ customer
// 1
const customer = {
  cusname: cusname,
  age: 26,
  tel: 2055889758,
  address: address,
};
console.log(customer);
console.log(customer["cusname"]);
// 2
const customer1 = {
  cusname,
  address,
  //ສ້າງ method ໃນ obj
  showdata() {
    console.log("customer name is = " + cusname);
  },
};
console.log(customer1);

customer1.showdata();
