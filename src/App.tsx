import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Overview from './pages/Overview';
import MyBids from './pages/MyBids';
import ProductList from './pages/ProductList';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/overview' element={<Overview />}></Route>
          <Route path='/products' element={<ProductList />}></Route>
          <Route path='/bids' element={<MyBids />}></Route>

      </Routes>
    </>
  );
}

export default App;
