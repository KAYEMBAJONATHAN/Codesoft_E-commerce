import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/Actions/productAction';
import { addToCart } from '../../redux/Actions/cartAction';
import './productScreen.css';

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, prduct } = productDetails;

  useEffect(() => {
    if (prduct && match.params.id !== prduct._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, prduct, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(prduct._id, qty));
    history.push('/cart');
  };

  return (
    <div className="productScreen">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className="productScreen-left">
            <div className="left-image">
              <img src={prduct.imageUrl} alt={prduct.name} />
            </div>
            <div className="left-info">
              <p className="left-name">{prduct.name}</p>
              <p>
                Price:
                $
                {prduct.price}
              </p>
              <p>
                Description:
                {prduct.description}
              </p>
            </div>
          </div>
          <div className="product-right">
            <div className="right-info">
              <p>
                Price:
                <span>
                  $
                  {prduct.price}
                </span>
              </p>
              <p>
                Status:
                <span>
                  {prduct.countInStoct > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target)}>
                  {[...Array(product.countInStoct).keys()].map((x) => {
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>;
                  })}
                  ;
                </select>
              </p>
              <p>
                <button
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductScreen;
