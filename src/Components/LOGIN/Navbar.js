import React from 'react'
import './Styles/Navbar.css'
import logo from '.././Images/Logo.png'
import { Link } from 'react-router-dom'



const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand"> <img src={logo} alt="84rd1608hp" />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <h4 className="checkout-text">{props.title}</h4>
            </ul>
          </div>


          <span className="navbar-text">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {
                (props.sign && <Link className="nav-link" aria-current="page" to="/signup">{props.sign}</Link>)
                ||
                (props.log && <Link className="nav-link" aria-current="page" to="/login">{props.log}</Link>)
              }

            </ul>

          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar