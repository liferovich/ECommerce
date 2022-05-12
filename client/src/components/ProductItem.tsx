import { NavLink } from "react-router-dom";
import { Product } from "../models/response/ProductResponse";
import { useDispatch } from 'react-redux'
import {
    addCart,
    addWishList
} from '../features/AppSlice'

const ProductItem = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    const addToCartProduct = () => {
        dispatch(addCart(product))
    }

    const addToWishListProduct = () => {
        dispatch(addWishList(product))
    }

    return (<>
        <div className="col-6 col-md-4 tt-col-item">
            <div className="tt-product">
                <div className="tt-product__img">
                    <NavLink to={"/product/" + product.id}>
                        <img src={product.image} alt="" />
                    </NavLink>
                </div>
                <div className="tt-product__description">
                    <h2 className="tt-product__title">
                        <NavLink to={"/product/" + product.id}>{product.name}</NavLink>
                    </h2>
                    <div className="tt-price">{product.price} руб.</div>
                    <div className="tt-row-btn">
                        <a href="#" className="tt-btn-addtocart" onClick={addToCartProduct}><i
                            className="tt-icon icon-808584"></i>в корзину</a>
                    </div>
                </div>
            </div>
        </div></>)
}

export default ProductItem;