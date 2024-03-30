// Arrays
// Упорядоченная структура данных

const arr1 = ['black', 'purple', 'red']
const arr2 = new Array('black', 'purple')

console.log(arr1)
console.log(arr2)

const arr3 = new Array(10) // таким образом я задам длину для массива
console.log(arr3)


// возвращаемый тип
console.log(typeof [1, 2, 3]) // - object
console.log(Array.isArray([1, 2, 3])) // - этот статический метод подтвердит что это массив
console.log(Array.isArray({id: 1, title: 'Max'})) // false


// Доступ к елементам массива
const carBrands = ['Mercedes', 'BMW', 'Volkswagen', 'Lexus', 'Audi', 'Opel']
console.log(carBrands[0])


// Перезапись элемента
// Заменить "BMW" на "Tesla"
carBrands[1] = 'Tesla'
console.log(carBrands)
console.log(carBrands[-1]) // undefined



// Получение длины массива
console.log(carBrands.length)















































