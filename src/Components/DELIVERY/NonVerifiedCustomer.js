import React from 'react'
import CheckoutNav from '../CHECKOUT/CheckoutNav'
import nonverify from './Images/notverify.png'
import '../../App.css'


const NonVerifiedCustomer = () => {
  return (
    <div>
      <div className="nav"><CheckoutNav /></div>


      <div className='login-page' >

        <div className="login-box text-center">

          <div className="text-center main-image">
            <img src={nonverify} width={300} alt="LoginPage" />
          </div>

          <div className='mt-4'>
            <h2>Your verification process was not
              completed, due to additional
              information being required.
            </h2>

            <p style={{ color: '#767677' , padding: '0 5  0px'}} className="mt-4">SOMEONE FROM OUR TEAM WILL REACH OUT TO YOU SOON</p> 

            <p className='mt-4'>Contact  <span className="ph-number">+91-987654321</span> for <br />
              further queries</p>
          </div>

          <button className="continue-btn-outline">GO BACK HOME</button>

        </div>

      </div>
    </div>
  );
}

export default NonVerifiedCustomer;
