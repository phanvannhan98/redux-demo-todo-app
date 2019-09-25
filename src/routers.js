import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import ProductActionPage from './pages/ProductActionPage';

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match,history}) => <ProductActionPage history={history} match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routers;