import React, { useEffect,useState } from 'react'
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { TfiFaceSad } from "react-icons/tfi";
import { Link, Outlet } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import { MdOutlineShoppingCart, MdSend } from "react-icons/md";
const Cart = ({cart,setCart}) => {
  const [price,setPrice]=useState(0)
  const [plantPrice,setPlantprice]=useState([])
  useEffect(() => {
    var amount=0;
    cart.map((pricecalculate)=>amount=(pricecalculate.count * pricecalculate.Price)+amount);
    setPrice(amount)
    var singleprice=0;
    // cart.map((singleplantprice)=>console.log(singleplantprice))
    // // singleprice=(singleplantprice.count * singleplantprice.Price)
    // setPlantprice(singleprice)
    // console.log(singleprice)
  })
  
  const removecart=(ro)=>{
    console.log("rem",ro);
    let removeddata = cart.filter((r)=>r.id!== ro.id)
    setCart(removeddata)
  }

  const incdec=(gettingdata,num)=>{
    const itemposition=cart.indexOf(gettingdata);
    cart[itemposition].count=cart[itemposition].count+num;
    let val=cart[itemposition].Price;
    cart[itemposition].total=val*cart[itemposition].count;
    // cart[itemposition].Price=cart[itemposition].Price * cart[itemposition].count;
    // console.log(val);
    setCart([...cart])
  }
  const paymentintegration = async()=>{
    const stripe = await loadStripe('pk_test_51NzuH0SGp41m30vUAeryKVEm2UHkvf4RqfZkmICPi4viCWbxOp9Nfc1o3OVuf28cYIZrZKk8JwUkGFY9QXsggKl400cKIxUQZc')
    const body={
      products:cart
    }
    const headers={
      "Content-Type":"application/json"
    }
    const response = await fetch('https://suji-backend.onrender.com/api/create-checkout-session',{
      method:'POST',
      headers:headers,
      body:JSON.stringify(body)
      
    })
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId:session.id
  });
  console.log("result",result);
  }
  return (
    <div>
            <div className='navbardiv'>
        <div className='navlogoname'>
          <img src={require("./images/plantlogo.png")}></img>
          <h1>PlantiFy</h1>
        </div>
       
        <div className="navbarlinkdiv">
          <Link className="homelink" to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Plants</Link>
          <a href="#footerid">Contact</a>
        </div>  
        <Link to="/cart"><MdOutlineShoppingCart className='cartIcon' />
        {cart.length!=0 ? <p className="cartlength">{cart.length}</p> : ""}
        </Link>
        
      </div>
      <Outlet/>
      <div className='cartherosection'>
        <h3>Cart of Greenery!</h3>
        <p>Load your cart with green dreams. Every leaf tells a story—choose yours. Transform your space with our nursery's botanical treasures.</p>
        <button><a href="/product">Buy Plants</a></button>
      </div>
      <div className="cartsectiondiv">
      <div className="gridlayout">
      {cart.length==0 ? <div><h2 className="emptycart">Your Cart Is Empty</h2><TfiFaceSad className='sadIcon'/></div> : <div><h2>Your Cart</h2><hr></hr></div>}
      
      {
        cart.map((o)=>
          <div className="cartcards">
            <div><img src={o.image}/></div>
            <div className='itemdetails'>
              <h3>{o.name}</h3>
              <h5>Price Rs. {o.Price}</h5>
            </div>
            <div className='itemincrementdecrement'>
              <button onClick={()=>incdec(o,1)}>+</button>
              <p>{o.count}</p>
              <button onClick={()=>incdec(o,-1)}>-</button>
            </div>
            <div><h4 className="planttotal">Rs. {o.total}</h4></div>
            <div><button className="removeIcon" onClick={()=>removecart(o)} ><MdOutlineRemoveCircleOutline /></button></div>
            
          </div>
          
        )
      }
      {price!=0 ? <h1 className='totalrs'>Total: Rs. {price}</h1> : ""}
      <button className='paymentbtn' onClick={paymentintegration}>Payment</button>
      {/* <h1 className='totalrs'>Total: Rs. {price}</h1> */}
      </div>
      </div>
    </div>
    
  )
}

export default Cart
