import React from 'react'
import './Styles/NewAccountWithoutOrder.css'
import '../../App.css'
import withoutImg from '.././Images/Asset 19.png'

import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'



export default function NewAccountWithoutOrder() {
  const navigate = useNavigate()


  const clickHandler = () => {
    navigate('/')
  }
  return (
    <div className='nawo'>
      <div className="nav"><Navbar log='LOGIN' /></div>

      <div className='login-page' >

        <div className="text-center no-orderBox">

          <div className="text-center common-width withoutorderImg">
            <img src={withoutImg} alt="LoginPage" />
          </div>



          <div className='withoutorderPara'>
              <h2>You have not placed <br />
                any order with us.</h2>
              <p>Reach out to  &nbsp;
                <span className="ph-number">
                  +91-987654321  </span> &nbsp;
                to check our inventory
              </p>
            <button className="continue-btn-outline nawo-btn" onClick={clickHandler}>GO BACK HOME</button>
          </div>
        </div>

      </div>

    </div>
  )
}
