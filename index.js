const menu = [
    {name: 'Margaritta', price: 100},
    {name: 'Fajita', price: 90},
    {name: 'Tikka', price: 70},
    {name: 'Malai Boti', price: 120},
]

const cashInRegister = 100
const orderQueue = []
const nextOrderId = 1;

const addNewPizza = (pizzaObj) => {
    menu.push(pizzaObj);
}

const placeOrder = (pizzaName) => {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
    cashInRegister += selectedPizza.price;
    const newOrder = {orderId: nextOrderId++, pizza: selectedPizza, status: 'ordered'}
    orderQueue.push(newOrder);
    return newOrder;
}

const completeOrder = (orderId) => {
    const orderToComplete = orderQueue.find(order => order.id === orderId)
    orderToComplete.status = 'completed'
    return orderToComplete;
}

addNewPizza({name: 'chicken becon', cost: 32})
addNewPizza({name: 'mr pizza special', cost: 80})
addNewPizza({name: 'macroni pizza', cost: 190})

placeOrder('chicken becon')
completeOrder('1')

console.log("menu", menu)
console.log("cash in register", cashInRegister)
console.log("orderQueue", orderQueue)


