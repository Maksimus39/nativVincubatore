// let array = [4, 10, 16, 240]
//
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index] / 2)
// }


// let summation = function (num) {
//     let sum = 0
//     for (let index = 0; index <= num; index++) {
//         console.log(sum = sum + index)
//     }
// }
// console.log(summation(8))

function countBy(x, n) {
    let z = []

    for (let index = 0; index <= n; index++) {
        z.push(x * index)
    }
    return z
}
//console.log(countBy(10,10))


// map, filter

const array = [2,3,4,5]

// let arrayCope = array.map(el=> el * 2)
const addArray = arr => {
    // return arr.map(el => el * 2)
    let a = []
    for  (let i = 0; i < arr.length; i++) {
        a.push(arr[i]*2)
    }
    return a
}
let b = addArray(array)

console.log(b)

const fu4 =(n)=>{
    return n+1
}
console.log(fu4(2))

let b = 35
console.log(fu4(b))