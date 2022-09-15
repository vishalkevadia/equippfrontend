import React from 'react'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'
import '../../../App.css'
import arrow from '../STUDENT_AUTH/Images/rightarrow.png'
import sKyc from '../STUDENT_AUTH/Images/Equip animation_With bg 1.png'


export default function IndividualProKyc() {
  return (
    <>
      <div>

        <CheckoutNav title='INDIVIDUAL PROFESSIONAL' />


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
