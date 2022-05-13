import { AxiosResponse } from 'axios';
import api from '../http';
import { ProductResponse } from '../models/response/ProductResponse';

export default class ProductService {
    static async getProducts(category: string): Promise<AxiosResponse<ProductResponse>> {
        return api.post<ProductResponse>(`/products/category`, { category });
    }
}
