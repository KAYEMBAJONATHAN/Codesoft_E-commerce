import Product from "../product";
import '../Pages/homescreen.css'

const HomeScreen = () => {
    return(
       <div className="homescreen">
         <h2 className="home-title">Latest Products</h2>
        
        <div className="home-product">
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
        </div>    
      </div>
    );
}

export default HomeScreen;