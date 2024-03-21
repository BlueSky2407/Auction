import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import {Routes, Route} from "react-router-dom";

import MyBids from './pages/MyBids';
import ProductList from './pages/ProductList';
import UserProfile from './pages/UserProfile';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/products' element={<ProductList />}></Route>
          <Route path='/bids' element={<MyBids />}></Route>
          <Route path='/profile' element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
