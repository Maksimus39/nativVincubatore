"use strict"

// повторение
// что выведет в консоль
console.log(age)
var age = 18
if (age >= 18) {
    var access = "alloved"
} else {
    var access = "forbidden"
}
console.log(access)


console.log(typeof "10")
console.log(typeof 10n)
console.log(typeof [])
console.log(typeof null)
console.log(typeof (typeof 5))

const arr = [1, 10, 7, 5]
const arr2 = arr
arr2[2] = 4
console.log(arr[2])
console.log(arr2[2])

let num = 10
console.log(num++)
console.log(++num)
console.log(num--)
console.log(--num)
console.log(num)

console.log(new String('Hello') == 'Hello') // true
console.log(new String('Hello') === 'Hello') // false
console.log([1, 2, 3] == [1, 2, 3]) // false
console.log([1, 2, 3] === [1, 2, 3]) // false


console.log(5 + '3') // 53
console.log(typeof (5 + '3')) // string
console.log(5 - '3') // 2
console.log(typeof (5 - '3')) // number
console.log(7 % 3) // 1

console.log(6 > '2px') // false
console.log('6' > 2) //true
console.log('6' > '12') // true
console.log('apple' > 'orange') // false


console.log('' || 2 || 'NaN' || undefined) // 2  или запинается на первом true
console.log(null || 0 || 'NaN' || undefined) // 'NaN'
console.log(' ' && 2 && 'NaN' && undefined) // undefined
console.log(null && 23 && 'NaN' && undefined) // null
console.log('' ?? 0 ?? 'NaN' ?? undefined) // ' '
console.log(null ?? 0 ?? 'NaN' ?? undefined) // 0


let i = -3
while (i) {  // данная функция сделает обратный отсчёт и как дойдёт до нуля остановиться так как данный цикл так работает
    console.log(i++)
}

// переписать на for
for (let i = -3; i < 0; i++) {
    console.log(i)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function
// Function deklaration

function showGreat(name) {
    return `Hello,${name}`
}

console.log(showGreat('Max'))

// напишите функцию которая принимает 2 параметра и возвращает квадрат их суммы
console.log(sumSquares(2, 5)) // 49
function sumSquares(a, b) {
    return (a + b) ** 2
}

console.log(sumSquares(2, 5))


// Function Expression
const showMessage = function (message) {
    console.log(`Your message,${message}`)
}
showMessage('Hi')


// Arrow function
// const showGreat = (name = 'Oleg') => {
//     const result = `Hello,${name}`
//     return result
// }
// console.log(showGreat())


// напишите функцию divider, которая принимает на вход число и возвращает его значение разделённое на 2
const divider = (number) => {
    return number / 2
}
console.log(divider(4))

// Напишите функцию calculator, которая принимает два числа и операцию в виде строки.
// Если операция сложение, то следует сложить два числа. Если вычитание вычесть одно число из другого
// Усли конкретного указания нет то базовое значение должно быть равным +
// console.log(calculator(2,3)) // 5
//console.log(calculator(5, 2, '-')) // 3

const calculator = (a, b, op = '+') => {
    switch (op) {
        case '+':
            return a + b
        case '-':
            return a - b
        default:
            return a + b
    }
}
console.log(calculator(5, 2, '-'))


//Функция обратного вызова
// const doSmt = (callback) => {
//     console.log(callback())
// }
//
// const sayHello = () => {
//   return 'Hello! Have a nice day!'
// }
// console.log(doSmt(sayHello))


// Напишите функцию calculator которая принимает на вход два числа и функцию колбек
// Функция calculator должна вызвать коллбек с результатом выполнения операции между двумя числами

// const add = (a, b) => {
//     return a + b
// }
//
// const subtract = (a, b) => {
//     return a - b
// }
//
// const calculator = (a,b, callback) => {
//   return callback(a,b)
// }
// console.log(calculator(5,3, add)) // 8
// console.log(calculator(5,3, subtract)) // 2


// Назовите примеры встроенных функций в JS, которые принимают коллбеки  и откладывают их выполнение
// setTimeout(() => {
//     console.log('TICK')
// }, 1000)
//
// let int = 0
// const intervalID = setInterval(() => {
//     console.log(int++)
// }, 1000)
//
// setTimeout(() => {
//     clearInterval(intervalID)
// },3000)


// напишите функцию forEach, которая принимает на вход массив и функцию коллбек
// Функция forEach должна вызвать коллбек для каждого элемента массива
const numbers = [1, 2, 3, 4, 5, 6]

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

function showElemOfArray(elem,index,array) {
    console.log(`elem: ${elem}; index: ${index}; array: ${array}`)
}

forEach(numbers,showElemOfArray)

























