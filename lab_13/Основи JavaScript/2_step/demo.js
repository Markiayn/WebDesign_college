var day = 26;
var month = 4;
var year = 2026;

console.log(`Добрий день! Сьогодні ${day}.0${month}.${year}`);

// ---------------------------------------


let x = 50;
let y = 10;
let d = x*y;

console.log('Сума x та y дорівнює: ' + (x + y));
console.log(`Добуток x та y дорвінює: ${d}`);

let firstName = "Name";
let lastName = "Surname";
let age = 18;

d /= y;
x -= d;
age += x;

console.log(firstName + ' ' + lastName + ' ' + age );
if (age>=18) {
    console.log ("студент повнолітній");
} else {
    console.log ("студент неповнолітній");
}

age = "18";

console.log (age ==18);
console.log (age ===18);

let N = 10;
let limit = 10 * N;

console.log(`Непарні числа від 1 до ${limit}:`);


for (let i = 1; i <= limit; i += 2) {
    console.log(i);
}


