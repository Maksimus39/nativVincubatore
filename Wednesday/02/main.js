// замыкание, лексическое окружение, рекурсия
//globalLE { } -> null


// let car   // global { car: undefined } -> null
//
// car = 'bmw'  // global { car: ' bmw' } -> null
//
// function startEngine() {
//     // startEngineLE {} -> globalLE
//    const car = 'Kia'
//     // console.log(`Start ${car}`)
//     const foo = () => {
//         const model = '520'
//         console.log(`${car} ${model}`)
//     }
//     foo()
// }
//
// startEngine()
//
// car = 'Opel'
//
// startEngine()


// ------------------------------------------------------------------------------------------------------------------

// globalLE { baz : Function , a: undefined, someFunc: undefined}

// console.log(a)
// baz()
// //someFunc()
//
// const foo = () => { // globalLE { foo: Function }
//
// }
// const bar = function () {  // globalLE { foo: Function, bar: Function }
// }
//
// function baz() {
// }
//
// var a = 'a'
// var someFunc = function () {
//
// }
// const b = 'b'   // globalLE { foo: Function, bar: Function }
// console.log(b)
// let c = 'c'


// --------------------------------------------------------------------------------------------------------------- пример счётчика ----------------------------------------------------

// const counterCreator = () => {
//
//     let count = 0
//     return () => {        // это анонимная функция из - за return, и ей присваиваеться функция  counterCreator и вызвав её 3 раза мы обратились
//         console.log(++count)    // к переменной в её лексическом окружении, при первом проходе удаляется ссылка но запоминаеться значение и так
//     }                           // столько раз сколько вызываеться анонимная функция.
// }
//
// const counter1 = counterCreator()
// const counter2 = counterCreator()
//
// counter1()
// counter1()
// counter1()
//
// counter2()
// counter2()
// counter2()

// ----------------------------------------------------------------------------------- рекурсия -----------------------------------------------------------
// 2(4) -> 2*2(3) -> 2*2*2*2

// globalLE {  pow: Function }
const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
console.log(pow(22, 2))

// 5! => 5 * 4! => 5 * 4 * 3! => 5 * 4 * 3 * 2! => 5 * 4 * 3 * 2 * 1
const factorial = (n) => {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(6))









































