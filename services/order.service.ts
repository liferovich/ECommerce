import { sequelize } from '../database/database.state';

type OrderType = {
    name: string,
    address: string,
    products: number[]
}

class OrderService {
    async addOrder(order: OrderType) {
        const newOrder = await sequelize.model('Order').create(order);

        return newOrder;
    }
}

export default new OrderService();