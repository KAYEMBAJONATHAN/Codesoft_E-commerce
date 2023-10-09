import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductDetails } from '../../redux/Actions/productAction';
import { addToCart } from '../../redux/Actions/cartAction';
import './productScreen.css';

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, id]);

  // const isInStock = product && product.countInStock > 0;

  // let statusMessage;
  // if (isInStock) {
  //   statusMessage = 'In Stock';
  //  } else {
  //   statusMessage = 'Out of Stock';
  // }

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate('/cart');
  };

  return (
    <div className="productScreen">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className="productScreen-left">
            <div className="left-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left-info">
              <p className="left-name">{product.name}</p>
              <p>
                Price:
                $
                {product.price}
              </p>
              <p>
                Description:
                {product.description}
              </p>
            </div>
          </div>
          <div className="product-right">
            <div className="right-info">
              <p>
                Price:
                <span>
                  $
                  {product.price}
                </span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStoct > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
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
