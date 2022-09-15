import React from 'react'
import professionImage from './Images/protype.png'
import '../../../App.css'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'

export default function IndividualProfessionType() {
  return (
    <>
      <CheckoutNav title="INDIVIDUAL PROFESSIONAL" />

      <div className='login-page profession-type' >

        <div className="login-box text-center">
          <div>
            <h2 className='mb-4' >Choose type <br /> of profession</h2>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          </div>

          <div className="text-center">
            <img src={professionImage} alt="LoginPage" />
          </div>

          <div>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{ fontFamily: 'Spline Sans', fontWeight: 400 }}>FREELANCER</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{ fontFamily: 'Spline Sans', fontWeight: 400 }}>SALARIED</label>
          </div>

        </div>
      </div>
    </>
  )
}
