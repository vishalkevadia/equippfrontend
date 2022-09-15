import React, { useState } from 'react'
import './Styles/LoginPage.css'
import '../../App.css'
import loginImg from '.././Images/Asset 17.png'
import arrow from './Images/Line 61 (1).png'
import Navbar from './Navbar'
import OtpPage from './MobileOtp'
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading'


const LoginPage = () => {
  const [mobile_number, setMobile_number] = useState('');
  const [verified, setVerified] = useState({});
  const [loading, setLoading] = useState(false);


  let number = { mobile_number }

  const mobValue = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === '' || re.test(e.target.value)) {
      setMobile_number(e.target.value)
    }
  }

  const submitHandle = (e) => {
    e.preventDefault()

    setLoading(true)
    fetch(`${process.env.REACT_APP_API_KEY}loginapi_with_mobile_number`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(number)

      }).then((response) => {
        if (response.status === 200) {
          response.json().then((result) => {
            setVerified(result)
            setLoading(false)

          })
        } else {
          response.json().then((result) => {
            if (result.error) {
              toast.error('Your mobile number is not registered with us. Please sign up.', { theme: 'colored' })
            }
            setLoading(false)

            setMobile_number('')
            if (result && result.mobile_number) {
              toast.error(result.mobile_number, { theme: 'colored' })
            }
          })
        }
        setLoading(false)

      })




  }



  return (
    <>
      {loading === true && <Loading />}

      {
        verified && verified.success ?
          <OtpPage mobile_number={mobile_number} user_name={verified.user_name} />
          :
          <>
            <div className="nav"><Navbar sign='SIGN UP' /></div>
            <div className='login-page' >

              <div className="login-box text-center">
                <div className='uperBox'>
                  <h2>Enter Mobile <br /> Number to login</h2>
                  <p className='topPara'>You will receive an OTP,  so keep your phone
                    handy</p>
                </div>

                <div className="text-center common-width login-img">
                  <img src={loginImg} alt="LoginPage" />
                </div>

                <div className='lowerbox'>
                  <form onSubmit={submitHandle}>
                    <input type="text" className='mobile-input' name="country_code" value={mobile_number} onChange={mobValue} placeholder="Enter Mobile Number" />
                    <button type='submit' className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>
                    <div className="signupbtn">
                      <Link to='/signup' className='sb'>Sign-up</Link>
                    </div>

                    <ToastContainer
                      position="top-center"
                      autoClose={2000}
                      hideProgressBar
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      transition={Zoom}
                      style={{ width: 'auto' }}
                      toastStyle={{ background: 'linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)' }}
                    />

                  </form>
                </div>

              </div>

            </div>
          </>

      }
    </>
  )
}

export default LoginPage