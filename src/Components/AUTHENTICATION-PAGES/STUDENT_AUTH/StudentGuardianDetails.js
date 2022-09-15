import React from 'react'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'
import '../../../App.css'
import arrow from './Images/rightarrow.png'
import sGuard from './Images/Artboard 1 copy 2 1.png'

export default function StudentGuardianDetails() {
  return (
    <>
      <div>
        <CheckoutNav title='Student' />

        <div className='login-page' >

          <div className="login-box text-center">
            <div>
              <h2>Enter guardian
                details</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="text-center">
              <img src={sGuard} alt="LoginPage" />
            </div>

            <div>


              <input type="text" name="" placeholder="Enter Full name" className='mb-3' />
              <input type="text" name="" placeholder="Enter their PAN card number" className='mb-3' />
              <input type="text" name="" placeholder="Enter mobile number linked to PAN card " />

              <button className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
