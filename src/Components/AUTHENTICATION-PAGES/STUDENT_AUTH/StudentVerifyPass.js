import React from 'react'
import '../../../App.css'
import pass from './Images/password.png'
import arrow from './Images/rightarrow.png'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'


const StudentVerifyPass = () => {
  return (
    <>
      <CheckoutNav title='Student' />


      <div className='login-page' >

        <div className="login-box text-center">
          <div>
            <h2>Verify document <br /> password</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="text-center">
            <img src={pass} alt="VerifyUser" />
          </div>

          <div>
            <input type="text" name="" placeholder="Enter Password" id="" />
            <button className="continue-btn-outline">VERIFY <img src={arrow} alt="" /></button>
          </div>

        </div>

      </div>
    </>
  )
}

export default StudentVerifyPass