import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { LiaHeadsetSolid } from "react-icons/lia";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom'
import { MdOutlineShoppingCart, MdSend } from "react-icons/md";
import Navbar from './Navbar';
const Home = ({cart,setCart}) => {
  return (
    <div>
      <Navbar cart={cart} setCart={setCart}></Navbar>

      <div className='herosection'>
        <h3>Plants for your home</h3>
        <p>Where every leaf tells a story, and every bloom paints a picture. Nurture nature, grow happiness. Breathe in the serenity, exhale the stress. A sanctuary of green wonders awaits—your haven in nature's embrace.</p>
        <button><a href="/product">Buy Plants</a></button>
      </div>
      <div className="gridlayout">
        <div className="featuredcategoriesdiv">
          <div className="categorydiv">
            <h2>Feautured Categories</h2>
            <hr/>
            <div className="category1">
              <div className="toprated">
                <div className="content">
                  <h4>Top-rated</h4>
                  <p>17 Products</p>
                </div>
              </div>
              <div className="featured">
                <div className="content">
                  <h4>Featured</h4>
                  <p>13 Products</p>
                </div>
              </div>
              <div className="bestseller">
                <div className="content">
                <h4>Best-seller</h4>
                <p>10 Products</p>
                </div>
              </div>
              <div className="lowmaintenance">
                <div className="content">
                <h4>low-Maintenance</h4>
                <p>14 Products</p>
                </div>
              </div>
            </div>
            <div className="category2">
              <div className="freeship">
                <MdOutlineLocalShipping className="icon"/>
                <div className="content">
                  <h2>Free Shipping</h2>
                  <p>Free shipping on all orders</p>
                </div>
              </div>
              <div className="support24">
              <LiaHeadsetSolid className="icon"/>
                <div className="content">
                  <h2>Support 24/7</h2>
                  <p>Contact us anytime</p>
                </div>
              </div>
              <div className="securepay">
              <RiSecurePaymentFill className="icon"/>
              <div className="content">
                  <h2>Secure Payment</h2>
                  <p>Payments are Secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
