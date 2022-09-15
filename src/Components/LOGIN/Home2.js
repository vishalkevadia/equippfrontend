import React from 'react'
import './Styles/Home2.css'
import logo from './Images/Group (3).png'
import companyLogo from './Images/Frame 3065.png'
import arrow from './Images/Line 61.png'
import { useNavigate } from 'react-router-dom'
import laptopImg from '../Artboard 1 copy 11@4x 1.png'



const Home = () => {
  const navigate = useNavigate();

  const handleHome2 = (e) => {
    e.preventDefault()
    navigate('/login')


  }
  return (
    <div className="container-fluid">

      <div className="row homepage2">


        <div className="col-xl-4 homepage2-left">

          <div className="homepage2-right-res">
            <h2>Equipp yourself with a laptop <br /> that fits your needs</h2>
          </div>

          <div>
            <img src={logo} alt="" className='mb-5' />
            <img src={companyLogo} alt="" />
          </div>
          <div>
            <p>If you are part of our beta version,click below to start your journey</p>
            <button className="continue-btn" onClick={handleHome2}>Start <img src={arrow} alt="" /></button>
          </div>
        </div>



        <div className="col-xl-8 homepage2-right">
          <div className="box"><img src={laptopImg} alt="laptop" /></div>
          <div className="typo">
            <h2>Are you a</h2>
            <div className='highlight'>
              <h2>Freelancer?</h2>
              <h2>Startup?</h2>
              <h2>Gamer?</h2>
            </div>
          </div>
          <p>Are you a Freelancer? Startup? Gamer? <br />
            We have something for all your requirements</p>
        </div>


      </div>

    </div>
  )
}

export default Home