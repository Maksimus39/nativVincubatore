'use strict'

// Arrays methods
// mutable
// sort, reverse, push, pop, shift, unshift, splice, fill
// arr.splice(start, deleteCount, el1, el2)

// Удалите элементы 'Batman' и  'Joker' и добавьте вместо них элемент 'Thor'
// const marvelCharacters = [
//     'Iron Man',
//     'Captain America',
//     'Batman',
//     'Joker',
//     'Black Widow'
// ]
// marvelCharacters.splice(2, 2, 'Thor')
// console.log(marvelCharacters) // 'Iron Man', 'Captain America', 'Thor', 'Black Widow'
// marvelCharacters.splice(3,1)
// console.log(marvelCharacters)


// reverse
// Напишите функцию checkPalindrome, которая принимает строку и проверяет является ли
// строка палиндромом (Палиндром - это текст, который читается одинаково и слева, и справа)
// const checkPalindrome = (str) => {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
// }
//
// console.log(checkPalindrome('Level')) // true
//  console.log(checkPalindrome('Name')) // false

// sort
// arr.sort(callback)
// const nums = [3, 10, 7, 6, 5, -4, 3, 2, 12]
// console.log(nums.sort())
// Напишите функцию compareNumbers(arr), которая возвращает массив,
//
// const compareNumbers = (arr) => {
//     arr.sort((a, b) => {
//         if (a > b) return 1 // b по меньшему индексу чем a
//         if (a === b) return 0
//         if (a < b) return -1
//     })
// }
// compareNumbers(nums)
// console.log(nums)
// элементы которого отсортированы по возрастанию их значений.
// console.log(compareNumbers(nums)) // -4, 2,  3,  3, 5, 6, 7, 10, 12


// Напишите функцию fillArr, которая принимает массив и изменяет
// начиная с третьего элемента массива все элементы на значение *
//arr.fill(value, start, end = arr.length)
// const numbers = [8, 6, 4, 9, 1, 9, 4, 3]
// const fillArr = (arr) => {
//     arr.fill('*', 2)
// }
// fillArr(numbers)
//
// console.log(numbers) //  8,   6,   '*', '*', '*', '*', '*', '*'
//
// let string = ['a','b','c','d']
// string.fill(1,0)
// console.log(string)


// immutable
const cities = [
    'New York',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'Berlin',
    'Moscow'
]
const displayCities = (arr) => {
    arr.forEach((item)=>{
         return console.log('Citi: ' + item)
     })
}
displayCities(cities)


// forEach
// arr.forEach((item, index, array)=>{}) // возвращает undefined
// Напишите функцию displayCities, которая принимает массив городов и
// выводит в консоль City: 'CityName'.
// displayCities(cities)
// City: New York...

// map

// Дан массив:
// const array = [ '123', '456', '789' ]
// Используя метод map преобразуйте этот массив в следующий:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(arrToMatrix(array))

// Напишите функцию camelize, которая преобразует массив строк
// вида «my-short-string» в «myShortString»
// const strings = [
//     'font-size',
//     'background-color',
//     'border-radius',
//     'list-style-image',
//     'text-decoration'
// ]
// console.log(camelize(strings)) //  'fontSize', 'backgroundColor'...

// filter

// Напишите функцию jLanguages, которая возвращает массив слов, начинающихся с J
// const languages = [ 'Java', 'TypeScript', 'C#', 'JavaScript', 'Julia' ]
// console.log(jLanguages(languages)) //  'Java', 'JavaScript', 'Julia'

// Напишите функцию flatArr. Оставьте в нем только обычные элементы.
// const array = [ 1, 2, [ 3, 4 ], 'five', { a: 'test' } ]
// console.log(flatArr(array)) // 1, 2, 'five'

// Напишите функцию arrayDiff, должна удалять все значения из списка a,
// которые присутствуют в списке b, сохраняя их порядок
// const array1 = [ 1, 2, 2, 2, 3 ]
// const array2 = [ 2 ]
// console.log(arrayDiff(array1, array2)) // [1,3]

// reduce, reduceRight

// Напишите функцию sumOfNums, которая принимает массив и возвращает сумму всех чисел массива
// const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(sumOfNums(nums)) // 55

// Напишите функцию getAverageAge которая принимает массив объектов со свойством age
// и возвращает средний возраст.
// const users = [
//     { name: 'Bruce', age: 25 }, { name: 'Gloria', age: 19 },
//     { name: 'David', age: 33 }, { name: 'Alice', age: 21 },
// ]
// console.log(getAverageAge(users)) // 24.5

// Напишите функцию getUserNames которая принимает массив объектов users
// и возвращает массив имен пользователей.
// console.log(getUserNames(users)) // Bruce, Gloria, David, Alice

// Напишите функцию countSheeps, которая принимает массив булевых значений и возвращает
// количество truthy-значений
// const sheeps = [
//     true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
// ]
// console.log(countSheeps(sheeps)) // 17

// Новые методы массива 2023