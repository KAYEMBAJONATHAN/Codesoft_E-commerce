import './homescreen.css';
import './productScreen.css';

const ProductScreen = () => (
  <div className="productScreen">
    <div className="productScreen-left">
      <div className="left-image">
        <img src="#" alt="#" />
      </div>
      <div className="left-info">
        <p className="left-name">Pro 1</p>
        <p>Price: $504.94</p>
        <p>Description: lorem...</p>
      </div>
    </div>
    <div className="product-right">
      <div className="right-info">
        <p>
          Price:
          {' '}
          <span>$504.94</span>
        </p>
        <p>
          Status:
          {' '}
          <span>In Stoct</span>
        </p>
        <p>
          Qty
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
        <p><button type="button">Add To Cart</button></p>
      </div>
    </div>
  </div>
);

export default ProductScreen;
