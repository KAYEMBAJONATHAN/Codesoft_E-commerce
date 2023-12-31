import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Style/cartitem.css';

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => (
  <div className="cartitem">
    <div className="cart-image">
      <img
        src={item.imageUrl}
        alt={item.name}
      />
    </div>

    <Link
      to={`/product/${item.product}`}
      className="cart-name"
    >
      <p>{item.name}</p>
    </Link>
    <p className="cart-price">
      $
      {item.price}
    </p>

    <select
      className="cart-select"
      value={item.qty}
      onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
    >
      {[...Array(item.countInStock).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>

    <button
      type="button"
      className="cart-deleteBtn"
      onClick={() => removeFromCart(item.product)}
    >
      <i className="fas fa-trash" />
    </button>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    countInStock: PropTypes.number.isRequired,
  }),
  qtyChangeHandler: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
