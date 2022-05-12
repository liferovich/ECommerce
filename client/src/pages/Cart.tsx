import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { cart } from '../features/AppSlice'
import { Product } from '../models/response/ProductResponse'


const Cart = () => {
    const cartProducts = useSelector(cart)

    const sendProductOrder = () => { }

    return (
        <>
            <div className='tt-breadcrumb'>
                <div className='container container-lg-fluid'>
                    <ul>
                        <li>
                            <NavLink to='/'>Главная</NavLink>
                        </li>
                        <li>Корзина</li>
                    </ul>
                </div>
            </div>
            <div className='section-indent'>
                <div className='container container-lg-fluid'>
                    {cartProducts.length ? (<div className="cart__inner">
                        <div className="products tt-table01 tt-table-responsive-md">
                            <table className='cart-table' id='cartTable'>
                                <tr>
                                    <th></th>
                                    <th>Наименование</th>
                                    <th>Характеристики</th>
                                    <th>Удалить</th>
                                </tr>
                                {cartProducts.map((product: Product) => <CartItem product={product} key={product.id} />)}
                            </table>
                        </div>
                        <div className="order">
                            <form className='order-form' id="formOrder">

                            </form>
                        </div>
                    </div>) : <p>Корзина пуста</p>}

                </div>
            </div>
        </>
    )
}

export default Cart;