import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/Pages/HomeScreen';
import ProductScreen from './Components/Pages/ProductScreen';
import CartScreen from './Components/Pages/CartScreen';

import Navbar from './Components/navigation';
import BackDrop from './Components/BackDrop';
import SideDraw from './Components/sideDraw';

function App() {
  const [sideDraw, setSideDraw] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideDraw(true)} />
      <SideDraw show={sideDraw} click={() => setSideDraw(false)} />
      <BackDrop show={sideDraw} click={() => setSideDraw(false)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
