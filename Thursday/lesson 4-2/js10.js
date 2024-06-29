// this

// let car = {
//   brand: "bmw",
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// const anotherCar = car;
// car = null;

// anotherCar.startEngine();

// function startEngine() {
//   console.log(`Start ${this.brand}`);
// }

// const car1 = {
//   brand: "bmw",
// };

// const car2 = {
//   brand: "kia",
// };

// car1.f = startEngine;
// car2.f = startEngine;

// car1.f();
// car2.f();

// -----------------------------------------

// 1. Global scope
// 2. simple func | arrow func
// 3. call, apply, bind
// 4. Functin constructor

// 1. Global scope

// console.log(this);

// 2. simple func | arrow func

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo();

// const baz = function () {
//   console.log(this);
// };

// const bar = () => {
//   // {}
//   console.log(this);
// };

// bar();
// baz();

// "use strict";

// const foo = () => {
//   // {this}
//   const bar = () => {
//     // {} => fooLE
//     console.log(this);
//   };
//   bar();
// };

// foo();

// 3. call, apply, bind

// const car = {
//   speed: 200,
//   showSpeed(a, b, c) {
//     console.log(this.speed + a + b + c);
//   },
// };

// const scooter = {
//   speed: 60,
// };

// const ferrari = {
//   speed: 330,
// };

// car.showSpeed.bind(scooter, 10, 20)(30);

// car.showSpeed.bind(scooter, 10, 20).call();

// car.showSpeed.call(scooter);
// car.showSpeed.apply(scooter);
// const f = car.showSpeed.bind(scooter);
// f();

// setTimeout(() => car.showSpeed(), 1000);

// const setTimeout = (callback, delay) => {
// 	//delay
// 	//
// 	//
// 	callback()  car.showSpeed()
// }

// const sum = (a, b) => a + b;
// // создать новую функцию sum10, которая всегда прибавляет 10 к переданному аргументу.
// // const sum10 = (a) => a + 10

// const sum10 = sum.bind({}, 10);

// console.log(sum10(5));

// 4. Functin constructor

// function Car(brand, speed) {
//   // {}
//   this.brand = brand; // {brand: brand}
//   this.speed = speed; // {brand: brand, speed: speed}
//   // return {brand: brand, speed: speed}
// }

// const car1 = new Car("bmw", 200);
// const car2 = new Car("kia", 220);

// console.log(car1);
// console.log(car2);

// const foo = () => {};

// console.log(new foo());

// var x = 50;

function foo() {
  const x = 10;
  // this { x: 30 }
  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

// const obj1 = foo();
// obj1.bar(); // undefined || 10
// obj1.baz(); // 20        || 20

const obj2 = foo.call({ x: 30 });

// obj2.bar(); // undefined || 30
// obj2.baz(); // 20        || 20
// console.log(obj2);

let y = obj2.bar;
let z = obj2.baz;

y.call({ x: 555 }); // 30
z.call({ x: 555 }); // undefined

// const car = {
//   speed: 200,
//   showSpeed: () => {
//     console.log(this.speed);
//   },
// };

// const scooter = {
//   speed: 60,
// };

// car.showSpeed.call(scooter);
