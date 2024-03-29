'use strict'

// переменные
// let, var, const

// Типы данных
// primitive: string,number,boolean,bigInt, symbol,null,undefined

// object

// let num = 10
// let num1 = 11
// console.log(num)
// console.log(num1)
//
// const obj = {a:1,b:2,c:3}
// const obj2 = obj
// obj2.a = -1
//
// console.log(obj)
// console.log(obj2)


// преобразование типов
// строковое
// const num = 10
// const str = num.toString()
// console.log(typeof str)
//
// console.log(typeof (typeof str))
//
// console.log(typeof null)

// const bool = Boolean(BigInt)
// console.log(bool)
// false: 0, "", undefined, NaN,

// операторы
// +, -, *, /, **

// бинарный
// const res = 5 + 2
//
// // унарный
// let num = Number("2")
// console.log(typeof num)
//
// // тернарный
// let age = 17
// let status = age >= 18 ? "adult" : "minor"
// console.log(status)

// инкремент и декремент

// let counter = 0
// console.log(counter++) // 0
// console.log(++counter) // 2
// console.log(counter--) // 2
// console.log(++counter) // 2
// console.log(counter)

// операторы сравнения

// console.log(1 == "1") // true
// console.log(true == 1) // true
// console.log(null == undefined) // true
//
// console.log(1 === "1") // false
// console.log(true === 1) // false
// console.log(null === undefined) // false
//
// console.log(1 <= "1") // true
// console.log("2" >= "12") // true
// console.log(false >= 1) // false

// console.log("X" > "x") // false
// console.log("Banana" < "Banan") // false

// Логические операторы

// (или) ||
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true || false) //true
// console.log(false || false) // false

// console.log(1||0) // 1
// console.log(""|| "Hello") // Hello
// console.log(null||1||"Hello"||"") // 1
// console.log(undefined||0||""||null) // null

// && (и)

// console.log(true && true) // true
// console.log(false && true && true)//false
// console.log(true && false && false) // false
// console.log(false && false) // false

// console.log(null && 1)        //null
// console.log(1 && 2 && null && 3) // null
// console.log(1 && 2 && 3) // 3
// console.log("Hello" && 1 && "") // ""

// !(НЕ)
// Приводит аргумент к логическому типу true/false и возвращает противоположное значение
// console.log(!true)  // false
// console.log(!0) // false

// console.log(!!null) // false
// console.log(!!"error message") // true
// console.log(!"") // true

// ?? - оператор нулевого слияния
// let amount
// console.log(amount ?? 0)


// let x = null
// let y = "Hello"
// let z
// console.log(x??y??z??"default value") // Hello

// циклы while/for
// как написать цикл for который выводит в консоль числа от 1 до 5
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }

//вывести циклом for квадраты чисел от 1 до 10
// for (let i = 1; i <= 10; i++) {
//  // let a=  i*i
//     console.log(Math.pow(i,2))
// }

// напиши цикл for который выводит массив с последнего элемента

// const colors = ["red", "orange", "yellow", "green", "blue", "violet"]
//
// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i])
// }

// напиши цикл for который выводит все элементы двумерного массива
// const matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//
// for (let i = 0; i <matrix.length ; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//         console.log(matrix[i][j])
//     }
// }


