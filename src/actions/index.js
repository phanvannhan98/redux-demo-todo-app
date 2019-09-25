import * as Types from './../contains/ActionTypes';
import callAPI from '../utils/apiCaller';

export const actGetProductsRequest = () => {
    return (dispatch) => {
        return callAPI('products').then((res) => {
            dispatch(actGetProducts(res.data));
        });
    }
}

export const actGetProducts = (products) => {
    return {
        type: Types.GET_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('products', 'POST', product).then((res) => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callAPI(`products/${product.id}`, 'PUT', product).then((res) => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

