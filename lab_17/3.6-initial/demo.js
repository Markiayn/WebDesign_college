// let products = [
//   { name: "Samsung J5 2017", screen: 5.2, price: 5400, weight: 160 },
//   { name: "iPhone X", screen: 5.8, price: 25000, weight: 170 },
//   { name: "Xiaomi Mi 4", screen: 5.5, price: 4999, weight: 150 },
//   { name: "Nokia 3310 2018", screen: 2.4, price: 999, weight: 60 },
//   { name: "iPhone 7", screen: 4.7, price: 9999, weight: 140 }
// ];
//
// let minPrice = 2000
// let maxPrice = 10000
//
// let res = []
//
// for(let product of products) {
//     if(product.price >= minPrice && product.price <= maxPrice) {
//         res.push(product)
//     }
// }
//
// console.log(res)


let trips = [
    { city: "Київ", duration: 2, price: 2000, food: false, guide: true },
    { city: "Харків", duration: 1, price: 3000, food: true, guide: false },
    { city: "Одеса", duration: 2, price: 4500, food: true, guide: true },
    { city: "Дніпро", duration: 1, price: 5500, food: false, guide: false },
    { city: "Полтава", duration: 1, price: 2000, food: true, guide: true },
    { city: "Львів", duration: 2, price: 6000, food: true, guide: true }
];


trips.forEach(trip => {
    console.log(`Місто: ${trip.city}, Тривалість: ${trip.duration} дні, Ціна: ${trip.price} грн, ` +
        `Харчування: ${trip.food ? "Так" : "Ні"}, Гід: ${trip.guide ? "Так" : "Ні"}`);
});


console.log("Тури з тривалістю 1 день та без харчування:")
let res1 = []

for(trip of trips){
    if(trip.duration == 1 && trip.food == false ){
        res1.push(trip)
    }
}

res1.forEach(trip => {
    console.log(`Місто: ${trip.city}, Тривалість: ${trip.duration} дні, Ціна: ${trip.price} грн, ` +
        `Харчування: ${trip.food ? "Так" : "Ні"}, Гід: ${trip.guide ? "Так" : "Ні"}`);
});

console.log('Тури не дорожче 3000 грн:')
let res2 = []

for(trip of trips){
    if(trip.price <= 3000 ){
        res2.push(trip)
    }
}

res2.forEach(trip => {
    console.log(`Місто: ${trip.city}, Тривалість: ${trip.duration} дні, Ціна: ${trip.price} грн, ` +
        `Харчування: ${trip.food ? "Так" : "Ні"}, Гід: ${trip.guide ? "Так" : "Ні"}`);
});

let storeProducts = [
    { name: "Samsung J5 2017", price: 5400},
    { name: "iPhone X", price: 25000},
    { name: "Xiaomi Mi 4", price: 4999},
    { name: "Чохол для iPhone X", price: 500}
]

let  totalCost = getTotalCost(storeProducts);
console.log(`Загальна вартість товарів на складі: ${totalCost} грн`)

let orderProducts = [
    { name: "iPhone X", price: 25000},
    { name: "Чохол для iPhone X", price: 500}
];

totalCost = getTotalCost(orderProducts);
console.log(`Загальна вартість замовлень: ${totalCost} грн`)

function getTotalCost(products) {
    let result = 0;
    for(let product of products) {
        result += product.price;
    }
    return result;
}

let person = {
    'name': '',
    lastName: '',
    'sayHello': function (otherName) {
        console.log("Привіт, " + otherName + "! Мене звуть " + this.name);
    },
    getFullName: function () {
        return this.name + " " + this.lastName;
    }
};

person.name = "Ілля";
person.sayHello("Марія")

person.lastName = "Білокінь";
console.log(person.getFullName())



