export class Item {
    id: number
    quantity: number
    price: number
    image: string
    description: string
    name: string

    constructor(
        id: number,
        quantity: number,
        price: number,
        image: string,
        description: string,
        name: string
    ){
        this.id = id
        this.quantity = quantity
        this.price = price
        this.image = image
        this.description = description
        this.name = name
    }
}
