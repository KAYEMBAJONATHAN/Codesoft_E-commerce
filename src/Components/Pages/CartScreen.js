import CartItem from '../cartItem';
import '../Pages/cartscreen.css';

const CartScreen = () => {
    return(
        <div className="cartscreen">
            <div className="cartscreen-left">
                <h2>Shopping Cart</h2>

              <CartItem />
            </div>
            <div className="cartscreen-right">
              <div className="cartscreen-info">
                <p>SubTotal (0) items</p>
                <p>$388.99</p>
              </div>
              <div>
                <button>Proceed To Checkout</button>
              </div>
            </div>
        </div>
    );
}

export default CartScreen;