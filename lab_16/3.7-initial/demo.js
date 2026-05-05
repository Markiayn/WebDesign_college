let storeProducts = [
  { name: "Samsung J5 2017", price: 5400},
  { name: "iPhone X", price: 25000},
  { name: "Xiaomi Mi 4", price: 4999},
  { name: "Чохол для iPhone X", price: 500}
];

let totalCost = 0;
for(let product of storeProducts) {
  totalCost = totalCost + product.price;
}
console.log("На складі товарів на ", totalCost, "грн.");

let orderProducts = [
  { name: "iPhone X", price: 25000},
  { name: "Чохол для iPhone X", price: 500}
];

totalCost = 0;
for(let product of orderProducts) {
  totalCost = totalCost + product.price;
}
console.log("Сума замовлення: ", totalCost, "грн.");
