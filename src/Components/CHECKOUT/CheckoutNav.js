import React from 'react'
import './Styles/CheckoutNav.css'
import logo1 from '.././Images/Logo.png'



export default function CheckoutNav(props) {
  return (

    <>
      <nav className="navbar navbar-expand-lg check-nav">
        <div className="container-fluid">
          <div className="navbar-brand check_nav_img">
            <img className='check-nav-logo-2' src={logo1} alt="84rd1608hp" />
          </div>

      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <h4 className="checkout-text">{props.title}</h4>
          </ul>   
        </div>
      </nav>
    </>

  )
}
