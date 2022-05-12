export const Footer = () => {
    return (
        <footer id="tt-footer">
            <div className="footer-wrapper">
                <div className="container container-lg-fluid container-lg__no-gutters">
                    <form id="subscribeform" method="post" action="#">
                        <div className="f-form">
                            <div className="f-form__label">Subscribe to Our Newsletter</div>
                            <div className="f-form__input"><input type="text" name="email" className="form-control"
                                placeholder="Your e-mail address" /></div>
                            <div className="f-form__btn"><button className="tt-btn btn__color02" type="submit"><span
                                className="icon-482948 tt-icon-left"></span> Subscribe &nbsp;<span
                                    className="tt-short-text">now</span></button></div>
                        </div>
                    </form>
                </div>
                <div className="container container-lg-fluid container-lg__no-gutters">
                    <div className="f-holder row no-gutters">
                        <div className="col-xl-7">
                            <div className="additional-strut">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="f-logo"><a href="index.html" className="f-logo"><span className="tt-icon">
                                            <img src="images/logo-dark.png" alt="" /></span><span
                                                    className="tt-text">Electron</span></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-7">
                                        <div className="f-info-text">Our experienced electricians are highly trained in all
                                            aspects of electrical service, from office lighting and security systems to
                                            emergency repair.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-5">
                                    <nav className="f-nav" id="f-nav">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Prices</a></li>
                                            <li><a href="#">Contacts</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-sm-6 col-md-7">
                                    <ul className="f-info-icon">
                                        <li><span className="icon-map-marker"></span> 8494 Signal Hill Road Manassas,<br></br>VA,
                                            20110</li>
                                        <li><span className="icon-clock-circular-outline-1"></span> Mon-Fri 08:00 AM - 05:00 PM
                                        </li>
                                        <li><a href="tel:1(800)7654321"><span className="icon-telephone"></span> 1 (800)
                                            765-43-21</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="map"></div>
                    <div className="f-copyright row no-gutters">
                        <div className="col-sm-auto">&copy; 2020 Electrical Services. All Rights Reserved.</div>
                        <div className="col-sm-auto ml-sm-auto">
                            <ul className="f-social">
                                <li><a href="#" className="icon-twitter-logo-button"></a></li>
                                <li><a href="#" className="icon-facebook-logo-button"></a></li>
                                <li><a href="#" className="icon-instagram-logo"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}