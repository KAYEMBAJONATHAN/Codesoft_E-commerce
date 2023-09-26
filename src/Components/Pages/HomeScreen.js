import Product from "../product";
import '../Pages/homescreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getProducts as listProducts } from '../redux/Actions/productActions';

const HomeScreen = () => {
const dispatch = useDispatch()

const getProducts = useSelector((state) => state.getProducts);
const { products, loading, error } = getProducts;

useEffect(() => {
  dispatch(listProducts())
}, [dispatch])

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