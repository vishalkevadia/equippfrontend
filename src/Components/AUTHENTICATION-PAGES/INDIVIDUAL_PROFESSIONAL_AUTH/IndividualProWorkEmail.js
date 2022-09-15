import React from 'react'
import '../../../App.css'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'
import artBoard22 from './Images/Artboard 1 copy 6 1.png'
import rarrow from './Images/rightarrow.png'


export default function IndividualProWorkEmail() {
  return (
    <>
      <CheckoutNav title="INDIVIDUAL PROFESSIONAL" />

      <div className='login-page' >

        <div className="login-box text-center">
          <div>
            <h2 className='mb-3'>Work Email</h2>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          </div>

          <div className="text-center">
            <img src={artBoard22} alt="LoginPage" />
          </div>

          <div>


            <input type="text" name="" placeholder="Enter Email ID" />
            <button className="continue-btn-outline mt-4">CONTINUE <img src={rarrow} alt="" /></button>
          </div>

        </div>

      </div>
    </>
  )
}
