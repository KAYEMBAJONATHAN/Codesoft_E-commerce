import React from "react";
import { Link } from "react-router-dom";
import '../Style/navigation.css';

const Navbar = () => {
    return(
       <nav className="navbar">
         <div className="navbar-logo">
            <h1>E-Commerce Web</h1>
         </div>
          <ul className="navbar-links">
            <li>
                <Link to="/cart" className="cart-link">
                    <i className="fas fa-shopping-cart"></i>
                  <span>
                   Cart
                  <span className="Cart-badge">0</span>
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

          <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
       </nav>
    );
}

export default Navbar;