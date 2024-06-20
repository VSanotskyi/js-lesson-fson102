/***** Інструкція if та її варіація *****/

// if() {}
// let value = 10;
//
// if (value === 10) {
//   console.log(`condition true, value = ${10}`);
// }

// if() {}else{}

// let value = 10;
//
// if (value === 11) {
//   console.log('condition true');
// } else {
//   console.log('condition false');
// }

// if(){} else if(){} else{}

// const value = 10;
//
// if (value < 10) {
//   console.log(`value < ${value}`);
// }else if (value > 10) {
//   console.log(`value > ${value}`);
// } else {
//   console.log(`value = ${value}`);
// }

/***** Інструкція switch *****/

// switch() {}
// let value = 15;
//
// switch (value) {
//   case 10:
//     console.log('value = 10');
//     break;
//   case 11:
//     console.log('value = 11');
//     break;
//   case 12:
//     console.log('value = 12');
//     break;
//   default:
//     console.log('another');
// }

/***** Тернарний оператор *****/

// ? :

// const value = 10;
//
// console.log(value > 10 ? "true" : "false"); // false
// console.log(value > 10 ? 'value > 10' : value < 10 ? 'value < 10': 'value = 10'); // value = 10

/***** Особливості видимості *****/

// глодальна, локальна, функціональна

// глодальна, локальна
// let
// const

// let num = 10;
// if (true) {
//   let num = 15;
//   console.log(num); // 15 local
// }
// console.log(num); // 10 global

// глодальна та функціональна
// hoisting !!!

// console.log(number);
// var number // hoisting
//
// var number = 1111 // hoisting
//
// if (true) {
//   var number = 16 // hoisting
// }
// console.log(number);

// ---

// var number = 1000;
//
// function fn () {
//   var number = 12;
// }
//
// fn();
//
// console.log(number); // 1000

/***** Цикл for *****/

// for(initialization; condition; post-expression) {statements}

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// const message = 'Hello world'
//
// for (let i = 0; i < message.length ; i += 1) {
//   console.log(message[i]);
// }

/***** Цикл while *****/

// while(condition){ statement }

// const message = 'Hello World';
//
// let i = 0;
// while (i < message.length) {
//   console.log(message[i]);
//   i += 1;
// }

/***** Цикл do while *****/

// do {
//   statement
// } while (condition)

// let i = 0
//
// do {
//   console.log('some message');
// }while(i < 0)