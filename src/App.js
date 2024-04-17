import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product'
import Cart from './Cart';
import About from './About';
import './navbar.css';
import { useState } from 'react';
import { Signup } from './loginfolder/Signup';
import { Login } from './loginfolder/Login';
import Footer from './Footer';
import { Success } from './Success';
import { Failure } from './Failure';
function App() {
  const [cart,setCart]=useState([]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
          <Route path='home' element={<Home cart={cart} setCart={setCart}></Home>}></Route>
          <Route path='about' element={<About cart={cart} setCart={setCart}></About>}></Route>
          <Route path='product' element={<Product cart={cart} setCart={setCart}/>}></Route>
          <Route path='cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
          <Route path='sucess' element={<Success></Success>}></Route>
          <Route path='cancel' element={<Failure></Failure>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
