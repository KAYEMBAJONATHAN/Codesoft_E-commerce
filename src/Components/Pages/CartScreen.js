import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../cartItem';
import { addToCart, removeFromCart } from '../../redux/Actions/cartAction';
import './cartscreen.css';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    console.log('checkout');
  };

  const getCartCount = () => (cartItems || []).reduce((qty, item) => Number(item.qty) + qty, 0);

  const getCartSubTotal = () => (cartItems || []).reduce((price, item) => (item.price * item.qty) + price, 0);

  return (
    <div className="cartscreen">
      <div className="cartscreen-left">
        <h2>Shopping Cart</h2>
        {(!cartItems || cartItems.length === 0) ? (
          <div>
            Your cart is empty
            <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            item && item.imageUrl && (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeFromCart={removeHandler}
              />
            )
          ))
        )}
      </div>
      <div className="cartscreen-right">
        <div className="cartscreen-info">
          <p>
            SubTotal(
            {getCartCount()}
            )
            items
          </p>
          <p>
            $
            {getCartSubTotal().toFixed(2)}
          </p>
        </div>
        <div>
          <button type="button" onClick={handleCheckout()}>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
