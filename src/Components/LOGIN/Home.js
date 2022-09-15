import React from 'react'
import './Styles/Home.css'
// import logo from '../Loading2.gif'
import logo from '../loading.gif'
import companyLogo from './Images/Logo_text (1).svg'
import arrow from './Images/Line 61.png'
import { useNavigate } from 'react-router-dom'
import laptopImg from '../Artboard 1 copy 11@4x 1.png'


const Home2 = () => {
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className="container-fluid">

      <div className="row homepage">
        <div className="col-xl-4 homepage-left">

          <div className="homepage-right-res">
            <h2>Get tech when you want, as long as you want</h2>
             
          </div>

          <div className='logo-title'>
            <img src={logo} alt="" className='mb-5 logo_item' />
            <div className="col-xl-8 homepage-right-res">
              <p>Are you a Freelancer? Startup? Gamer?
                We have something for all your requirements</p>
            </div>
            <img src={companyLogo} alt="" />
          </div>


          <div>
            <p>If you are part of our beta version,click below to start your journey</p>
            <button className="continue-btn" onClick={handleHome}>continue <img src={arrow} alt="" /></button>
          </div>
        </div>


        <div className="col-xl-8 homepage-right">
          <div className="box"><img src={laptopImg} className="img-fluid" alt="laptop" /></div>
          <h2>Get tech when you want <br />As long as you want</h2>
          <p>Are you a Freelancer? Startup? Gamer? <br />
            We have something for all your requirements</p>
        </div>




      </div>

    </div>
  )
}

export default Home2