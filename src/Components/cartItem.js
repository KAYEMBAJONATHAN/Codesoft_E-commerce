
import { Link } from 'react-router-dom';
import '../Style/cartitem.css';

const CartItem = () => {
   return(
     <div className="cartitem">
        <div className="cart-image">
           <img src="#" alt="#" />
        </div>

        <Link to={`/product/${111}`} className="cart-name">
           <p>Product 1</p>
        </Link>

        <p className="cart-price">$504.94</p>

        <select className="cart-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button className="cart-deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
     </div>
   );
}

export default CartItem;