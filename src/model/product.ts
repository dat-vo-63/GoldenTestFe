export class Product {
    productId: number
    productName: string
    productPrice: number
    image: string
    description: string

    constructor(
        productId: number,
        productName: string,
        productPrice: number,
        image: string,
        description: string
    ){
        this.productId = productId
        this.productName = productName
        this.productPrice = productPrice
        this.image = image
        this.description = description
    }
}
