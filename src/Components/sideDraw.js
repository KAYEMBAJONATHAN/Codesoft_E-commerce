import '../Style/sideDraw.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const SideDraw = ({ show, click }) => {
  const sideDrawClass = ['sidedraw'];

  if (show) {
    sideDrawClass.push('show');
  }

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems || [];

  const getCartCount = () => cartItems.reduce((qty, item) => qty + Number(item.qty), 0);

  return (
    <div className={sideDrawClass.join(' ')}>
      <ul className="sidedraw-links" onClick={click}>
        <li>
          <Link to="/">
            <i className="fas fa-shopping-cart" />
            <span>
              Cart
              <span className="sidedraw-cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

SideDraw.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default SideDraw;
