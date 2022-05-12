import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { cartLength } from '../features/AppSlice'

export const Header = () => {
    const productCartLength = useSelector(cartLength)


    return (
        <header>
            <div className="holder-top-mobile d-block d-md-none">
                <div className="h-topbox__content">
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-map-marker"></span></div>
                        <div className="tt-item__text">
                            <address>220015, г. Минск, ул. Пономаренко, д.35А, офис 224</address>
                        </div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-482948"></span></div>
                        <div className="tt-item__text"><a href="mailto:svetomir2015@mail.ru">svetomir2015@mail.ru</a></div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-telephone"></span></div>
                        <div className="tt-item__text">
                            <address><a href="tel:+375(29) 151-11-02">+375(29) 151-11-02</a></address>
                        </div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-clock-circular-outline-1"></span></div>
                        <div className="tt-item__text">Пн-Пт 09:00 - 18:00</div>
                    </div>
                </div><a href="#" className="h-topbox__btn" id="js-toggle-h-holder"><i className="tt-arrow down"></i></a>
            </div>

            <div className="holder-top-desktop d-none d-md-block">
                <div className="container container-lg-fluid">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <div className="h-info01">
                                <div className="tt-item">
                                    <address><span className="icon-map-marker"></span>220015, г. Минск, ул. Пономаренко, д.35А, офис 224
                                    </address>
                                </div>
                                <div className="tt-item"><span className="icon-clock-circular-outline-1"></span>Пн-Пт 09:00 - 18:00</div>
                            </div>
                        </div>
                        <div className="col-auto ml-auto">
                            <div className="tt-obj">
                                <div className="h-info02">
                                    <div className="tt-item">
                                        <address><a href="tel:1(800)7654321"><span className="icon-telephone"></span>+375(29) 151-11-02</a></address>
                                    </div>
                                </div>
                            </div>
                            <div className="tt-obj tt-obj-cart js-dropdown-cart"><a href="#" className="tt-obj__btn"><i
                                className="icon-808584"></i>
                                <div className="tt-obj__badge">2</div>
                            </a>
                                <div className="tt-obj__dropdown"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="js-init-sticky">
                <div className="tt-holder-wrapper">
                    <div className="container container-lg-fluid">
                        <div className="tt-holder">
                            <div className="tt-col-logo">
                                <NavLink to='/' className="tt-logo tt-logo-alignment"><span
                                    className="tt-icon"><img src="images/logo.png" alt="" /></span>СветомирБай</NavLink>
                            </div>
                            <div className="tt-col-objects tt-col-wide text-center">

                                <nav id="tt-nav">
                                    <ul>
                                        <li>
                                            <NavLink to="/">
                                                <div className="electric-btn"><span className="text">Главная</span>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <div className="electric-btn"><span className="text">Каталог</span>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                </div>
                                            </NavLink>
                                            {/* <ul>
                                                <li><NavLink to="/catalog">Светодиодные ленты</NavLink></li>
                                            </ul> */}
                                        </li>
                                        <li><a href="about.html">
                                            <div className="electric-btn"><span className="text">About Us</span>
                                                <div className="mask"><span>About Us</span></div>
                                                <div className="mask"><span>About Us</span></div>
                                                <div className="mask"><span>About Us</span></div>
                                                <div className="mask"><span>About Us</span></div>
                                                <div className="mask"><span>About Us</span></div>
                                                <div className="mask"><span>About Us</span></div>
                                            </div>
                                        </a>
                                            <ul>
                                                <li><a href="testimonials.html">Testimonials</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">
                                            <div className="electric-btn"><span className="text">Blog</span>
                                                <div className="mask"><span>Blog</span></div>
                                                <div className="mask"><span>Blog</span></div>
                                                <div className="mask"><span>Blog</span></div>
                                                <div className="mask"><span>Blog</span></div>
                                                <div className="mask"><span>Blog</span></div>
                                                <div className="mask"><span>Blog</span></div>
                                            </div>
                                        </a>
                                            <ul>
                                                <li><a href="blog-item.html">Blog Item</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">
                                            <div className="electric-btn"><span className="text">Shop</span>
                                                <div className="mask"><span>Shop</span></div>
                                                <div className="mask"><span>Shop</span></div>
                                                <div className="mask"><span>Shop</span></div>
                                                <div className="mask"><span>Shop</span></div>
                                                <div className="mask"><span>Shop</span></div>
                                                <div className="mask"><span>Shop</span></div>
                                            </div>
                                        </a>
                                            <ul>
                                                <li><a href="shop-item.html">Shop Item</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="faq.html">
                                            <div className="electric-btn"><span className="text">FAQ</span>
                                                <div className="mask"><span>FAQ</span></div>
                                                <div className="mask"><span>FAQ</span></div>
                                                <div className="mask"><span>FAQ</span></div>
                                                <div className="mask"><span>FAQ</span></div>
                                                <div className="mask"><span>FAQ</span></div>
                                                <div className="mask"><span>FAQ</span></div>
                                            </div>
                                        </a></li>
                                        <li><a href="contact.html">
                                            <div className="electric-btn"><span className="text">Contacts</span>
                                                <div className="mask"><span>Contacts</span></div>
                                                <div className="mask"><span>Contacts</span></div>
                                                <div className="mask"><span>Contacts</span></div>
                                                <div className="mask"><span>Contacts</span></div>
                                                <div className="mask"><span>Contacts</span></div>
                                                <div className="mask"><span>Contacts</span></div>
                                            </div>
                                        </a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="tt-col-objects">
                                <div className="tt-col__item d-block d-lg-none">
                                    <div className="tt-obj tt-obj-cart js-dropdown-cart">
                                        <NavLink to="/cart" className="tt-obj__btn"><i
                                            className="icon-808584"></i>
                                            <div className="tt-obj__badge">{productCartLength}</div>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
