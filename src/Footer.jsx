import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MdOutlineShoppingCart, MdSend } from "react-icons/md";
const Footer = ({cart,setCart}) => {
  return (
    <div>

      <div className="footerdiv" id="footerid">
        <div className="gridlayout">
        <div className="footercontent">
        <div className="footersub1">
          <div className='navlogoname'>
            <img src={require("./images/plantlogo.png")}></img>
            <h1>PlantiFy</h1>
          </div>
          <p><b>Address</b><br/><span>4710-4890 Breckinridge St, UK Burlington, VT 05401</span></p>
          <p><b>Need help</b><br/><span>Call: 123-456-7890</span></p>
          <p><b>Email</b><br/><span>plantify@gmail.com</span></p>
        </div>
        <div className="footersub2">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/product">Buy Plants</a></li>
            <li><a href="/cart">Your Cart</a></li>
            <li><a>Subscribe</a></li>
          </ul>
        </div>
        <div className="footersub3">
        <h4>About</h4>
          <ul>
            <li><a href="/about.welcomecontent">Award</a></li>
            <li><a>Featured Products</a></li>
            <li><a>Our Vision</a></li>
            <li><a>Our Mission</a></li>
            <li><a>Our Goal</a></li>
          </ul>
        </div>
        <div className="footersub4">
        <h4>Subscribe</h4>
        <div className="subscribediv">
          <input type="email" placeholder='Enter Your Email'></input>
          <MdSend className="subscribeicon"/>
        </div>
        </div>
        
  
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
