// publisher  /  subscriber

const store = {
    _subscribers: [],
    dispatch(action) {
        // store changed
        this._subscribers.forEach(rerender => rerender())
    },
    subscribe(subscriber) {
        this._subscribers.push(subscriber)
    }
}
store.subscribe(function subscriber() {
}) // стор изменился
promise.then(function subscriber() {
})    // промис зарезолвился
setTimeout(function subscriber() {
}, 1000) // прошла секунда
button.addEventListener('click', function subscriber() {
}) // роизошёл клик п кнопке


subscriber == observer == listener == watcher == handler

const button = {
    _subscribers: {
        'click': [],
        'doubleClick': [],
        'onFocus': []
    },
    click() {
        this._subscribers['click'].forEach((subscriber) => subscriber())
    },
    doubleClick() {
        this._subscribers['doubleClick'].forEach((subscriber) => subscriber())
    },
    onFocus() {
        this._subscribers['onFocus'].forEach((subscriber) => subscriber())
    },
    addEventListener(eventName, subscriber) {
        this._subscribers[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber){
        this._subscribers[eventName] =  this._subscribers[eventName].filter((sub)=>sub !=subscriber)
    }
}
const show =  ()=>  console.log('show cars')
const request =  ()=> console.log('start request')


button.addEventListener('click', show)
button.addEventListener('click', request)

button.click()

button.removeEventListener('click',request)
console.log('after removeEventListener')

button.click()

const cars = [
    {id: 1, brand: 'bmw'},
    {id: 2, brand: 'opel'},
    {id: 3, brand: 'kia'},
    {id: 4, brand: 'bmw'},
    {id: 5, brand: 'Lada'}
];

const bmwCar=[...cars].reverse().find(car=>car.brand==='Lada')
console.log(bmwCar)

const newBmwCar=cars.findLast(car=>car.brand==='bmw')
console.log(newBmwCar)

const reverserCars = cars.toSorted()
console.log(cars)
 console.log(reverserCars)



































