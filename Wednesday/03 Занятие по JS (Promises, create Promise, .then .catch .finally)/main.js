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


// pending


const server = {
    getData() {
        return new Promise((resolve, reject) => {
            //....
            setTimeout(() => {
                resolve('Some data Max')
                //reject('Some error Max')
            }, 1000)
        })
    }
}

const promise = server.getData()

// метод then
promise.then((data)=>{
    console.log('Then:',data)
})

// метод catch
promise.catch((err)=>{
    console.log('Catch:',err)
})

// метод finally
promise.finally(()=>{
    console.log('Finally result')
    }
)




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