// Arrays
// Упорядоченная структура данных

// const arr1 = ['black', 'purple', 'red']
// const arr2 = new Array('black', 'purple')
//
// console.log(arr1)
// console.log(arr2)
//
// const arr3 = new Array(10) // таким образом я задам длину для массива
// console.log(arr3)


// возвращаемый тип
// console.log(typeof [1, 2, 3]) // - object
// console.log(Array.isArray([1, 2, 3])) // - этот статический метод подтвердит что это массив
// console.log(Array.isArray({id: 1, title: 'Max'})) // false


// Доступ к елементам массива
const carBrands = ['Mercedes', 'BMW', 'Volkswagen', 'Lexus', 'Audi', 'Opel']
//console.log(carBrands[0])


// Перезапись элемента
// Заменить "BMW" на "Tesla"
// carBrands[1] = 'Tesla'
// console.log(carBrands)
// console.log(carBrands[-1]) // undefined


// Получение длины массива
// console.log(carBrands.length - 1)
// console.log(carBrands.at(-1))


// Деструктурирующее присваивание
//const [car1, car2] = carBrands
// console.log(car1)
// console.log(car2)
// console.log(carBrands)

// Записать в переменную car3 "Volkswagen"
//const [, , car3] = carBrands
//console.log(car3)

// rest
// Записать в переменную otherCars все остальные марки авто
// const [car1, car2, car3,...otherCars] = carBrands
// console.log(otherCars)


// default values
const [car = "Tesla"] = []
console.log(car) // "Tesla"


// Копирование массива
// 1
const carBrandsCopy = [...carBrands] // shallow copy
console.log(carBrandsCopy)


// 2
const carBrandsCopy2 = JSON.parse(JSON.stringify(carBrands)) // deep copy
console.log(carBrandsCopy2)

// 3
const carBrandsCopy3 = structuredClone(carBrands)
console.log(carBrandsCopy3)

// 4
const carBrandsCopy4 = Array.from(carBrands)
console.log(carBrandsCopy4)

//5  lodash deepClone


const array = [
    ['John', 'Sarah', 'Mike'],
    ['Coffee', 'Tea', 'Juice'],
    ['Sugar', 'Salt', 'Pepper']
]

const arrayCopy1 = [...array]
arrayCopy1[0][1] = 'Jack'
const arrayCopy2 = structuredClone(array)
arrayCopy2[1][2] = 'Lemonade'
const arrayCopy3 = Array.from(array)
arrayCopy3[2][3] = 'Vanilla'


console.log(array[0][1])
console.log(array[1][2])
console.log(array[2][3])


// Добавление удаление элементов
const numbers = [1, 2, 3, 4, 5]
// добввить 6 в конец массива
numbers.push(6)
console.log(numbers)

// Удалить последний элемент из массива
numbers.pop()
console.log(numbers)


const fruits = ['apple', 'banana', 'cherry']
// удалить первый элемент из массива
fruits.shift()
console.log(fruits)

// добавить "apple" элемент в начало массива
fruits.unshift("apple")
console.log(fruits)


// итерация по массивам
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for
// найти сумму всех элементов массива num
let sum = 0
for (let i = 0; i < num.length; i++) {
    sum += num[i]
}
console.log(sum)


// найти максимальное значение элемента в массиве num
let max = 0
for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i]
    }
}
console.log(max)


// for of
// объединить все строки в массиве строк в одну строку
const strings = ['hello', 'world', '!']
let combinedString = ''
for (const string of strings) {
    combinedString += string + ' '
}

console.log(combinedString) // Hello world !


// написать функцию map, которая работает аналогично методу map
const map = (array, callback) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array))
    }
    return result
}
// Дан массив со строками.Используя функцию map верните массив, сделав первую букву в словах заглавной
const arr = ['apple', 'banana', 'car', 'dog', 'elephant']

const arrNew = map(arr, (str) => {
    return str[0].toUpperCase() + str.slice(1)
})


console.log(arrNew) // 'Apple','Banana','Car','Dog','Elephant'


// Напишите функцию которая принимает массив и возвращает новый массив содержащий только имена

const people = [
    {name: 'John', age: 25},
    {name: 'Jone', age: 30},
    {name: 'Bob', age: 35},
    {name: 'Michel', age: 21},
    {name: 'Alice', age: 28}
]

const names = map(people, (person) => {
    return person.name
})

console.log(names)


// написать функцию filter, которая работает аналогично методу filter

const filter = (array, callback) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const equalTwo = filter(nums, (num) => num % 2 === 0)
console.log(equalTwo)


// вывести массив людей чей возраст больше 25 лет
const ageArray = filter(people, (person) => {
    return person.age > 25
})
console.log(ageArray)


const incllA = filter(people, (person) => person.name.toLowerCase().indexOf('a') !==-1)
console.log(incllA)












