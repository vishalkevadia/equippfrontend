import React from 'react'
import './SuccessPage.css'

import mainlogo from './Images/success-logo.png'

export default function SuccessPage() {
  return (
    <>  
      <div className="success-container">
        <img src={mainlogo} alt="mainlogo" />
        <h2 className="success-title">Looks Good</h2>
        <p className="success-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="success-button">GO BACK HOME</button>
      </div>
    </>
  )
}
