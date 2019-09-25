import React, { Component } from 'react';
import callAPI from './../utils/apiCaller';
import { Link } from 'react-router-dom';
import * as action from './../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtGia: '',
            chkStatus: false
        }
    }

    componentDidMount() {
        if (this.props.match) {
            var id = parseInt(this.props.match.params.id);
            callAPI(`products/${id}`, 'GET', null).then((res) => {
                this.setState({
                    id: res.data.id,
                    txtName: res.data.name,
                    txtGia: res.data.price,
                    chkStatus: res.data.status
                })
            });

        }
    }

    onChange = (e) => {
        e.target.type === 'checkbox' ? this.setState({ [e.target.name]: e.target.checked }) : this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var ob = {
            id: this.state.id,
            name: this.state.txtName,
            price: this.state.txtGia,
            status: this.state.chkStatus
        }
        if (!this.state.id) {
            if (ob.name !== '' && ob.price !== '') {
                this.props.addProduct(ob);
                this.props.history.goBack();
            }
        } else {
            this.props.updateProduct(ob);
            this.props.history.goBack();
        }
    }

    render() {
        var submit = this.state.id !== '' ? 'Cập Nhật' : 'Thêm';
        var { txtName, txtGia, chkStatus } = this.state;
        return (
            <div className="container">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên Sản Phẩm:</label>
                            <input value={txtName} onChange={this.onChange} type="text" className="form-control" name='txtName' />
                        </div>
                        <div className="form-group">
                            <label>Giá:</label>
                            <input value={txtGia} onChange={this.onChange} type="text" className="form-control" name='txtGia' />
                        </div>
                        <div className="form-group">
                            <label>
                                <input checked={chkStatus} onChange={this.onChange} type="checkbox" name='chkStatus' />
                                Còn Hàng
                            </label>
                        </div>
                        <div className="btn-group">
                            <Link to='/product-list' className="btn btn-danger"> Trở lại </Link>
                            <button type="submit" className="btn btn-primary">{submit}</button>
                        </div>

                    </form>
                </div>
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
        addProduct: (product) => {
            dispatch(action.actAddProductRequest(product));
        },
        getProducts: () => {
            dispatch(action.actGetProductsRequest());
        },
        updateProduct: (product) => {
            dispatch(action.actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)