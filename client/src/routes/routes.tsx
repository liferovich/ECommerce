import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import HomePage from '../pages/HomePage';
import Product from '../pages/Product';
import WishList from '../pages/WishList';

export function useRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}
