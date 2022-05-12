import { AxiosResponse } from 'axios';
import api from '../http';
import { ProductResponse } from '../models/response/ProductResponse';

export default class ProductService {
    static async getProducts(): Promise<AxiosResponse<ProductResponse>> {
        return api.get<ProductResponse>(`/products/`);
    }
}
