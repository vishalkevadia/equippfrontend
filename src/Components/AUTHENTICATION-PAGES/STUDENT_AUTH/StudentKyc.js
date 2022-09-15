import React from 'react'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'
import '../../../App.css'
import arrow from './Images/rightarrow.png'
import sKyc from './Images/Equip animation_With bg 1.png'


export default function StudentKyc() {
  return (
    <>
      <div>

        <div className="nav">
          <CheckoutNav title='Student' />
        </div>


        <div className='login-page' >

          <div className="login-box text-center">
            <div>
              <h2>Enter PAN & <br />
                Mobile Number</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="text-center">
              <img src={sKyc} alt="LoginPage" />
            </div>

            <div>


              <input type="text" name="" placeholder="Enter their PAN card number" className='mb-1' />
              <a href=""> <h6 className="ph-number text-start mb-3">Don’t have a PAN Card? Enter guardian details.</h6></a>
              <input type="text" name="" placeholder="Enter mobile number linked to PAN card " />
              <button className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
