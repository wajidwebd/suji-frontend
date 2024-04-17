import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => {
  return (
    <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='PaymentSuccess'>
  
      <i class="fa-solid fa-circle-check"></i>
      <h1> Your Payment was Done Successfully </h1>
      <button className='GoToback'><Link to='/home' className='GoToBack'>Back To Cart</Link></button>

      </div>
    </div>
  )
}
