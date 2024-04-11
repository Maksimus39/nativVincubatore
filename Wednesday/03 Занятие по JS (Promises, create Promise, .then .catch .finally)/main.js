// promise

// const fetch = (url, callback) => {
//     // ......
//
//     callback(err, data)
// }
//


// fetch('https://books.com/authors', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fetch('https://books.com/authors/75', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 fetch('https://books.com/authors/75/books', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         fetch('https://books.com/authors/75/books/102', (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                                 fetch('https://books.com/authors/75/books/102/p333', (err, data) => {
//                                     if (err) {
//                                         console.log(err)
//                                     } else {
//
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// fetch('https://books.com/authors')
//     .then((data) => {
//         return fetch('https://books.com/authors/75')
//     })
//     .then((data) => {
//         return fetch('https://books.com/authors/75/books')
//     })
//     .then((data) => {
//         return fetch('https://books.com/authors/75/books/102')
//     })
//     .then((data) => {
//         return fetch('https://books.com/authors/75/books/102/p333')
//     }).catch((err) => {
//     console.log(err)
// })







// pending

// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//             //....
//             setTimeout(() => {
//                 resolve('some data')
//                 // reject('Some error')
//             }, 1000)
//         })
//     }
// }
//
// const promise = server.getData()
//
// // метод then
// promise
//     .then((data) => {
//         console.log('Then1 ', data)
//         return 10
//     })
//     .then((data) => {
//         console.log('Then2 ', data)
//        // throw new Error('Error')
//     })
//     .then((data) => {
//         console.log('Then3 ', data)
//     })
//     .catch(((error) => {
//         console.log('Catch1 ', error)
//         //throw new Error('Error')
//         return 20
//     }))
//     .finally((data)=>{
//         console.log('Finally ',data)
//         return 30
//     })
//     .then((data) => {
//         console.log('Then4 ', data)
//     })
//     .catch(((error) => {
//         console.log('Catch2 ', error)
//     }))
//     .finally((data)=>{
//         console.log('Finally2 ',data)
//         return 30
//     })


// // метод catch
// promise.catch((err)=>{
//     console.log('Catch:',err)
// })
//
// // метод finally
// promise.finally(()=>{
//     console.log('Finally result')
//     }
// )


// function newPromise(callback) {
//     const resolve = (result) => {
//         return {
//             state: 'fulfilled',
//             result: result
//         }
//     }
//
//     const reject = (error) => {
//         return {
//             state: 'rejected',
//             result: error
//         }
//     }
//
//     callback(resolve, reject)
// }


// const fs = require('fs')
//
// const readFile = (path) => {
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path,(err,file)=>{
//             if(err){
//                 reject(err)
//             }else {
//                 resolve(file)
//             }
//         })
//     })
// }
//
// const promise=readFile('./index.js')




// Задачки на промисы

// Напиши функцию delay(ms), коьорая возвращает промис в состояние resolved через ms - миллисекунду
// Пример использования


// неверно
// const delay0={
//     getPr(){
//         return new Promise((resolve, reject)=>{
//             // ........
//             setTimeout(()=>{
//                 resolve ('server data')
//             },10)
//         })
//     }
// }




// верно
const delay = (time) => {
  return new Promise((resolve,reject)=>{
      setTimeout(resolve,time)
  })
}
delay(4000).then(()=>{
    console.log('Hello Promise')
})