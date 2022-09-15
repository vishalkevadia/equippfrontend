import React from 'react'
import Navbar from './Navbar'
import './Styles/RentalProducts.css'
import artBoard5 from './Images/Artboard 10 copy 9 1.png'
import artBoard6 from './Images/Artboard 10 copy 8 1.png'



export default function RentalProducts() {
  return (
    <div>

      <div className="nav">
        <Navbar />
      </div>


      <div className='login-page' >

        <div className="login-box text-center">
          <div>
            <h2>Hello! <br /> Username</h2>
          </div>

          <div className="text-center ">
            <div className="product-box row">
              <img src={artBoard5} alt="productimage" className='col-6' />
              <p className='col-6'>
                Your <span className='fw-bold'>MacBook Pro  </span>
                has been rented for
                <span className='fw-bold'> 2 months</span>
              </p>
            </div>
            <div className="product-box row">
              <img src={artBoard6} alt="productimage" className='col-6' />
              <p className='col-6'>
                Payment of <br />
                <span className='fw-bold'> 2 months</span> <br />
                is due on
                <span className='fw-bold'> 16/08/2022</span>
              </p>
            </div>
          </div>



          <div>
            <p>Contact <span className="ph-number">
              +91-987654321</span> for further queries</p>
            <button className="continue-btn-outline">GO BACK HOME</button>
          </div>

        </div>

      </div>
    </div>
  )
}
