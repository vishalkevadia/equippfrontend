import React from 'react'
import './Styles/OtpPage.css'
import artBoard1 from './Images/Artboard 10 copy 1.png'
import arrow from './Images/Line 61 (1).png'
import Navbar from './Navbar'
import PinInput from "react-pin-input";


export default function OtpPage() {

  return (
    <div>
      <div className="nav"><Navbar /></div>

      <div className='login-page' >

        <div className="login-box text-center">
          <div>
            <h2>Hello! Username</h2>
            <p>Please enter the OTP sent to +9123***6
              & mw***@gmail.com</p>
          </div>

          <div className="text-center">
            <img src={artBoard1} alt="LoginPage" />
          </div>

          <div>


            <PinInput length={6} focus type="numeric" inputMode="numeric" />

            <p style={{ color: '#8C8D8D' ,marginTop:'8px' }}>I haven’t recieved a code (0:05)</p>
            <button className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>
          </div>

        </div>

      </div>
    </div>
  )
}
