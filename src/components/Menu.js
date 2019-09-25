import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({ lable, to, exxx }) => {
    return (
        <Route path={to} exact={exxx} children={({ match }) => {
            var active = match ? 'nav-item active' : 'nav-item';
            return (
                <li className={active}>
                    <Link to={to} className="nav-link">{lable}</Link>
                </li>
            )
        }} />
    )
};

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="/">Call API</a>
                <ul className="nav navbar-nav">
                    <MenuLink to="/" lable="Trang Chủ" exxx={true}/>
                    <MenuLink to="/product-list" lable="Danh sách sản phẩm" exxx={false}/>
                </ul>
            </div>
        );
    }
}

export default Menu;