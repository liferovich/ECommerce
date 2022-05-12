import { useDispatch } from 'react-redux'
import { deleteCart } from '../features/AppSlice'
import { Product } from "../models/response/ProductResponse";

const CartItem = ({ product }: { product: Product }) => {
    const dispatch = useDispatch()

    const deleteFromCart = () => {
        dispatch(deleteCart(product))
    }

    return (
        <tr>
            <td>{product.image}</td>
            <td>{product.name}</td>
            <td>
                <ul className='tt-list01 tt-list-top'>
                    <li>Цвет: {product.color}</li>
                    <li>Мощность: {product.force} Вт/м</li>
                    <li>Размер упаковки: {product.size} см</li>
                    <li>Вес упаковки: {product.weight} кг</li>
                </ul>
            </td>
            <td><a className="tt-item__remove icon-rubbish-bin-delete-button" onClick={deleteFromCart}></a></td>
        </tr>
    )
}

export default CartItem;