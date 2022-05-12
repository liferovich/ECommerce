import { AnyAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { products, getProducts } from '../features/AppSlice'

const Catalog = () => {
  const dispatch = useDispatch()
  const appProducts = useSelector(products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <div className='tt-breadcrumb'>
        <div className='container container-lg-fluid'>
          <ul>
            <li>
            <NavLink to='/'>Главная</NavLink>
            </li>
            <li>Каталог</li>
          </ul>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='row'>
            <div
              className='col-md-4 col-lg-3 col-xl-3 leftColumn tt-aside'
              id='aside-js'
            >
              <div className='tt-block-aside tt-block-aside__shadow'>
                <h3 className='tt-aside-title'>Categories</h3>
                <div className='tt-aside-content'>
                  <nav className='nav-categories'>
                    <ul>
                      <li>
                        <a href='#'>Generators</a>
                      </li>
                      <li>
                        <a href='#'>Electronics</a>
                      </li>
                      <li>
                        <a href='#'>Extension Cords</a>
                      </li>
                      <li>
                        <a href='#'>Batteries &amp; Chargers</a>
                      </li>
                      <li>
                        <a href='#'>Electrical Tape &amp; Tools</a>
                      </li>
                      <li>
                        <a href='#'>Dimmers &amp; Receptacles</a>
                      </li>
                      <li>
                        <a href='#'>Wall Plates</a>
                      </li>
                      <li>
                        <a href='#'>Adapters &amp; Timers</a>
                      </li>
                      <li>
                        <a href='#'>Door Chimes &amp; Buttons</a>
                      </li>
                      <li>
                        <a href='#'>Plugs &amp; Connectors</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* <div className="tt-block-aside tt-block-aside__shadow">
                            <h3 className="tt-aside-title">Search</h3>
                            <div className="tt-aside-content">
                                <form className="form-default">
                                    <div className="tt-aside-search"><input type="text" placeholder="Product search" /> <a
                                            href="#" className="tt-btn-icon icon-search"></a></div>
                                </form>
                            </div>
                        </div> */}
              <div className='tt-block-aside tt-block-aside__shadow'>
                <h3 className='tt-aside-title'>Price</h3>
                <div className='tt-aside-content'>
                  <div className='tt-slider-price'>
                    <div id='slider-snap'></div>
                    <div className='slider-value-row'>
                      <div className='tt-title'>Price:</div>$
                      <div
                        id='slider-snap-value-lower'
                        className='slider-value'
                      ></div>
                      $
                      <div
                        id='slider-snap-value-upper'
                        className='slider-value'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tt-block-aside tt-block-aside__shadow'>
                <h3 className='tt-aside-title'>Popular</h3>
                <div className='tt-aside-content'>
                  <div className='tt-popular'>
                    <div className='tt-item'>
                      <div className='tt-item__img'>
                        <img src='images/product/product-01.jpg' alt='' />
                      </div>
                      <div className='tt-item__layout'>
                        <div className='tt-title'>
                          <a href='#'>
                            Woods WiOn 15 amps Receptacle and USB Charger
                          </a>
                        </div>
                        <div className='tt-value'>
                          <a href='#' className='tt-icon-btn'>
                            <i className='icon-808584'></i>
                          </a>
                          <div className='tt-price'>$41.99</div>
                        </div>
                      </div>
                    </div>
                    <div className='tt-item'>
                      <div className='tt-item__img'>
                        <img src='images/product/product-02.jpg' alt='' />
                      </div>
                      <div className='tt-item__layout'>
                        <div className='tt-title'>
                          <a href='#'>
                            Powerboss 3500 watts Gasoline Portable Generator
                          </a>
                        </div>
                        <div className='tt-value'>
                          <a href='#' className='tt-icon-btn'>
                            <i className='icon-808584'></i>
                          </a>
                          <div className='tt-price'>$329.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-9 col-xl-9'>
              <div className='section-title text-left'>
                <div className='section-title__01'>Каталог</div>
                <div className='section-title__02'>Световая продукция</div>
              </div>
              <div className='tt-filters-options'>
                <div className='row justify-content-between'>
                  <div className='col-auto ml-right'>
                    <div
                      className='tt-filters-toggle icon-icon-filter'
                      id='js-filters-toggle'
                    ></div>
                    <div className='tt-title'>Showing 1–9 of 18 results</div>
                    <div className='tt-filters-select'>
                      <div className='custom-select'>
                        <select>
                          <option>Default Sorting</option>
                          <option>Default Sorting 02</option>
                          <option>Default Sorting 03</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='tt-product-listing' className='tt-product-listing row'>
                {appProducts.map(product => (
                  <ProductItem product={product} key={product.id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog
