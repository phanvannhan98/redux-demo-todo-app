import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    showProduct = (product) => {
        var result = null;
        var statusClass = product.status ?  'label-warning' : 'label-danger';
        var statusContent = product.status ? 'Còn Hàng' : 'Hết Hàng';
        if (product) {
            return (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <span className={'label '+statusClass}>{statusContent}</span>
                    </td>
                    <td>
                        <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Sửa</Link>
                        <button onClick={() => this.onDelete(product.id)} type="button" className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            )
        }
        return result;
    }

    render() {
        return this.showProduct(this.props.product);
    }

}

export default ProductItem;