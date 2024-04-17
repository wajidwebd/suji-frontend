import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MdOutlineShoppingCart, MdSend } from "react-icons/md";
const Navbar = ({cart,setCart}) => {
  return (
    <div>
      <div className='navbardiv'>
        <div className='navlogoname'>
          <img src={require("./images/plantlogo.png")}></img>
          <h1>PlantiFy</h1>
        </div>
       
        <div className="navbarlinkdiv">
          <Link className="homelink" to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Plants</Link>
          <a href="#footerid">Contact</a>
        </div>  
        <Link to="/cart"><MdOutlineShoppingCart className='cartIcon' />
        {cart.length!=0 ? <p className="cartlength">{cart.length}</p> : ""}
        </Link>
        
      </div>
      <Outlet/>

    </div>
  )
}

export default Navbar
