// import customer from './ts/task-1'
import { Storage } from './ts/task-2'
import StringBuilder from './ts/task-3'

// customer.setDiscount(0.15)
// console.log(customer.getDiscount()) // 0.15
// customer.addOrder(5000, 'Steak')
// console.log(customer.getBalance()) // 19750
// console.log(customer.getOrders()) // ["Burger", "Pizza", "Salad", "Steak"]

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator'])
console.log(storage.getItems()) // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid')
console.log(storage.getItems()) // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger')
console.log(storage.getItems()) // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner')
console.log(storage.getItems()) // ["Nanitoids", "Antigravitator", "Droid"]

const builder = new StringBuilder('.')
console.log(builder.getValue()) // "."
builder.padStart('^')
console.log(builder.getValue()) // "^."
builder.padEnd('^')
console.log(builder.getValue()) // "^.^"
builder.padBoth('=')
console.log(builder.getValue()) // "=^.^="
