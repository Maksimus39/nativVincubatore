// pending | fulfilled | rejected

// const myPromise = new Promise((resolve, reject) => {
//     // асинхронная логика
//     setTimeout(() => {
//         resolve('some data')
//         reject('error')
//     }, 2000)
// })
// console.log(myPromise)
//
// function NewPromise(executor) {
//     function resolve(data) {
//         return {
//             state: 'fulfilled',
//             response: data
//         }
//     }
//
//     function reject(data) {
//         return {
//             state: 'rejected',
//             response: data
//         }
//     }
//
//     executor(resolve, reject)
// }

// const fs = require('fs')
//
// const filesAxios={
//     readFile(){
//         return new Promise((resolve, reject) => {
//             fs.readFile('./index.html',(err,file)=>{
//                 if(err){
//                     reject('Some error',err)
//                 }else {
//                     resolve(file)
//                 }
//             })
//         })
//     }
// }
//
//  filesAxios.readFile()


const server = {
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('Some data')
                 reject('Some error: ')
            }, 2000)
        })
    }
}

server
    .getData()
    .catch((t) => t + 'catch1')
    .catch((t) => t + 'catch2')
    .catch((t) => t + 'then1')
    .finally((t) => t + 'finally')
    .then((t) => console.log(t))


//const promise1 = server.getData()

// обработка промиса

// server
//     .getData()
//     .then((data) => {
//         console.log('THEN:', data)
//         return data
//     })
//     .then((data) => {
//         console.log('THEN2:', data)
//     })
//     .catch((err) => {
//         console.log('CATCH1', err)
//         return b
//     })
//     .then((data) => {
//         console.log('THEN3:', data)
//         return 30
//     })
//     .catch(() => {
//         console.log('CATCH2:',)
//         return 40
//     })
//     .finally((data) => {
//         console.log('FINALLY', data)
//         return 20
//     })
//     .then((data) => {
//         console.log('THEN4:', data)
//     })
//     .catch(()=>{
//         console.log('CATCH3')
//     })

// server
//     .getData()
//     .then((data) => {
//         console.log('THEN:', data)
//         return new Promise((res)=>{
//             setTimeout(()=>{
//                 res('Some data2')
//             },3000)
//         })
//     })
//     .then((data) => {
//         console.log('THEN2:', data)
//     })


// Задача

// const delay = (ms)=>new Promise((res)=>setTimeout(()=>res('resolve'),ms));
//
// delay(2000).then((data)=>{
//     console.log(data);
// })








































