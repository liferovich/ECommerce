export interface ProductResponse {
    products: Product[]
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    image: string,
    color: string,
    force: number,
    cross: string,
    maxlength: number,
    rezka: number,
    buhlength: number,
    volt: number,
    size: string,
    weight: number
}