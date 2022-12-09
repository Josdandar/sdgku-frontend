let productToBuy = prompt("Please type the product you want")
let quantity = Number(prompt("Please type the quantity you want"))
let priceToPay = Number(prompt("Please input a prrice"))

function receiptDisplay(item, price, qty){
    let total = 0
    price = price * 0.16
    total = price * quantity
    document.write(`<h1>The total amount for the ${item} will be ${total} for a quantity of ${qty}<h1>`)
}

receiptDisplay(productToBuy, priceToPay, quantity)