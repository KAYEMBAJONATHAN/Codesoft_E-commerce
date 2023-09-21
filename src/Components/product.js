import { Link } from 'react-router-dom';
import '../Style/product.css';

const Product = () => {
    return(
        <div className="product">
            <img src="" alt="" />
            <div className="product-info">
               <p className="product-name">Product 1</p>
               <p className="product-description">hhbbfhh</p>
               <p className="info-price">$500.22</p>
               
               <Link to={`/product/${3456}`} className="info-button">
                  View
               </Link>
            </div>
        </div>
    );
}

export default Product;