import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
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
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart" />
            <span>
              Cart
              <span className="Cart-badge">{getCartCount}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cart-link">
            <span>
              Shop
            </span>
          </Link>
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
