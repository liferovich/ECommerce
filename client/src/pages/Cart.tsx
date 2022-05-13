import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { cart, orderCost } from '../features/AppSlice'
import { Product } from '../models/response/ProductResponse'


const Cart = () => {
    const cartProducts = useSelector(cart)
    const totalOrderCost = useSelector(orderCost)

    const sendProductOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
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
                            <form className='order-form' id="formOrder" onSubmit={sendProductOrder}>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <h4>Данные получателя:</h4>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Email <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="email"
                                                    name="email" value=""
                                                    className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                ФИО <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="receiver"
                                                    name="receiver" value=""
                                                    className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Телефон <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="phone"
                                                    name="phone" value=""
                                                    className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Камментарии
                                            </label>
                                            <div className="col-md-8">
                                                <textarea name="comment" id="comment" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6" id="payments">
                                        <h4>Способ оплаты:</h4>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <div className="checkbox">
                                                    <label className="col-form-label payment input-parent">
                                                        <input type="radio" name="payment" value="Карта" id="payment_01" checked />
                                                        Картой
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="checkbox">
                                                    <label className="col-form-label payment input-parent">
                                                        <input type="radio" name="payment" value="Наличные" id="payment_02" />
                                                        Наличными
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-6" id="deliveries">
                                        <h4>Способ доставки:</h4>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <div className="checkbox">
                                                    <label className="col-form-label delivery input-parent">
                                                        <input type="radio" name="delivery" value="Почта" id="delivery_01" checked />
                                                        Почтой
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="checkbox">
                                                    <label className="col-form-label delivery input-parent">
                                                        <input type="radio" name="delivery" value="Курьер" id="delivery_02" />
                                                        Курьером
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <h4>Адрес доставки:</h4>

                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Индекс <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="index" name="index" value="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Город <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="city" name="city" value="" className="form-control" />
                                            </div>
                                        </div>

                                        < div className="form-group row input-parent">
                                            <div className="col-md-8 row no-gutters">
                                                <div className="col-6">
                                                    <input type="text" id="street" placeholder="Улица"
                                                        name="street" value=""
                                                        className="form-control" />
                                                </div>
                                                <div className="col-3">
                                                    <input type="text" id="build" placeholder="Дом"
                                                        name="build" value=""
                                                        className="form-control" />
                                                </div>
                                                <div className="col-3">
                                                    <input type="text" id="flat" placeholder="Квартира"
                                                        name="flat" value=""
                                                        className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className="mt-4 mb-4" />

                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end">
                                    <h4 className="mb-md-0">Стоимость заказа: <span id="ms2_order_cost">{totalOrderCost}</span> руб.</h4>
                                    <button type="submit" name="ms2_action" className="btn btn-lg btn-primary">
                                        Заказать
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>) : <p>Корзина пуста</p>}

                </div>
            </div >
        </>
    )
}

export default Cart;