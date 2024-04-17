import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MdOutlineShoppingCart, MdSend } from "react-icons/md";
const About = ({cart,setCart}) => {
  return (
    <div>
            <div className='navbardiv'>
        <div className='navlogoname'>
          <img src={require("./images/plantlogo.png")}></img>
          <h1>PlantiFy</h1>
        </div>
       
        <div className="navbarlinkdiv">
          <Link className="homelink" to="/home">Home</Link>
          <Link to="about">About</Link>
          <Link to="product">Plants</Link>
          <a href="#footerid">Contact</a>
        </div>  
        <Link to="cart"><MdOutlineShoppingCart className='cartIcon' />
        {cart.length!=0 ? <p className="cartlength">{cart.length}</p> : ""}
        </Link>
        
      </div>
      <Outlet/>
      <div className="abtherosection">
        <h3>Green Elegance Blooms</h3>
        <p>Plantify Nursery: Where green dreams take root. Cultivating beauty, one leaf at a time. Your haven of lush wonders awaits. Embrace the leafy bliss, breathe in the serenity. Plants: Nature's silent poetry. </p>
        <button><a href="/product">Buy Plants</a></button>
      </div>
      <div className="gridlayout">
        <div className="abtsection">
          <div className="welcome">
            <img src={require("./images/abtplant.jpg")} alt='...'></img>
            <div className="welcomecontent id">
              <h2>WELCOME TO <span>PLANTIFY</span></h2>
              <p>Welcome to Plantify Shop, your sanctuary of botanical wonders. Immerse yourself in a world where greenery meets elegance. Explore our curated collection, transforming spaces into lush, vibrant retreats. Let Plantify be the source of your plant-filled joy</p>
              <h2>BEST PLANT NURSERY</h2>
              <p>Thrilled to announce that in 2022, we proudly received the Best Plant Nursery Award! Our commitment to excellence in cultivating diverse and healthy green companions has been recognized. At our award-winning nursery, we continue to nurture a haven for plant enthusiasts, ensuring top-quality selections and an unmatched horticultural experience. Join us in celebrating a year of growth and accolades in the world of plants</p>
            </div>
          </div>
          <div className="visionmissiongoal">
            <h3>Vision<br></br><p>Cultivating a thriving community through green beauty. Our plant nursery envisions homes flourishing with nature's touch.</p></h3>
            <h3>Mission<br></br><p>Nurturing green living through quality plants. Our mission is to bring nature's vitality into every home.</p></h3>
            <h3>Goal<br></br><p>Fostering a leafy legacy of joy and wellness. Our goal is to be the heart of homes filled with thriving, vibrant plants.</p></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About