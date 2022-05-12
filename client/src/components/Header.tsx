import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="holder-top-mobile d-block d-md-none">
                <div className="h-topbox__content">
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-map-marker"></span></div>
                        <div className="tt-item__text">
                            <address>8494 Signal Hill Road Manassas, VA, 20110</address>
                        </div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-482948"></span></div>
                        <div className="tt-item__text"><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-telephone"></span></div>
                        <div className="tt-item__text">
                            <address><a href="tel:1(800)7654321">1 (800) 765-43-21</a></address>
                        </div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-clock-circular-outline-1"></span></div>
                        <div className="tt-item__text">Mon-Fri 08:00 AM - 05:00 PM, Sat-Sun</div>
                    </div>
                </div><a href="#" className="h-topbox__btn" id="js-toggle-h-holder"><i className="tt-arrow down"></i></a>
            </div>

            <div className="holder-top-desktop d-none d-md-block">
                <div className="container container-lg-fluid">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <div className="h-info01">
                                <div className="tt-item">
                                    <address><span className="icon-map-marker"></span>8494 Signal Hill Road Manassas, VA, 20110
                                    </address>
                                </div>
                                <div className="tt-item"><span className="icon-clock-circular-outline-1"></span>Mon-Fri 08:00 AM -
                                    05:00 PM</div>
                            </div>
                        </div>
                        <div className="col-auto ml-auto">
                            <div className="tt-obj">
                                <div className="h-info02">
                                    <div className="tt-item">
                                        <address><a href="tel:1(800)7654321"><span className="icon-telephone"></span>1 (800)
                                            765-43-21</a></address>
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
                                <a href="index.html" className="tt-logo tt-logo-alignment"><span
                                    className="tt-icon"><img src="images/logo.png" alt="" /></span>Electron</a>
                            </div>
                            <div className="tt-col-objects tt-col-wide text-center">

                                <nav id="tt-nav">
                                    <ul>
                                        <li><a href="index.html">
                                            <div className="electric-btn"><span className="text">Home</span>
                                                <div className="mask"><span>Home</span></div>
                                                <div className="mask"><span>Home</span></div>
                                                <div className="mask"><span>Home</span></div>
                                                <div className="mask"><span>Home</span></div>
                                                <div className="mask"><span>Home</span></div>
                                                <div className="mask"><span>Home</span></div>
                                            </div>
                                        </a></li>
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
                                        <li><a href="services.html">
                                            <div className="electric-btn"><span className="text">Services</span>
                                                <div className="mask"><span>Services</span></div>
                                                <div className="mask"><span>Services</span></div>
                                                <div className="mask"><span>Services</span></div>
                                                <div className="mask"><span>Services</span></div>
                                                <div className="mask"><span>Services</span></div>
                                                <div className="mask"><span>Services</span></div>
                                            </div>
                                        </a>
                                            <ul>
                                                <li><a href="services-item.html">Services Item</a></li>
                                                <li><a href="services-item.html">Sub menu level 01</a></li>
                                                <li><a href="services-item.html">Sub menu level 01</a>
                                                    <ul>
                                                        <li><a href="services-item.html">Sub menu level 02</a></li>
                                                        <li><a href="services-item.html">Sub menu level 02</a></li>
                                                        <li><a href="services-item.html">Sub menu level 02</a>
                                                            <ul>
                                                                <li><a href="services-item.html">Sub menu level 03</a></li>
                                                                <li><a href="services-item.html">Sub menu level 03</a></li>
                                                                <li><a href="services-item.html">Sub menu level 03</a></li>
                                                                <li><a href="services-item.html">Sub menu level 03</a></li>
                                                                <li><a href="services-item.html">Sub menu level 03</a></li>
                                                                <li><a href="services-item.html">Sub menu level 03</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="services-item.html">Sub menu level 02</a></li>
                                                        <li><a href="services-item.html">Sub menu level 02</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="services-item.html">Sub menu level 01</a></li>
                                                <li><a href="services-item.html">Sub menu level 01</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="prices.html">
                                            <div className="electric-btn"><span className="text">Prices</span>
                                                <div className="mask"><span>Prices</span></div>
                                                <div className="mask"><span>Prices</span></div>
                                                <div className="mask"><span>Prices</span></div>
                                                <div className="mask"><span>Prices</span></div>
                                                <div className="mask"><span>Prices</span></div>
                                                <div className="mask"><span>Prices</span></div>
                                            </div>
                                        </a></li>
                                        <li><a href="gallery.html">
                                            <div className="electric-btn"><span className="text">Gallery</span>
                                                <div className="mask"><span>Gallery</span></div>
                                                <div className="mask"><span>Gallery</span></div>
                                                <div className="mask"><span>Gallery</span></div>
                                                <div className="mask"><span>Gallery</span></div>
                                                <div className="mask"><span>Gallery</span></div>
                                                <div className="mask"><span>Gallery</span></div>
                                            </div>
                                        </a></li>
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
                                    <div className="tt-obj tt-obj-cart js-dropdown-cart"><a href="#" className="tt-obj__btn"><i
                                        className="icon-808584"></i>
                                        <div className="tt-obj__badge">2</div>
                                    </a>
                                        <div className="tt-obj__dropdown"></div>
                                    </div>
                                </div>
                                <div className="tt-col__item d-block d-lg-none"><a href="#" id="tt-menu-toggle"
                                    className="icon-545705"></a></div>
                                <div className="tt-col__item d-none d-lg-block"><a href="#" className="tt-btn btn__color01"
                                    data-toggle="modal" data-target="#modalMakeAppointment"><span
                                        className="icon-lightning"></span>Appointent</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
