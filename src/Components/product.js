import { Link } from 'react-router-dom';
import '../Style/product.css';

const Product = ({imageUrl, name, price, description, productId}) => (
  <div className="product">
    <img 
       src={imageUrl} 
       alt={name} 
    />

    <div className="product-info">
      <p className="product-name">{name}</p>
      <p className="product-description">{description.substring(0, 100)}...</p>
      <p className="info-price">${price}</p>

      <Link to={`/product/${productId}`} className="info-button">
        View
      </Link>
    </div>
  </div>
);

export default Product;
