import React from 'react';
import { useSelector } from 'react-redux';
import { loggedIn } from './login';
import { signedIn } from './signup';
import { Link } from 'react-router-dom';
import '../Style/navigation.css';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => cartItems.reduce((qty, item) => qty * Number(item.qty), 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>E-Commerce Web</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/signup" className="cart-link">
            <span>SignUp</span>
          </Link>
        </li>
        <li>
          <Link to="/login" className="cart-link">
            <span>Login</span>
          </Link>
        </li>
        <li>
          {loggedIn ? (
            <Link to="/cart" className="cart-link">
              <i className="fas fa-shopping-cart" />
              <span>
                Cart
                <span className="Cart-badge">{getCartCount()}</span>
              </span>
            </Link>
          ) : null}
        </li>
        <li>
          {signedIn ? (
            <Link to="/" className="cart-link">
              <span>Shop</span>
            </Link>
          ) : null}
        </li>
      </ul>

      <div className="hamburger-menu" onClick={click}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
