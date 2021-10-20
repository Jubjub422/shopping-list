const shoppingArray = [
    {
        id: 1,
        name: "Fried Chicken",
        price: 5,
        healthy: false


    },
    {
        id: 2,
        name: "Lettuce",
        price: 7,
        healthy: true

    },
    {
        id: 3,
        name: "Nutella",
        price: 3,
        healthy: false

    },
    {
        id: 4,
        name: "Hummus",
        price: 4,
        healthy: true

    }
]

const bread = {
    name: "Bread",
    price: 9,
    healthy: true,
    dateAdded: "10/6/2021"
}

const addToShoppingList = (newItem) => {
    const lastIndex = shoppingArray.length - 1
    const currentLastItem = shoppingArray[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

    newItem.id = idForNewItem
    shoppingArray.push(newItem)
}

addToShoppingList(bread)

// console.log(shoppingArray)


for (const itemObj of shoppingArray) {
    if (itemObj.price > 8) {
        console.log(`${itemObj.name} costs more than $8.`)
    }
}
