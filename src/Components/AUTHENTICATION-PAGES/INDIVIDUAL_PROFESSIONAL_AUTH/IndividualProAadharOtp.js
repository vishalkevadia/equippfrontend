import React from 'react'
import '../../../App.css'
import aadharOTP from '../STUDENT_AUTH/Images/aadharOTP.png'
import rightarrow from '../STUDENT_AUTH/Images/rightarrow.png'
import PinInput from "react-pin-input";
import CheckoutNav from '../../CHECKOUT/CheckoutNav'


export default function IndividualProAadhar() {

  return (
    <div>
      <CheckoutNav title="INDIVIDUAL PROFESSIONAL" />

      <div className='login-page ' >

        <div className="login-box text-center">
          <div>
            <h2 className='mb-4'>Verify Your Aadhar</h2>
            <p>Please enter the OTP sent to +9123***6
              & mw***@gmail.com</p>
          </div>

          <div className="text-center">
            <img src={aadharOTP} alt="LoginPage" />
          </div>

          <div>
            <PinInput length={6} focus type="numeric" inputMode="numeric"  />

            <p style={{ color: '#8C8D8D', marginTop: '21px' }}>I haven’t recieved a code (0:05)</p>
            <button className="continue-btn-outline">CONTINUE <img src={rightarrow} alt="arrowICon" /></button>
          </div>

        </div>

      </div>
    </div>
  )
}
