import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class ProductListPage extends Component {
    
    componentDidMount() {
        if (this.props.products.length === 0) {
            this.props.getProducts();
        }
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} onDelete={this.onDelete} />
                )
            });
        }
        return result;
    }

    onDelete = (id) => {
        this.props.deleteProduct(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <Link to="/product/add" className="btn btn-info">Thêm Sản Phẩm</Link>
                </div>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProducts: () => {
            dispatch(action.actGetProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(action.actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)