import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
import { wishlist } from '../features/AppSlice'
import { Product } from '../models/response/ProductResponse'

const WishList = () => {
    const wishListProducts = useSelector(wishlist)

    return (
        <>
            <div className='tt-breadcrumb'>
                <div className='container container-lg-fluid'>
                    <ul>
                        <li>
                            <NavLink to='/'>Главная</NavLink>
                        </li>
                        <li>Избранное</li>
                    </ul>
                </div>
            </div>
            <div className='section-indent'>
                <div className='container container-lg-fluid'>
                    {wishListProducts.map((product: Product) => <ProductItem product={product} key={product.id} />)}

                </div>
            </div>
        </>
    )
}

export default WishList;