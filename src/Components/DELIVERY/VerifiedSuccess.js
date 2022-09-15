import React from 'react'
import CheckoutNav from '../CHECKOUT/CheckoutNav'
import arrow from './Images/rightarrow.png'
import verify from './Images/verified.png'
import '../../App.css'
export default function VerifiedSuccess() {
  return (
    <>
      <div className="nav"><CheckoutNav /></div>


      <div className='login-page' >

        <div className="login-box text-center">

          <div className="text-center main-image">
            <img width={444} src={verify} alt="LoginPage" />
          </div>

          <div>
            <h2>You are verified!</h2>
            <p className='mt-4'>Contact  <span className="ph-number">+91-987654321</span> for <br />
              further queries</p>
          </div>

            <button className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>

        </div>

      </div>

    </>
  )
}
