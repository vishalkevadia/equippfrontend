import React from 'react'
import './Styles/ChooseType.css'
import artBoard7 from './Images/Frame 3065 (1).png'
import Navbar from './Navbar'


export default function ChooseType() {
  return (
    <div className='choose-type-container'>

      <div className="nav">
        <Navbar />
      </div>


      <div className='ct-login-page' >

        <div className="login-box text-center">
          <div className="text-center">
            <img src={artBoard7} alt="LoginPage" />
          </div>

          <div>
            <h2>Lets get you verified</h2>
            <p className='highlight'>Choose which suits you best.</p>
          </div>

          <div>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">STUDENT</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">INDIVIDUAL PROFESSIONAL</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">PARTNERSHIP FIRM</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio4">PVT LTD / PUBLUC / LLP</label>
          </div>

        </div>



      </div>
    </div>
  )
}
