/***** Оголошення змінних *****/

// const value // error, Missing initializer in const declaration
// const value = 15;
// value = 10; // error, Assignment to constant variable

// let value1 // ok
// console.log(value1); // undefined
// value1 = 10; // ok
// console.log(value1); // 10
// value1 = 15; // ok
// console.log(value1); // 15

/***** Примітивні типи данних *****/

// number
// const num = 10;
// console.log(typeof num); // number

// string
// const str = 'Hello from js'
// console.log(typeof str); // string

// Типи рядків '' "" ``
// const str1 = `nam = ${num}` // інтерполяція
// console.log(str1); // num = 10
// console.log(typeof str1); // string

// boolean
// const isOpen = true;
// console.log(typeof isOpen); // boolean
// console.log(5 === 5); // true
// console.log(5 === '5'); // false
// console.log(5 == '5'); // true

// undefined
// let a
// console.log(typeof a); // undefined

// null
// let a = null
// console.log(typeof a); // object

/***** перевірка типу данних з яким працюємо, метод typeof *****/

// console.log(typeof 'Hello'); // string
// console.log(typeof 1); // number
// console.log(typeof false); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
//
// const num = 10;
// const str = 'Hello'
//
// console.log(typeof num === 'number'); // true
// console.log(typeof str === 'number'); // false

/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// console.log();
// console.log('Hello from js');

// alert
// alert('Hello from js');

// prompt
// const userName = prompt('Enter your name');
// console.log(userName);

// confirm
// const confirmName =  confirm(`your name is ${userName}`);
// console.log(confirmName);

/***** Основні оператори порівняння *****/

// > >= < <= == === != !==

// console.log(25 > 21); // true
// console.log(25 >= 25); // true
// console.log(null >= 0); // true
// console.log(null <= 0); // true
//
// console.log(0 == ''); // true
// console.log(0 === ''); // false
// console.log(0 == '0'); // true
// console.log(0 === '0'); // false

/***** Логічні оператори *****/

// ||

// false = 0, '', null, undefined, false, NaN

// console.log(false || 1); // 1
// console.log(true || 1); // true
// console.log(0 || false); // false
// console.log(false || 0); // 0
// console.log(2 || 0 || 1); // 2
// console.log(0 || '' || 4); // 4

// ?? реагує лише на null або undefined

// console.log(0 ?? 1); // 0
// console.log(1 ?? 2); // 1
// console.log(2 ?? 0); // 2
// console.log(null ?? 1); // 1
// console.log(1 ?? undefined); // 1
// console.log(undefined ?? 1); // 1
// console.log(undefined ?? null); // null

// &&

// console.log(1 && false); // false
// console.log(false && 1); // false
// console.log(1 && 2); // 2
// console.log(5 > 4 && 4 < 5); // true
// console.log(5 < 4 && 5 > 4); // false
// console.log(1 && 2 && 3); // 3

/***** Методи для роботи з числами (типи данних Number) *****/

// const str = '25.7a32px';

// Number.parseInt()

// console.log(Number.parseInt(str)); // 25
// console.log(Number.parseInt('hello')); // NaN
// console.log(Number.parseInt('a2')); // NaN

// Number.parseFloat()

// console.log(Number.parseFloat(str)); // 25.7
// console.log(Number.parseFloat('hello')); // NaN
// console.log(Number.parseFloat('a2')); // NaN

// NaN - not a number (Numbesr.isNaN(), isNaN())

// console.log(NaN === NaN); // false
// console.log(Number.isNaN(NaN)); // NaN
// console.log(Number('hello')); // NaN
// console.log(Number('Hello') === NaN); // false

// const num = 1;
// const someText = '12'
// const someText1 = '12px';

// console.log(isNaN(num)); // is not a number? - false, (typeof 1 === number)
// console.log(isNaN(someText)); // is not a number? - false, (Number('12') - 12)
// console.log(isNaN(someText1)); // is not a number? - true, (Number('12px') - NaN)

// console.log(Number.isNaN(num)); // false
// console.log(Number.isNaN(someText)); // false
// console.log(Number.isNaN(someText1)); // false
// console.log(Number.isNaN(Number(someText1))); // true

// const num = 1;
// const str1 = 'Hello';
// const str2 = '25.7px';
// const str3 = '1';
//
// console.log(isNaN(num)); // false
// console.log(isNaN(str1)); // true
// console.log(isNaN(str2)); // true
// console.log(isNaN(str3)); // false
// console.log(Number.isNaN('Hello')); // false

/***** Класс Math *****/

// const value1 = 10.7
// const value2 = 10.2

// Math.floor()
// console.log(Math.floor(value1)); // 10
// console.log(Math.floor(value2)); // 10

// Math.ciel()
// console.log(Math.ceil(value1)); // 11
// console.log(Math.ceil(value2)); // 11

// Math.round()
// console.log(Math.round(value1)); // 11
// console.log(Math.round(value2)); // 10

// Math.pow() - піднесення до степеня
// console.log(Math.pow(5,2)); // 25
// console.log(5 ** 2); // 25

/***** Методи та властивості для роботи з рядками (типи данних String) *****/

// length

// const str = 'Hello world'
// console.log(str.length); // 11

// toUpperCase()

// const str1 = str.toUpperCase()
// console.log(str1) // HELLO WORLD

// toLowerCase()

// const str2 = str.toLowerCase()
// console.log(str2) // hello world

// indexOf()

// const str3 = 'Hello from js'
// console.log(str3.indexOf('H')); // 0
// console.log(str3.indexOf('b')); // -1
// console.log(str3.indexOf(' ')); // 5
// console.log(str3.indexOf('ll')); // 2
// console.log(str3.indexOf('h')); // -1

// includes

// const str = 'Hello world';
//
// console.log(str.includes('h')); // false
// console.log(str.includes('world')); // true
// console.log(str.includes('H')); // true
// console.log(str.includes(' ')); // true

// endsWith()

// const str = 'Hello';
// console.log(str.endsWith('o')); // true
// console.log(str.endsWith('a')); // false

// startsWith()

// const str = 'Hello world'
// console.log(str.startsWith('H')); // true
// console.log(str.startsWith('h')); // false

// replace() replaceAll()

// const str = 'Hello world';
// console.log(str.replace('world', 'from js')); // Hello from js
// console.log(str.replace('a', 'from js')); // Hello world
//
// console.log(str.replaceAll('o', 'O')); // HellO wOrld

// slice()

// const str = 'Welcome to js';
// console.log(str.slice(0, str.indexOf(' '))); // Welcome
// console.log(str.slice(str.indexOf('to'), 10)); // to
// console.log(str.slice(str.indexOf('js'), str.length)); // js
