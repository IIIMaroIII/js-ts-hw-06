interface Customer {
  username: string
  balance: number
  discount: number
  orders: string[]
  getBalance: () => number
  getDiscount: () => number
  setDiscount: (value: number) => void
  getOrders: () => string[]
  addOrder: (cost: number, order: string) => void
}

const customer: Customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance
  },
  getDiscount() {
    return this.discount
  },
  setDiscount(value) {
    this.discount = value
  },
  getOrders() {
    return this.orders
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount
    this.orders.push(order)
  },
  // Change code above this line
}

export default customer
