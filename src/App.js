import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/navigation';
import HomeScreen from './Components/Pages/HomeScreen';
import ProductScreen from './Components/Pages/ProductScreen';
import CartScreen from './Components/Pages/CartScreen';
import BackDrop from './Components/BackDrop';

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <BackDrop />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/product/:id' element={<ProductScreen />}/>
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
