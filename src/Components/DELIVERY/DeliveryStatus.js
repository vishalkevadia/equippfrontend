import React from 'react'
import CheckoutNav from '../CHECKOUT/CheckoutNav'
import truck from './Images/truck.png'
import '../../App.css'
export default function DeliveryStatus() {
  return (
    <>
      <div className="nav"><CheckoutNav /></div>


      <div className='login-page' >

        <div className="login-box text-center">

          <div className="text-center main-image">
            <img src={truck} alt="LoginPage" />
          </div>

          <div>
            <h2>Your product will be delivered on
              <h2 className="fw-bold"> 16/09/22</h2>
            </h2>
            <p className='mt-4'>Contact  <span className="ph-number">+91-987654321</span> for <br />
              further queries</p>
          </div>

          <button className="continue-btn-outline">GO BACK HOME</button>

        </div>

      </div>

    </>
  )
}
