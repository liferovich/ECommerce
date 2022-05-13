import { sequelize } from '../database/database.state';

type ProductType = {
    category: string,
    name: string,
    description: string,
    price: string,
    image: string,
    color: string,
    force: number,
    cross: string,
    maxlength: number,
    rezka: number,
    buhlength: number,
    volt: number,
    size: string,
    weight: number,
}

class ProductService {
    async getProducts() {
        let products = await sequelize.model('Product').findAll();

        if (!products) {
            products = [];
        }

        return products;
    }

    async getProductsByCategory(category: string) {
        let products = await sequelize.model('Product').findAll({
            where: {
                category
            }
        });

        if (!products) {
            products = [];
        }

        return products;
    }

    async addProduct(product: ProductType) {
        const newProduct = await sequelize.model('Product').create(product);

        return newProduct;
    }
}

export default new ProductService();