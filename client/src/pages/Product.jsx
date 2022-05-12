import { useParams, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  product,
  getProduct,
  getProducts,
  addCart,
  addWishList
} from '../features/AppSlice'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const appProduct = useSelector(product)

  const addToCartProduct = () => {
    if (appProduct.id) dispatch(addCart(appProduct))
  }

  const addToWishListProduct = () => {
    if (appProduct.id) dispatch(addWishList(appProduct))
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProduct(id))
  }, [id])

  return (
    <>
      <div className='tt-breadcrumb'>
        <div className='container container-lg-fluid'>
          <ul>
            <li>
              <NavLink to='/'>Главная</NavLink>
            </li>
            <li>
              <NavLink to='/catalog'>Каталог</NavLink>
            </li>
            <li>{appProduct?.name}</li>
          </ul>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='row'>
            <div className='col-5 col-lg-5 d-none d-sm-block'>
              <div className='tt-product-single-img'>
                <div>
                  <img
                    className='zoom-product'
                    src={appProduct?.image}
                    data-zoom-image='images/product/product-10.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-7 col-lg-7'>
              <div className='product-single-info'>
                <div className='tt-tag'>Каталог</div>
                <h1 className='tt-title'>{appProduct?.name}</h1>
                <div className='tt-add-info'>
                  <ul>
                    <li>
                      В наличии: <span>Да</span>
                    </li>
                  </ul>
                </div>
                <div className='tt-price'>{appProduct?.price} руб.</div>
                <div className='tt-data'>
                  <div className='tt-item'>
                    <div className='tt-rating'>
                      <i className='icon-favorite'></i>{' '}
                      <i className='icon-favorite'></i>
                      <i className='icon-favorite'></i>{' '}
                      <i className='icon-favorite'></i>{' '}
                      <i className='icon-favorite'></i>
                    </div>
                  </div>
                  <div className='tt-item'>
                    <a className='tt-link-simple' href='#'>
                      2 customer reviews
                    </a>
                  </div>
                </div>
                <div className='tt-description'>{appProduct?.description}</div>
                <div className='tt-row'>
                  <div className='tt-col'>
                    <div className='tt-input-counter style-01'>
                      <span className='minus-btn'>-</span>{' '}
                      <input type='text' value='1' />{' '}
                      <span className='plus-btn'>+</span>
                    </div>
                  </div>
                  <div className='tt-col'>
                    <button
                      className='tt-btn tt-btn__wide btn__color01'
                      onClick={addToCartProduct}
                    >
                      <span className='icon-808584'></span>Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='tt-tab-wrapper'>
            <ul className='nav nav-tabs tt-tabs-default' role='tablist'>
              <li className='nav-item'>
                <a
                  className='nav-link show active'
                  data-toggle='tab'
                  href='#tt-tab-01'
                  role='tab'
                >
                  Описание
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div
                className='tab-pane active fade'
                id='tt-tab-01'
                role='tabpanel'
              >
                {appProduct?.description}
                <ul className='tt-list01 tt-list-top'>
                  <li>Цвет: {appProduct?.color}</li>
                  <li>Мощность: {appProduct?.force} Вт/м</li>
                  <li>Поперечное сечение: {appProduct?.cross} мм</li>
                  <li>МАХ длина подключения: {appProduct?.maxlength} м</li>
                  <li>Кратность резки: {appProduct?.rezka} м</li>
                  <li>Длина рулона: {appProduct?.buhlength} м</li>
                  <li>Рабочее напряжение: {appProduct?.volt} V</li>
                  <li>Размер упаковки: {appProduct?.size} см</li>
                  <li>Вес упаковки: {appProduct?.weight} кг</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
