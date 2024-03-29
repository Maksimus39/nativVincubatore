// sort
const names = ["Bob", "Alex", "Donald", "Zak"]
// names.sort()
// console.log(names)
// 1. - сортирует строки по алфавиту из коробки без доп параметров


const names2 = ["Bob", "alex", "bob", "Alex", "Юрий", "Игорь", 1000]
names2.sort()
console.log(names2)
//2. - при таком способе сортировки идёт из коробки следующим образом
// лат алфавит (заглавные)
// лат алфавит (строчные)
// символы других алфавитов (заглавные - строчные)
// 3. работает мутабельно (сортирует массив на месте)

console.log(names2 === names2.sort()) // true - возвращает ссылку на исходный массив


// const sortNames = names.toSorted()
// console.log(names)
// console.log(sortNames)
// console.log(names === sortNames)
// этот способ у меня не сработал с этим методом массива
// 5 - метод toSorted сортирует


const numbers = [100, 9, 22, 77]
console.log(numbers.sort())
// 6 - для остальных случаев необходимо передать функцию сравнения


const compareFunc = (a, b) => {   // по убыванию
    // a = 3 b = 5 => 0
    // a = 5 b = 3 ( =5) => < 0

    if (a >= b) {
        return -5
    } else {
        return 10
    }
}
console.log(numbers.sort(compareFunc))


const compareFunc1 = (a, b) => {
    // и это по убыванию но с более понятным синтаксисом
    return b - a
    // return a-b
}
console.log(numbers.sort(compareFunc1))
// 7. функция сравнения должна возвращать число большее или меньшее ноля 0

// второй вариант разворота массива
console.log(numbers.reverse())


// а теперь сортировка массива объектов

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 55
    },
    {
        name: "Alex",
        age: 33,
        isMarried: true,
        scores: 36
    },
    {
        name: "Aalex",
        age: 33,
        isMarried: true,
        scores: 36
    },
    {
        name: "Max",
        age: 10,
        isMarried: false,
        scores: 20
    },
    {
        name: "Kat",
        age: 36,
        isMarried: true,
        scores: 75
    },
    {
        name: "Sergey",
        age: 50,
        isMarried: false,
        scores: 63
    },
]
// сортировка по возрасту
console.log(students.sort((a, b) => a.age - b.age))

// сортировка по алфавиту
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))


// СОРТИРОВКА ПУЗЫРЬКОМ

const numbersS = [23, 56, 34, 67, 88, 89, 20, 1, 9, 458, 452, 123, 983, 0, 12, 57] // по возрастанию

let count = 0
for (let j = 0; j < numbersS.length - 1; j++) {
    count++
    let isSorted = true
    for (let i = 0; i < numbersS.length - 1 - j; i++) {
        if (numbersS[i] > numbersS[i + 1]) {
            isSorted = false;
                // const temp = numbersS[i]
                // numbersS[i] = numbersS[i + 1]
                // numbersS[i + 1] = temp
                [numbersS[i + 1], numbersS[i]] = [numbersS[i], numbersS[i + 1]]
        }
        count++
    }
    if (isSorted) break
}
console.log(numbersS)
console.log(count)



